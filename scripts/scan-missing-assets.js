const fs = require("fs");
const path = require("path");

const root = process.cwd();

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, results);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = walk(root);
const missing = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8");
  const regex = /(src|href)\s*=\s*["']([^"']+)["']/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const url = match[2].trim();
    if (/^(https?:|mailto:|tel:|#|javascript:|\/\/|\/)/i.test(url)) continue;
    if (/^data:/i.test(url)) continue;
    if (/^\$\{/.test(url)) continue;
    if (/\.html($|\?|#)/i.test(url)) continue;

    const rel = url.split("?")[0].split("#")[0].replace(/^\//, "");
    const fullPath = path.join(root, rel);
    if (!fs.existsSync(fullPath)) {
      missing.push({ source: path.basename(file), url });
    }
  }
}

if (missing.length === 0) {
  console.log("NO_MISSING_ASSETS_FOUND");
} else {
  missing.sort((a, b) => (a.source + a.url).localeCompare(b.source + b.url));
  for (const item of missing) {
    console.log(`${item.source}\t${item.url}`);
  }
}
