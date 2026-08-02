const id = '10uHMmXnrpxiBuNSYLZvFoA7YhrOmj2ksSlrLwd6Yip4';
const sheet = 'Sheet1';
const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheet)}`;

(async () => {
  try {
    const res = await fetch(url);
    console.log('status', res.status);
    const text = await res.text();
    const match = text.match(/^[^(]*\(([^]*)\);?$/);
    if (!match) {
      console.error('parse failed');
      return;
    }
    const json = JSON.parse(match[1]);
    const cols = (json.table.cols || []).map((c) => c.label || c.id || '');
    const rows = json.table.rows || [];
    console.log('cols', JSON.stringify(cols));
    if (rows.length > 0) {
      const firstRow = (rows[0].c || []).map((cell) => (cell ? cell.v : null));
      console.log('firstRow', JSON.stringify(firstRow));
    }
    console.log('rows', rows.length);
  } catch (err) {
    console.error(err);
  }
})();
