require('dotenv').config({ quiet: true });
const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// Optional: restrict origins (empty array = allow all)
const originWhitelist = []; 

const server = corsAnywhere.createServer({
  "originWhitelist" : originWhitelist,
  "requireHeaders" : [],
  "removeHeaders" : [],
});

app.use((req, res) => {
  /*if (req.path === '/' || req.path === '') {
    res.writeHead(200, { 
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(`<h1>CORS Anywhere Proxy</h1>
            <p>Usage: append the target URL to the path, e.g.</p>
            <pre>http://${host}:${port}/https://example.com/api</pre>`);
    return; // Don't proxy this request
  }*/
  // cors-anywhere expects the target URL as the rest of the path
  server.emit('request', req, res);
});

app.listen(port, host, () => {
  console.log(`CORS Anywhere proxy running on http://${host}:${port}`);
});
