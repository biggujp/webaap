'use server';

const ORDERS_SHEET = process.env.GOOGLE_SHEETS_ORDERS_SHEET || 'Sheet1';
const SHEETS_SCRIPT_URL = process.env.GOOGLE_SHEETS_SCRIPT_URL;

interface AppsScriptResponse {
  success: boolean;
  message?: string;
  [key: string]: unknown;
}

type SheetPayload = Record<string, unknown>;

const postToSheetEndpoint = async (payload: SheetPayload) => {
  if (!SHEETS_SCRIPT_URL) {
    throw new Error(
      'Missing GOOGLE_SHEETS_SCRIPT_URL environment variable. Set this to your published Google Apps Script Web App URL.'
    );
  }

  const parseResponse = async (response: Response) => {
    const contentType = response.headers.get('content-type') ?? '';
    const text = await response.text();
    if (!response.ok) {
      throw new Error(`Sheet endpoint request failed: ${response.status} ${response.statusText} - ${text}`);
    }

    if (contentType.includes('text/html') || text.trim().startsWith('<')) {
      throw new Error(
        'Sheet endpoint returned HTML instead of JSON. ' +
          'This usually means the configured Apps Script URL is the published web app page, not the JSON exec endpoint.'
      );
    }

    if (text.includes('ไม่พบฟังก์ชันของสคริปต์: doPost') || text.includes('Cannot find function doPost')) {
      throw new Error('Apps Script deployment does not support POST/doPost.');
    }

    let data: unknown;
    try {
      data = JSON.parse(text) as AppsScriptResponse;
    } catch {
      throw new Error(`Sheet endpoint returned non-JSON response: ${text}`);
    }

    if (typeof data !== 'object' || data === null || data.success !== true) {
      throw new Error(
        typeof data === 'object' && data !== null && 'message' in data && typeof data.message === 'string'
          ? data.message
          : `Sheet endpoint returned invalid body: ${text}`
      );
    }

    return data as AppsScriptResponse;
  };

  const tryPostJson = async () => {
    const response = await fetch(SHEETS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await parseResponse(response);
  };

  return await tryPostJson();
};

const appendRows = async (values: Array<Array<string>>) => {
  return await postToSheetEndpoint({
    action: 'saveOrder',
    sheetName: ORDERS_SHEET,
    values,
  });
};

const clearRange = async (range: string) => {
  return await postToSheetEndpoint({
    action: 'clearRange',
    sheetName: ORDERS_SHEET,
    range,
  });
};

const buildOrderValues = (orderData: Record<string, string>) => {
  const headers = ['วัน-เวลา', 'รายการกาแฟ', 'ระดับความหวาน', 'ชื่อ-นามสกุล', 'ตำแหน่ง', 'หมายเหตุ'];
  return headers.map((header) => String(orderData[header] ?? ''));
};

export async function saveOrder(orderData: Record<string, string>) {
  const values = [buildOrderValues(orderData)];
  return await appendRows(values);
}

export async function resetOrders(password: string) {
  const resetPassword = process.env.ORDER_RESET_PASSWORD || 'reset123';
  if (password !== resetPassword) {
    throw new Error('Invalid reset password.');
  }

  await clearRange('A2:F');
  return { success: true, message: 'Orders cleared directly from Google Sheets.' };
}
