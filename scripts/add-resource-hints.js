const fs = require("fs");
const path = require("path");

const root = process.cwd();

const hints = [
  '<link rel="preconnect" href="https://www.googletagmanager.com" />',
  '<link rel="preconnect" href="https://www.google-analytics.com" />',
  '<link rel="preconnect" href="https://pagead2.googlesyndication.com" />',
  '<link rel="preconnect" href="https://analytics.ahrefs.com" />',
  '<link rel="preconnect" href="https://code.tidio.co" />',
  '<link rel="dns-prefetch" href="https://www.googletagmanager.com" />',
  '<link rel="dns-prefetch" href="https://www.google-analytics.com" />',
  '<link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />',
  '<link rel="dns-prefetch" href="https://analytics.ahrefs.com" />',
  '<link rel="dns-prefetch" href="https://code.tidio.co" />',
];

const hintBlock = hints.join("\n    ");

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

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8");
  if (content.includes("https://www.googletagmanager.com")) {
    continue;
  }

  let updated = content;
  const themeMeta = /<meta\s+name=\"theme-color\"[^>]*>\s*/i;

  if (themeMeta.test(updated)) {
    updated = updated.replace(
      themeMeta,
      (match) => `${match}\n    ${hintBlock}\n`,
    );
  } else {
    updated = updated.replace(
      /<\/head>/i,
      `    <meta name=\"theme-color\" content=\"#ffffff\" />\n    ${hintBlock}\n  </head>`,
    );
  }

  if (updated !== content) {
    fs.writeFileSync(file, updated);
  }
}
