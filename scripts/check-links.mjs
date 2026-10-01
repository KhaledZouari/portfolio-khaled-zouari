import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, normalize, resolve } from 'node:path';

const root = resolve('dist');
if (!existsSync(root)) throw new Error('dist/ is missing. Run npm run build first.');

const files = [];
const walk = (directory) => readdirSync(directory).forEach((entry) => {
  const path = join(directory, entry);
  if (statSync(path).isDirectory()) walk(path);
  else if (path.endsWith('.html')) files.push(path);
});
walk(root);

const failures = [];
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;
    const target = clean.startsWith('/') ? join(root, clean) : resolve(dirname(file), clean);
    const candidates = [target, `${target}.html`, join(target, 'index.html')].map(normalize);
    if (!candidates.some(existsSync)) failures.push(`${file}: ${href}`);
  }
}
if (failures.length) throw new Error(`Broken internal links:\n${failures.join('\n')}`);
console.log(`Checked internal links in ${files.length} HTML files.`);
