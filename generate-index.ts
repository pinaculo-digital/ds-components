import fs from "fs";
import path from "path";

const ROOT = path.resolve("src");
const COMPONENTS_DIR = path.join(ROOT, "components");
const ASSETS_DIR = path.join(ROOT, "assets");
const INDEX_FILE = path.join(ROOT, "index.ts");

function pascalCase(str: string) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())   // Trata traços e underscores
    .replace(/^(.)/, (_, c) => c.toUpperCase())       // Primeira letra maiúscula
    .replace(/\.svelte$/, "");                        // Remove extensão
}

function getAllSvelteFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files = files.concat(getAllSvelteFiles(fullPath));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".svelte") &&
      !entry.name.includes("Description.svelte")
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

function generateExports() {
  const componentFiles = getAllSvelteFiles(COMPONENTS_DIR);
  const assetFiles = getAllSvelteFiles(ASSETS_DIR);

  const allFiles = [...componentFiles, ...assetFiles];

  const exports = allFiles.map((file) => {
    const relative = path.relative(ROOT, file).replace(/\\/g, "/");
    const name = pascalCase(path.basename(file, ".svelte"));

    return `export { default as ${name} } from "./${relative}";`;
  });

  // (Opcional) Ordena por nome
  exports.sort();

  fs.writeFileSync(INDEX_FILE, exports.join("\n") + "\n");
  console.info(`✅ Gerado ${exports.length} exports em ${INDEX_FILE}`);
}

generateExports();
