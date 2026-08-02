export const extractSpreadsheetIdFromUrlOrId = (value: string): string => {
  const input = String(value || '').trim();
  if (!input) {
    throw new Error('Missing Google Sheets URL or spreadsheet ID.');
  }

  const urlMatch = input.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (urlMatch?.[1]) {
    return urlMatch[1];
  }

  const idMatch = input.match(/^([a-zA-Z0-9-_]{20,})$/);
  if (idMatch?.[1]) {
    return idMatch[1];
  }

  throw new Error('Invalid Google Sheets URL or spreadsheet ID.');
};
