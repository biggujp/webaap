const https = require('https');
const url = 'https://docs.google.com/spreadsheets/d/10uHMmXnrpxiBuNSYLZvFoA7YhrOmj2ksSlrLwd6Yip4/gviz/tq?tqx=out:json&sheet=Sheet1';
https.get(url, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log(body);
  });
}).on('error', err => console.error('error', err.message));
