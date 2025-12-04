// scripts/generate-routes-map.ts
import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';

const ROUTES_DIR = path.resolve(process.cwd(), 'src/routes');
const OUT_JSON = path.resolve(process.cwd(), 'src/settings/url/routes-map.json');
const OUT_TS = path.resolve(process.cwd(), 'src/settings/url/routes-map.ts');

function toCamelCase(str: string) {
  return str
    .split('-')
    .map((chunk, i) => (i === 0 ? chunk : chunk[0].toUpperCase() + chunk.slice(1)))
    .join('');
}

// Mantém tua regra anterior:
// [idAlgo] -> "algo"; caso contrário mantém como veio (kebab->camel)
function sanitizeKey(name: string) {
  // [param] -> "param" (camel); mantém exceção [idAlgo] -> "algo"
  const bracket = /^\[(.+)\]$/.exec(name);
  if (bracket) {
    const inner = bracket[1];

    // Regra especial: [idAlgo] -> "algo"
    const idPref = /^id([A-Z].*)$/.exec(inner);
    if (idPref) {
      const raw = idPref[1];
      return raw[0].toLowerCase() + raw.slice(1);
    }

    // Caso geral: [component-name] -> "componentName"
    return toCamelCase(inner);
  }

  // Pastas normais: kebab -> camel
  return toCamelCase(name);
}

// --- utils p/ geração do TS com funções --- //
function extractParamNames(urlPattern: string): string[] {
  const names = new Set<string>();
  const re = /\[(.+?)\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(urlPattern))) names.add(m[1]);
  return [...names];
}

function tsParamShape(params: string[]) {
  if (params.length === 0) return 'never'; // não deve ser usado, pois virá string
  // chave: string | number
  return `{ ${params.map((p) => `${p}: string | number`).join('; ')} }`;
}

/**
 * Gera o trecho TS do nó: { url: "..." , ...children } | { url: (params)=>"...", ...children }
 * Faz recursão sobre o objeto intermediário "map" (com url string) que coletamos do filesystem.
 */
function emitTsNode(node: any, indent = 2): string {
  const pad = ' '.repeat(indent);
  const padIn = ' '.repeat(indent + 2);

  const entries = Object.entries(node) as [string, any][];
  const lines: string[] = ['{'];
  for (const [key, value] of entries) {
    if (key === 'url' && typeof value === 'string') {
      const params = extractParamNames(value);
      if (params.length === 0) {
        // url estática (string)
        lines.push(`${padIn}"url": "${value}",`);
      } else {
        // url dinâmica -> função tipada
        const shape = tsParamShape(params);
        // usamos replace genérico p/ garantir encoding e erro quando faltam parâmetros
        const fnBody =
          ' (params: ' +
          shape +
          ') => {\n' +
          `${padIn}  return \`${value}\`.replace(/\\[(.+?)\\]/g, (_m, p: string) => {\n` +
          `${padIn}    const v = (params as Record<string, string | number>)[p];\n` +
          `${padIn}    if (v === undefined) throw new Error(\`Parâmetro obrigatório ausente: "\${p}"\`);\n` +
          `${padIn}    return encodeURIComponent(String(v));\n` +
          `${padIn}  });\n` +
          `${padIn}}`;
        lines.push(`${padIn}"url":${fnBody},`);
      }
    } else if (typeof value === 'object' && value && !Array.isArray(value)) {
      lines.push(`${padIn}"${key}": ${emitTsNode(value, indent + 2)},`);
    } else {
      // caso improvável
      lines.push(`${padIn}"${key}": ${JSON.stringify(value)},`);
    }
  }
  lines.push(`${pad}}`);
  return lines.join('\n');
}

// --- coleta do filesystem (como no teu código) --- //
async function collectChildren(params: { dir: string; parentPath: string }) {
  const { dir, parentPath } = params;
  const out: Record<string, any> = {};
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries.filter((e) => e.isDirectory())) {
    const name = entry.name;
    const fullPath = path.join(dir, name);

    // grupos (app) -> não contam no path nem nas chaves
    if (/^\(.*\)$/.test(name)) {
      const nested = await collectChildren({ dir: fullPath, parentPath });
      Object.assign(out, nested);
      continue;
    }

    const childKey = sanitizeKey(name);
    const urlHere = `${parentPath}/${name}`.replace(/\/+/g, '/');

    // recursão
    const grandchildren = await collectChildren({ dir: fullPath, parentPath: urlHere });

    // nó sempre tem "url" (string por enquanto) + filhos
    const node: Record<string, any> = { url: urlHere, ...grandchildren };

    if (Object.keys(node).length > 0) {
      // Observação: mantemos a chave literal como veio do diretório (ex.: "[userId]")
      // pois tua amostra mostra as chaves com colchetes nesse caso.
      out[childKey] = node;
    }
  }

  return out;
}

// --- geração principal --- //
export async function generateRoutesMap() {
  try {
    const map = await collectChildren({ dir: ROUTES_DIR, parentPath: '' });

    // 1) Grava JSON auxiliar (apenas com strings)
    await fs.promises.mkdir(path.dirname(OUT_JSON), { recursive: true });
    await fs.promises.writeFile(OUT_JSON, JSON.stringify(map, null, 2), 'utf-8');

    // 2) Emite TS com funções para URLs dinâmicas
    const tsHeader = `/* AUTO-GERADO por scripts/generate-routes-map.ts
 * - URLs estáticas: string
 * - URLs dinâmicas: (params) => string   (valida ausências e faz encode)
 */

type RouteUrl<P extends Record<string, string | number> = Record<string, string | number>> =
  string | ((params: P) => string);

export type RouteNode = { url: RouteUrl<any> } & { [k: string]: RouteNode };
`;

    const tsBody = `export const routesMap = ${emitTsNode(map)} as const;\n\nexport type RoutesMap = typeof routesMap;\n`;

    await fs.promises.mkdir(path.dirname(OUT_TS), { recursive: true });
    await fs.promises.writeFile(OUT_TS, tsHeader + tsBody, 'utf-8');
  } catch (err) {
    console.error('[ERRO ao gerar routes-map]', err);
  }
}

export function initRoutesMapWatcher() {
  generateRoutesMap();
  const routesGlob = `${ROUTES_DIR.replace(/\\/g, '/')}/**/*.svelte`;
  chokidar
    .watch(routesGlob, { ignoreInitial: true })
    .on('add', generateRoutesMap)
    .on('change', generateRoutesMap)
    .on('unlink', generateRoutesMap);
}
