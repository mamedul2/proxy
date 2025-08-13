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
  
  // cors-anywhere expects the target URL as the rest of the path
  // e.g. GET /https://example.com/api
  const fullPath = req.originalUrl.slice(1); //req.path.slice(1);
  
  let targetUrl;

  try {
    targetUrl = decodeURIComponent(fullPath); //fullPath; 
  } catch {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    return res.status(400).send('Invalid URL encoding');
  }
  console.log(req.url);
  // now change req url
  req.url = '/' + targetUrl;
  console.log(req.url);
  server.emit('request', req, res);
});

//app.listen(port, host, () => { console.log(`CORS Anywhere proxy running on http://${host}:${port}`); });
app.listen(port, () => {
  console.log(`CORS Anywhere proxy running on http://${host}:${port}`);
});
