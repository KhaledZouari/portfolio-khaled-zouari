import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';

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
  const csp = html.match(/<meta[^>]+http-equiv="content-security-policy"[^>]+content="([^"]+)"/i)?.[1];
  if (!csp) {
    failures.push(`${file}: missing Content Security Policy meta tag`);
  }
  if (/content-security-policy[^>]+(?:unsafe-inline|unsafe-eval)/i.test(html)) {
    failures.push(`${file}: unsafe CSP source found`);
  }
  if (/\sstyle=["']/i.test(html)) {
    failures.push(`${file}: inline style attribute would be blocked by CSP`);
  }
  if (/\b(?:href|src)=["']\s*(?:javascript|vbscript):/i.test(html)) {
    failures.push(`${file}: dangerous URL protocol found`);
  }
  if (csp) {
    for (const script of html.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*type=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi)) {
      const hash = createHash('sha256').update(script[1]).digest('base64');
      if (!csp.includes(`'sha256-${hash}'`)) failures.push(`${file}: inline script hash missing from CSP`);
    }
  }
  for (const tag of html.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/gi)) {
    const rel = tag[0].match(/\brel=["']([^"']*)["']/i)?.[1] ?? '';
    if (!/\bnoopener\b/i.test(rel) || !/\bnoreferrer\b/i.test(rel)) {
      failures.push(`${file}: target=_blank link without noopener noreferrer`);
    }
  }
}

const vercel = JSON.parse(readFileSync(resolve('vercel.json'), 'utf8'));
const globalRule = vercel.headers?.find(({ source }) => source === '/(.*)');
const headers = new Map(globalRule?.headers?.map(({ key, value }) => [key.toLowerCase(), value]));
for (const required of ['x-content-type-options', 'x-frame-options', 'referrer-policy', 'permissions-policy', 'strict-transport-security']) {
  if (!headers.has(required)) failures.push(`vercel.json: missing ${required} header`);
}
if (headers.get('content-security-policy') !== "frame-ancestors 'none'") {
  failures.push('vercel.json: missing frame-ancestors protection');
}
const assetRule = vercel.headers?.find(({ source }) => source === '/_astro/(.*)');
const assetCache = assetRule?.headers?.find(({ key }) => key.toLowerCase() === 'cache-control')?.value;
if (assetCache !== 'public, max-age=31536000, immutable') {
  failures.push('vercel.json: missing immutable cache policy for hashed Astro assets');
}

if (failures.length) throw new Error(`Security checks failed:\n${failures.join('\n')}`);
console.log(`Security checks passed for ${files.length} HTML files and Vercel headers.`);
