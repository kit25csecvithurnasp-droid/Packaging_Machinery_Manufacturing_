import React, { useState } from 'react';
import { Download, Copy, Check, Code, Globe, ShieldCheck } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  code,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vithurna-portfolio-website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
          <div>
            <h3 className="text-xl font-bold text-white">Export & Deploy Website</h3>
            <p className="text-xs text-neutral-400 mt-1">Self-contained production package</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white p-1 text-sm">
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Standalone .HTML File</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Downloads a 100% self-contained HTML document with Tailwind CSS, Google Fonts, and full JavaScript interactions included. Works instantly in any browser with zero installation.
            </p>
            <button
              onClick={handleDownloadHtml}
              className="w-full py-2.5 px-4 text-xs font-semibold bg-white text-neutral-950 hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Website (HTML)</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Code className="w-4 h-4 text-emerald-400" />
                <span>Copy Source Code</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500">
                {(code.length / 1024).toFixed(1)} KB
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Copy complete source code directly to paste into your GitHub repository or web host.
            </p>
            <button
              onClick={handleCopyCode}
              className="w-full py-2.5 px-4 text-xs font-semibold bg-neutral-800 text-white hover:bg-neutral-700 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Entire Code'}</span>
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Zero external server dependencies</span>
          </span>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
