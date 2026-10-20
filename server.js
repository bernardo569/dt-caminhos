const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const url = require('node:url');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };

function safePath(requestPath) {
  const decoded = decodeURIComponent(requestPath.split('?')[0]);
  const relative = decoded === '/' ? '/index.html' : decoded;
  const resolved = path.resolve(root, `.${relative}`);
  if (!resolved.startsWith(root)) return null;
  if (fs.existsSync(resolved)) return resolved;
  const publicResolved = path.resolve(root, `./public${relative}`);
  return publicResolved.startsWith(path.resolve(root, './public')) ? publicResolved : null;
}

const server = http.createServer((request, response) => {
  const filePath = safePath(url.parse(request.url).pathname || '/');
  if (!filePath) { response.writeHead(400); response.end('Bad request'); return; }
  fs.stat(filePath, (error, stat) => {
    if (error || !stat.isFile()) { response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end('Not found'); return; }
    const type = types[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    response.writeHead(200, { 'Content-Type': type, 'Cache-Control': type.includes('html') ? 'no-cache' : 'public, max-age=3600' });
    fs.createReadStream(filePath).pipe(response);
  });
});
server.listen(port, '0.0.0.0', () => console.log(`DT.CAMINHOS preview listening on 0.0.0.0:${port}`));
