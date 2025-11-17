import fs from "fs";
import path from "path";

const ROOT = path.resolve("src");
const COMPONENTS_DIR = path.join(ROOT, "components");
const INDEX_FILE = path.join(ROOT, "index.ts");

function pascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase())
    .replace(/\.svelte$/, "");
}

function getAllSvelteFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

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
  const files = getAllSvelteFiles(COMPONENTS_DIR);

  const exports = files.map((file) => {
    const relative = path.relative(ROOT, file).replace(/\\/g, "/");

    const name = pascalCase(path.basename(file, ".svelte"));

    return `export { default as ${name} } from "./${relative}";`;
  });

  exports.sort((a, b) => b.length - a.length);

  fs.writeFileSync(INDEX_FILE, exports.join("\n") + "\n");
  console.info(`✅ Gerado ${exports.length} exports em ${INDEX_FILE}`);
}

generateExports();
