/* eslint-disable @typescript-eslint/no-var-requires */
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const initializeSocketServer = require('./socket-server');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname.startsWith('/api/')) {
        app.getRequestHandler()(req, res, parsedUrl);
      } else {
        handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  });

  server.on('error', (err) => {
    console.error('Server error:', err);
  });

  const io = initializeSocketServer(server);

  io.on('error', (err) => {
    console.error('Socket.IO error:', err);
  });

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
}).catch((err) => {
  console.error('Error occurred starting server:', err);
});