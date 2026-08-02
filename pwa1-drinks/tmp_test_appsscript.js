const https = require('https');
const url = 'https://script.google.com/macros/s/AKfycbxKDx-YVXc181-9YAHuzVyf0uBVJX-TzVHqvoU0Be_pQEosN4EE4D1QqfyV7jxkOlGxlg/exec';
const payload = JSON.stringify({ action: 'saveOrder', sheetName: 'Sheet1', values: [['test', 'test', 'test', 'test', 'test', 'test']] });
const options = new URL(url);
options.method = 'POST';
options.headers = { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) };

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('status', res.statusCode);
    console.log('body', body);
  });
});
req.on('error', (err) => console.error('error', err.message));
req.write(payload);
req.end();
