require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

try{
  app.use('/:protocol(http|https)/*', (req, res, next) => {
    const targetUrl = `${req.params.protocol}://${req.params[0]}`;
    const proxy = createProxyMiddleware({
      target: targetUrl,
      changeOrigin: true,
      secure: false,
      logLevel: 'silent',
    });
    proxy(req, res, next);
  });

}catch(err){
  app.use('/*', (req, res, next) => {
    const fullPath = req.params[0]; // everything after the first slash
    let targetUrl;

    try {
      targetUrl = decodeURIComponent(fullPath);
    } catch {
      return res.status(400).send('Invalid target URL encoding');
    }

    if (!/^https?:\/\//i.test(targetUrl)) {
      return res.status(400).send('Invalid target URL. Must start with http:// or https://');
    }

    createProxyMiddleware({
      target: targetUrl,
      changeOrigin: true,
      secure: false,
      logLevel: 'silent',
    })(req, res, next);
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
