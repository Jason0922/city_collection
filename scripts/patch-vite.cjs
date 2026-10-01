const fs = require("fs");
const path = require("path");

const file = path.join(
  __dirname,
  "..",
  "node_modules",
  "vite",
  "dist",
  "node",
  "chunks",
  "config.js"
);

const source = fs.readFileSync(file, "utf8");
const needle =
  "else return decodeURIComponent(normalizePath(path.join(server.config.root, url$3.slice(1))));";
const patch =
  "else { const joined = normalizePath(path.join(server.config.root, url$3.slice(1))); try { return decodeURIComponent(joined); } catch { return joined; } }";

if (source.includes(patch)) {
  console.log("vite already patched");
  process.exit(0);
}

if (!source.includes(needle)) {
  console.error("vite patch target not found");
  process.exit(1);
}

fs.writeFileSync(file, source.replace(needle, patch));
console.log("patched vite html path decoding");
