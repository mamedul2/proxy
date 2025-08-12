require('dotenv').config({ quiet: true });
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  if (req.method === 'OPTIONS') return res.sendStatus(204);

  const fullPath = req.originalUrl.slice(1); //req.path.slice(1);
  
  let targetUrl;

  try {
    targetUrl = decodeURIComponent(fullPath); //fullPath; 
  } catch {
    return res.status(400).send('Invalid URL encoding');
  }

  if (!/^(http|https)?:\/\//i.test(targetUrl)) {
    return res.status(400).send('Invalid target URL. *Must start with http:// or https://');
  }

  createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    secure: false,
    logLevel: 'silent',
    onProxyRes(proxyRes, req, res) {
      proxyRes.headers['access-control-allow-origin'] = '*';
      proxyRes.headers['access-control-allow-methods'] = 'GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD';
      proxyRes.headers['access-control-allow-headers'] = 'Content-Type, Authorization, X-Requested-With';
    }
  })(req, res, next);

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
