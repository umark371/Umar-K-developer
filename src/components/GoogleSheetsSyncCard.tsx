import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { 
  initAuth, 
  googleSignIn, 
  logout, 
  getAccessToken 
} from '../services/firebaseAuth';
import { 
  createInquirySpreadsheet, 
  getSpreadsheetDetails, 
  fetchSheetInquiries, 
  clearSheetInquiries,
  SheetInquiryRecord,
  SpreadsheetMetadata 
} from '../services/googleSheets';
import { GoogleSignInButton } from './GoogleSignInButton';
import { ConfirmationModal } from './ConfirmationModal';
import { 
  FileSpreadsheet, 
  ExternalLink, 
  Plus, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Trash2, 
  LogOut, 
  ChevronDown, 
  ChevronUp,
  Table,
  Sparkles,
  Link2
} from 'lucide-react';

interface GoogleSheetsSyncCardProps {
  onSpreadsheetConfigured?: (spreadsheetId: string, sheetTitle?: string) => void;
}

export const GoogleSheetsSyncCard: React.FC<GoogleSheetsSyncCardProps> = ({
  onSpreadsheetConfigured,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isCreatingSheet, setIsCreatingSheet] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  // Active spreadsheet state (storing only non-sensitive ID in localStorage for convenience)
  const [activeSheetId, setActiveSheetId] = useState<string>(() => {
    return localStorage.getItem('agency_inquiry_sheet_id') || '';
  });
  const [customSheetInput, setCustomSheetInput] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [activeSheetMeta, setActiveSheetMeta] = useState<SpreadsheetMetadata | null>(null);

  // Synced rows state
  const [records, setRecords] = useState<SheetInquiryRecord[]>([]);
  const [isFetchingRecords, setIsFetchingRecords] = useState(false);
  const [showRecordsPreview, setShowRecordsPreview] = useState(false);

  // Notifications & Errors
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  // Confirmation modal state for destructive operations (MANDATORY per skill)
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    action: () => Promise<void>;
  }>({
    isOpen: false,
    title: '',
    message: '',
    action: async () => {},
  });

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (authedUser, authedToken) => {
        setUser(authedUser);
        setToken(authedToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  // When token & sheetId are available, fetch details
  useEffect(() => {
    if (user && token && activeSheetId) {
      loadSheetMeta(activeSheetId);
    }
  }, [user, token, activeSheetId]);

  const loadSheetMeta = async (id: string) => {
    setIsLoadingDetails(true);
    try {
      const meta = await getSpreadsheetDetails(id);
      setActiveSheetMeta(meta);
      if (onSpreadsheetConfigured) {
        onSpreadsheetConfigured(id, meta.sheets[0]);
      }
    } catch (err: any) {
      console.warn('Could not load sheet meta:', err);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setStatusMessage(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
        setStatusMessage({
          type: 'success',
          text: `Connected as ${result.user.displayName || result.user.email}. Google Sheets access granted!`,
        });

        // If no sheet is configured yet, auto-prompt or load existing
        if (!activeSheetId) {
          // Check if previous exists
          const saved = localStorage.getItem('agency_inquiry_sheet_id');
          if (saved) {
            setActiveSheetId(saved);
          }
        }
      }
    } catch (err: any) {
      console.error('Sign-in failure:', err);
      setStatusMessage({
        type: 'error',
        text: err?.message || 'Failed to authenticate with Google. Please try again.',
      });
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setToken(null);
      setStatusMessage({ type: 'info', text: 'Signed out of Google account.' });
    } catch (err: any) {
      console.error('Logout error:', err);
    }
  };

  const handleCreateNewSpreadsheet = async () => {
    setIsCreatingSheet(true);
    setStatusMessage(null);
    try {
      const result = await createInquirySpreadsheet('Client Inquiries — Digital Developer Agency');
      setActiveSheetId(result.spreadsheetId);
      localStorage.setItem('agency_inquiry_sheet_id', result.spreadsheetId);
      
      const meta = await getSpreadsheetDetails(result.spreadsheetId);
      setActiveSheetMeta(meta);

      if (onSpreadsheetConfigured) {
        onSpreadsheetConfigured(result.spreadsheetId, result.sheetTitle);
      }

      setStatusMessage({
        type: 'success',
        text: 'New Google Spreadsheet "Client Inquiries" created and ready for automatic sync!',
      });
    } catch (err: any) {
      console.error('Creation failed:', err);
      setStatusMessage({
        type: 'error',
        text: err?.message || 'Failed to create spreadsheet. Please check permissions.',
      });
    } finally {
      setIsCreatingSheet(false);
    }
  };

  const handleApplyCustomSheet = async () => {
    if (!customSheetInput.trim()) return;
    
    // Extract ID from full URL if pasted
    let id = customSheetInput.trim();
    const match = id.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      id = match[1];
    }

    setIsLoadingDetails(true);
    setStatusMessage(null);
    try {
      const meta = await getSpreadsheetDetails(id);
      setActiveSheetId(id);
      setActiveSheetMeta(meta);
      localStorage.setItem('agency_inquiry_sheet_id', id);
      setShowCustomInput(false);
      setCustomSheetInput('');

      if (onSpreadsheetConfigured) {
        onSpreadsheetConfigured(id, meta.sheets[0]);
      }

      setStatusMessage({
        type: 'success',
        text: `Connected to existing spreadsheet: "${meta.title}".`,
      });
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: `Unable to access spreadsheet. Make sure the ID is correct and your Google account has edit access.`,
      });
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const handleFetchRecords = async () => {
    if (!activeSheetId) return;
    setIsFetchingRecords(true);
    try {
      const res = await fetchSheetInquiries(activeSheetId, activeSheetMeta?.sheets[0]);
      setRecords(res.inquiries);
      setShowRecordsPreview(true);
      setStatusMessage({
        type: 'info',
        text: `Loaded ${res.inquiries.length} inquiries from spreadsheet.`,
      });
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: `Error loading records: ${err?.message}`,
      });
    } finally {
      setIsFetchingRecords(false);
    }
  };

  // Trigger confirmation dialog for clearing rows
  const handleRequestClearRecords = () => {
    setConfirmModal({
      isOpen: true,
      title: 'Clear Spreadsheet Inquiry Records?',
      message: 'Are you sure you want to delete all recorded inquiry rows from this Google Spreadsheet? This operation mutates data in your Google account and cannot be undone.',
      action: async () => {
        if (!activeSheetId) return;
        try {
          await clearSheetInquiries(activeSheetId, activeSheetMeta?.sheets[0]);
          setRecords([]);
          setStatusMessage({
            type: 'success',
            text: 'All inquiry rows below the header were cleared from Google Sheets.',
          });
        } catch (err: any) {
          setStatusMessage({
            type: 'error',
            text: `Failed to clear sheet: ${err?.message}`,
          });
        }
      },
    });
  };

  return (
    <div id="google-sheets-integration-card" className="mt-8 pt-8 border-t border-neutral-850">
      {/* Top Banner / Card Container */}
      <div className="rounded-xl bg-neutral-900/70 border border-neutral-800 p-5 sm:p-6 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Google Sheets Inquiries Sync
                </h4>
                {user ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Connected
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400">
                    Not Connected
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-300 mt-1 max-w-xl leading-relaxed">
                Automatically organize incoming client briefs, contact details, scopes, and target timelines into your private Google Spreadsheet with user permission.
              </p>
            </div>
          </div>

          {/* Auth Action */}
          <div className="shrink-0 flex items-center gap-3">
            {!user ? (
              <GoogleSignInButton
                onClick={handleSignIn}
                isLoading={isSigningIn}
                text="Connect Google Sheets"
                id="sheets-card-signin-btn"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-semibold text-neutral-200 truncate max-w-[170px]">
                    {user.displayName || user.email}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono">
                    Sheets API Active
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  title="Sign out of Google"
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer border border-neutral-700"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Status Message Notification */}
        {statusMessage && (
          <div
            className={`mt-4 p-3 rounded-lg text-xs flex items-center gap-2 ${
              statusMessage.type === 'success'
                ? 'bg-emerald-950/70 border border-emerald-800/80 text-emerald-300'
                : statusMessage.type === 'error'
                ? 'bg-red-950/70 border border-red-800/80 text-red-300'
                : 'bg-neutral-800/80 border border-neutral-700 text-neutral-300'
            }`}
          >
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            ) : statusMessage.type === 'error' ? (
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            ) : (
              <Sparkles className="w-4 h-4 shrink-0 text-emerald-400" />
            )}
            <span className="flex-1">{statusMessage.text}</span>
            <button
              onClick={() => setStatusMessage(null)}
              className="text-neutral-400 hover:text-white ml-auto cursor-pointer"
            >
              &times;
            </button>
          </div>
        )}

        {/* Connected Spreadsheet Management Area */}
        {user && (
          <div className="mt-5 pt-4 border-t border-neutral-800/80 space-y-4">
            {/* Active Spreadsheet Details */}
            {activeSheetId && activeSheetMeta ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg bg-black/60 border border-neutral-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">
                      {activeSheetMeta.title}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                      Tab: {activeSheetMeta.sheets[0] || 'Client Inquiries'}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono mt-0.5 truncate max-w-sm">
                    ID: {activeSheetId}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeSheetMeta.spreadsheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Open in Google Sheets</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleFetchRecords}
                    disabled={isFetchingRecords}
                    className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-neutral-700"
                  >
                    <RefreshCw className={`w-3 h-3 ${isFetchingRecords ? 'animate-spin text-emerald-400' : ''}`} />
                    <span>Sync &amp; View</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleRequestClearRecords}
                    title="Clear inquiry rows (destructively clears data in spreadsheet)"
                    className="p-1.5 rounded-lg bg-neutral-900 hover:bg-red-950/40 text-neutral-400 hover:text-red-400 border border-neutral-800 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              /* No Spreadsheet Connected Yet */
              <div className="p-4 rounded-lg bg-black/40 border border-neutral-800 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-white">
                    Setup Your Target Google Spreadsheet
                  </h5>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Generate a new pre-formatted "Client Inquiries" sheet with headers, or link an existing Google Sheet.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCreateNewSpreadsheet}
                    disabled={isCreatingSheet}
                    className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                    <span>{isCreatingSheet ? 'Creating Sheet...' : 'Create Inquiries Sheet'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowCustomInput(!showCustomInput)}
                    className="px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-750 border border-neutral-700 text-neutral-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Link2 className="w-3.5 h-3.5" />
                    <span>Link Existing ID</span>
                  </button>
                </div>
              </div>
            )}

            {/* Custom Sheet Link Input */}
            {showCustomInput && (
              <div className="p-3.5 rounded-lg bg-black border border-neutral-800 animate-in fade-in duration-150">
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Paste Google Sheet URL or Spreadsheet ID:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customSheetInput}
                    onChange={(e) => setCustomSheetInput(e.target.value)}
                    placeholder="https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5n... or ID"
                    className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 text-neutral-100 text-xs border border-neutral-750 focus:border-emerald-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCustomSheet}
                    disabled={isLoadingDetails}
                    className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-bold text-xs cursor-pointer hover:bg-emerald-400 disabled:opacity-50"
                  >
                    {isLoadingDetails ? 'Checking...' : 'Connect'}
                  </button>
                </div>
              </div>
            )}

            {/* Synced Records Preview Drawer */}
            {showRecordsPreview && (
              <div className="mt-4 rounded-xl bg-black border border-neutral-800 p-4 animate-in fade-in duration-150">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Table className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Recent Spreadsheet Inquiries ({records.length})
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowRecordsPreview(false)}
                    className="text-neutral-400 hover:text-white text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>Hide</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>
                </div>

                {records.length === 0 ? (
                  <p className="text-xs text-neutral-400 py-3 text-center">
                    No inquiry records found in this spreadsheet yet. Submit a test inquiry from the form above to see it recorded here!
                  </p>
                ) : (
                  <div className="overflow-x-auto max-h-64 border border-neutral-850 rounded-lg">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-neutral-900/90 text-neutral-400 uppercase tracking-wider font-mono text-[10px] border-b border-neutral-800 sticky top-0">
                        <tr>
                          <th className="p-2.5">Date</th>
                          <th className="p-2.5">Client</th>
                          <th className="p-2.5">Email</th>
                          <th className="p-2.5">Project</th>
                          <th className="p-2.5">Scope</th>
                          <th className="p-2.5">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-900 text-neutral-300">
                        {records.map((r, idx) => (
                          <tr key={idx} className="hover:bg-neutral-900/40">
                            <td className="p-2.5 font-mono text-[11px] text-neutral-400 whitespace-nowrap">
                              {r.timestamp}
                            </td>
                            <td className="p-2.5 font-medium text-white whitespace-nowrap">
                              {r.clientName}
                            </td>
                            <td className="p-2.5 text-neutral-300 whitespace-nowrap">
                              {r.clientEmail}
                            </td>
                            <td className="p-2.5 whitespace-nowrap text-emerald-300">
                              {r.projectType}
                            </td>
                            <td className="p-2.5 whitespace-nowrap text-neutral-400">
                              {r.budgetRange}
                            </td>
                            <td className="p-2.5 whitespace-nowrap">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                                {r.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mandatory User Confirmation Dialog for Destructive Operations */}
      <ConfirmationModal
        isOpen={confirmModal.isOpen}
        title={confirmModal.title}
        message={confirmModal.message}
        confirmLabel="Confirm & Clear Rows"
        cancelLabel="Cancel"
        isDestructive={true}
        onConfirm={async () => {
          setConfirmModal((prev) => ({ ...prev, isOpen: false }));
          await confirmModal.action();
        }}
        onCancel={() => setConfirmModal((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};
