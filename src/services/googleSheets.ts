import { getAccessToken } from './firebaseAuth';

export interface InquiryPayload {
  fullName: string;
  email: string;
  projectType: string;
  pageCount: string;
  timeline: string;
  budgetRange: string;
  details?: string;
}

export interface SheetInquiryRecord {
  timestamp: string;
  clientName: string;
  clientEmail: string;
  projectType: string;
  pageCount: string;
  timeline: string;
  budgetRange: string;
  details: string;
  status: string;
}

export interface SpreadsheetMetadata {
  spreadsheetId: string;
  title: string;
  spreadsheetUrl: string;
  sheets: string[];
}

const DEFAULT_SHEET_TITLE = 'Client Inquiries';

/**
 * Creates a dedicated, formatted Google Spreadsheet for Agency Inquiries
 */
export async function createInquirySpreadsheet(
  customTitle?: string
): Promise<{ spreadsheetId: string; spreadsheetUrl: string; sheetTitle: string }> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Google authentication required. Please sign in with Google first.');
  }

  const title = customTitle?.trim() || 'Client Inquiries — Digital Developer Agency';

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title,
      },
      sheets: [
        {
          properties: {
            title: DEFAULT_SHEET_TITLE,
            gridProperties: {
              frozenRowCount: 1,
            },
          },
          data: [
            {
              startRow: 0,
              startColumn: 0,
              rowData: [
                {
                  values: [
                    { userEnteredValue: { stringValue: 'Submission Date' } },
                    { userEnteredValue: { stringValue: 'Client / Business Name' } },
                    { userEnteredValue: { stringValue: 'Email Address' } },
                    { userEnteredValue: { stringValue: 'Website / Project Type' } },
                    { userEnteredValue: { stringValue: 'Estimated Pages' } },
                    { userEnteredValue: { stringValue: 'Target Timeline' } },
                    { userEnteredValue: { stringValue: 'Budget / Scope Tier' } },
                    { userEnteredValue: { stringValue: 'Project Requirements & Notes' } },
                    { userEnteredValue: { stringValue: 'Status' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create Google Spreadsheet: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return {
    spreadsheetId: data.spreadsheetId,
    spreadsheetUrl: data.spreadsheetUrl,
    sheetTitle: DEFAULT_SHEET_TITLE,
  };
}

/**
 * Fetches spreadsheet metadata (title, tab names, url)
 */
export async function getSpreadsheetDetails(spreadsheetId: string): Promise<SpreadsheetMetadata> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Google authentication required. Please sign in with Google first.');
  }

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=properties.title,spreadsheetUrl,sheets.properties.title`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Unable to fetch spreadsheet: ${res.status} ${errText}`);
  }

  const data = await res.json();
  const sheets = (data.sheets || []).map((s: any) => s.properties?.title || 'Sheet1');

  return {
    spreadsheetId,
    title: data.properties?.title || 'Untitled Spreadsheet',
    spreadsheetUrl: data.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
    sheets,
  };
}

/**
 * Appends a new project inquiry row to the specified Google Spreadsheet
 */
export async function appendInquiryToSheet(
  spreadsheetId: string,
  inquiry: InquiryPayload,
  sheetTitle?: string
): Promise<{ updatedRows: number; updatedRange: string; spreadsheetUrl: string }> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Google authentication required. Please sign in with Google first.');
  }

  // Determine valid sheet name
  let targetSheet = sheetTitle;
  if (!targetSheet) {
    const meta = await getSpreadsheetDetails(spreadsheetId);
    targetSheet = meta.sheets[0] || 'Sheet1';
  }

  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const rowValues = [
    timestamp,
    inquiry.fullName.trim(),
    inquiry.email.trim(),
    inquiry.projectType,
    inquiry.pageCount,
    inquiry.timeline,
    inquiry.budgetRange,
    inquiry.details?.trim() || 'No additional notes provided.',
    'New Lead',
  ];

  const encodedRange = encodeURIComponent(`${targetSheet}!A:I`);
  const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const res = await fetch(appendUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      range: `${targetSheet}!A:I`,
      majorDimension: 'ROWS',
      values: [rowValues],
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to append inquiry row: ${res.status} ${errText}`);
  }

  const data = await res.json();
  const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  return {
    updatedRows: data.updates?.updatedRows || 1,
    updatedRange: data.updates?.updatedRange || `${targetSheet}!A:I`,
    spreadsheetUrl,
  };
}

/**
 * Fetches recorded inquiries from the spreadsheet for preview & verification
 */
export async function fetchSheetInquiries(
  spreadsheetId: string,
  sheetTitle?: string
): Promise<{ title: string; inquiries: SheetInquiryRecord[]; rawRowsCount: number }> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Google authentication required. Please sign in with Google first.');
  }

  let resolvedTitle = sheetTitle;
  let metaTitle = 'Google Spreadsheet';

  if (!resolvedTitle) {
    const meta = await getSpreadsheetDetails(spreadsheetId);
    resolvedTitle = meta.sheets[0] || 'Sheet1';
    metaTitle = meta.title;
  }

  const range = encodeURIComponent(`${resolvedTitle}!A1:I100`);
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to load sheet rows: ${res.status} ${errText}`);
  }

  const data = await res.json();
  const rows: string[][] = data.values || [];

  if (rows.length <= 1) {
    return { title: metaTitle, inquiries: [], rawRowsCount: rows.length };
  }

  // Skip header row and parse inquiry items
  const inquiries: SheetInquiryRecord[] = rows.slice(1).map((row) => ({
    timestamp: row[0] || '',
    clientName: row[1] || 'Anonymous',
    clientEmail: row[2] || '',
    projectType: row[3] || 'Website Project',
    pageCount: row[4] || '',
    timeline: row[5] || '',
    budgetRange: row[6] || '',
    details: row[7] || '',
    status: row[8] || 'Active',
  }));

  return {
    title: metaTitle,
    inquiries: inquiries.reverse(), // most recent first
    rawRowsCount: rows.length,
  };
}

/**
 * Clears inquiry rows in spreadsheet (DESTRUCTIVE OPERATION - Must have explicit user confirmation before calling)
 */
export async function clearSheetInquiries(
  spreadsheetId: string,
  sheetTitle?: string
): Promise<void> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Google authentication required.');
  }

  let resolvedTitle = sheetTitle;
  if (!resolvedTitle) {
    const meta = await getSpreadsheetDetails(spreadsheetId);
    resolvedTitle = meta.sheets[0] || 'Sheet1';
  }

  // Clear rows below header (A2:I)
  const range = encodeURIComponent(`${resolvedTitle}!A2:I1000`);
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:clear`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to clear sheet rows: ${res.status} ${errText}`);
  }
}
