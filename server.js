const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.argv[2] || process.env.PORT || 8000;
const root = process.cwd();

const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index (12).html';
  const filePath = path.join(root, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404; res.end('Not found');
      return;
    }
    if (stats.isDirectory()) {
      const idx = path.join(filePath, 'index (12).html');
      fs.stat(idx, (e) => {
        if (e) { res.statusCode = 404; res.end('Not found'); return; }
        streamFile(idx, res);
      });
      return;
    }
    streamFile(filePath, res);
  });
});

function streamFile(fp, res) {
  const ext = path.extname(fp).toLowerCase();
  res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
  const stream = fs.createReadStream(fp);
  stream.on('error', () => { res.statusCode = 500; res.end('Server error'); });
  stream.pipe(res);
}

server.listen(port, () => console.log(`Serving ${root} at http://localhost:${port}`));
