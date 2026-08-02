function doPost(e) {
  try {
    const payload = typeof e.postData.contents === 'string'
      ? JSON.parse(e.postData.contents)
      : e.parameter;

    if (!payload || !payload.action) {
      return jsonResponse({ success: false, message: 'Missing action.' });
    }

    const sheetName = payload.sheetName || 'Sheet1';
    const sheet = SpreadsheetApp.openById('10uHMmXnrpxiBuNSYLZvFoA7YhrOmj2ksSlrLwd6Yip4').getSheetByName(sheetName);
    if (!sheet) {
      return jsonResponse({ success: false, message: `Sheet not found: ${sheetName}` });
    }

    switch (payload.action) {
      case 'saveOrder':
        return handleSaveOrder(sheet, payload.values);
      case 'clearRange':
        return handleClearRange(sheet, payload.range);
      default:
        return jsonResponse({ success: false, message: `Unknown action: ${payload.action}` });
    }
  } catch (error) {
    return jsonResponse({ success: false, message: error.message || String(error) });
  }
}

function handleSaveOrder(sheet, values) {
  if (!Array.isArray(values) || values.length === 0) {
    return jsonResponse({ success: false, message: 'Missing values for saveOrder.' });
  }

  const lastRow = sheet.getLastRow();
  const targetRange = sheet.getRange(lastRow + 1, 1, values.length, values[0].length);
  targetRange.setValues(values);

  return jsonResponse({ success: true, message: 'Order saved.' });
}

function handleClearRange(sheet, range) {
  if (!range || typeof range !== 'string') {
    return jsonResponse({ success: false, message: 'Missing range for clearRange.' });
  }

  sheet.getRange(range).clearContent();
  return jsonResponse({ success: true, message: 'Range cleared.' });
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
