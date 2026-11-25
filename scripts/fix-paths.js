const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(process.cwd(), 'out');
const PREFIX = '/ordomind.novaveraai';

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) fixHtml(full);
  }
}

function fixHtml(file) {
  let html = fs.readFileSync(file, 'utf8');
  const original = html;
  // Rewrite only the framework's own _next/ paths
  html = html.replace(/(href|src)="\/_next\//g, `$1="${PREFIX}/_next/`);
  // Also handle Next's inline script strings with escaped quotes
  html = html.replace(/\\"\/_next\//g, `\\"${PREFIX}/_next/`);
  if (html !== original) {
    fs.writeFileSync(file, html);
    console.log('Patched:', path.relative(OUT_DIR, file));
  }
}

if (!fs.existsSync(OUT_DIR)) {
  console.error('No out/ directory — run npm run build first');
  process.exit(1);
}
walk(OUT_DIR);
console.log('Done.');