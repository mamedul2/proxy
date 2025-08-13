require('dotenv').config({ quiet: true });
const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// Optional: restrict origins (empty array = allow all)
const originWhitelist = []; 

const server = corsAnywhere.createServer({
  originWhitelist,
  requireHeaders: [],
  removeHeaders: [],
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers['access-control-allow-origin'] = '*';
    proxyRes.headers['access-control-allow-methods'] = 'GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD';
    proxyRes.headers['access-control-allow-headers'] = 'Content-Type, Authorization, X-Requested-With';
    proxyRes.headers['access-control-expose-headers'] = 'X-Request-URL, X-Final-URL';
    delete proxyRes.headers['set-cookie'];
    delete proxyRes.headers['set-cookie2'];
  }
});

app.use((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  // cors-anywhere expects the target URL as the rest of the path
  // e.g. GET /https://example.com/api
  server.emit('request', req, res);
});

//app.listen(port, host, () => { console.log(`CORS Anywhere proxy running on http://${host}:${port}`); });
app.listen(port, () => {
  console.log(`CORS Anywhere proxy running on http://${host}:${port}`);
});
