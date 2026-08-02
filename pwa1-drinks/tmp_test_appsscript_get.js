const https = require('https');
const url = 'https://script.google.com/macros/s/AKfycbxKDx-YVXc181-9YAHuzVyf0uBVJX-TzVHqvoU0Be_pQEosN4EE4D1QqfyV7jxkOlGxlg/exec';
const params = new URLSearchParams({
  action: 'test',
  sheetName: 'Sheet1'
});
https.get(`${url}?${params.toString()}`, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('GET status', res.statusCode);
    console.log('GET body', body);
  });
}).on('error', (err) => console.error('GET error', err.message));
