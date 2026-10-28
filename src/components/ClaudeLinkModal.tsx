import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ArrowRight, Code2, Sparkles } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '../data/showcases';

interface ClaudeLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportCode: (code: string, title?: string) => void;
}

export const ClaudeLinkModal: React.FC<ClaudeLinkModalProps> = ({
  isOpen,
  onClose,
  onImportCode,
}) => {
  const [pastedContent, setPastedContent] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const shareUrl = 'https://claude.ai/share/15eb8318-1624-40c2-98a5-2db7c5e667b4';

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleApplyPastedCode = () => {
    if (!pastedContent.trim()) return;

    // Smart cleanup if user pasted markdown with ```html code blocks
    let cleaned = pastedContent.trim();
    const htmlBlockRegex = /```(?:html|tsx|jsx|javascript)?\s*([\s\S]*?)```/i;
    const match = cleaned.match(htmlBlockRegex);
    if (match && match[1]) {
      cleaned = match[1].trim();
    }

    // Wrap plain fragments in HTML scaffold if needed
    if (!cleaned.includes('<html') && !cleaned.includes('<!DOCTYPE')) {
      cleaned = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imported from Claude</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; }</style>
</head>
<body class="bg-neutral-950 text-neutral-100 min-h-screen p-6">
  ${cleaned}
</body>
</html>`;
    }

    onImportCode(cleaned, 'Custom Claude Artifact');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h3 className="text-xl font-bold text-white">Import Claude Conversation or Artifact</h3>
            <p className="text-xs text-neutral-400 mt-1">Convert your shared Claude link or code into a live website</p>
          </div>
          <button 
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-lg transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        {/* Link Status Notice */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-neutral-300">Shared Link Provided:</span>
            <button 
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied' : 'Copy Link'}</span>
            </button>
          </div>
          <div className="p-2.5 rounded-lg bg-neutral-900 font-mono text-xs text-neutral-300 break-all select-all flex items-center justify-between gap-2">
            <span>{shareUrl}</span>
            <a 
              href={shareUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="shrink-0 text-blue-400 hover:text-blue-300"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Anthropic enforces account authentication on <code className="text-neutral-200">claude.ai/share</code> endpoints to protect privacy. To build your website in seconds, follow the 2 steps below:
          </p>
        </div>

        {/* Step-by-step instructions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-1.5">
            <div className="font-semibold text-white">Step 1: Copy from Claude</div>
            <p className="text-neutral-400 leading-relaxed">
              Open your Claude tab with the shared conversation, click the "Copy" button on the generated code block or response.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-1.5">
            <div className="font-semibold text-white">Step 2: Paste Below & Render</div>
            <p className="text-neutral-400 leading-relaxed">
              Paste the code into the box below. ArtifactCraft will compile and render it immediately into a live responsive website.
            </p>
          </div>
        </div>

        {/* Direct Paste Area */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-neutral-300 flex items-center justify-between">
            <span>Paste Claude Code / Artifact / HTML Here:</span>
            <span className="text-neutral-500 font-normal">Supports HTML, Tailwind, React/JSX, or Markdown</span>
          </label>
          <textarea
            value={pastedContent}
            onChange={(e) => setPastedContent(e.target.value)}
            placeholder="Paste your code from Claude here (e.g. <!DOCTYPE html> ... or <div>...</div>) ..."
            className="w-full h-36 p-3 bg-neutral-950 border border-neutral-800 rounded-xl font-mono text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 resize-none"
          />
          <div className="flex justify-end">
            <button
              onClick={handleApplyPastedCode}
              disabled={!pastedContent.trim()}
              className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 disabled:opacity-40 disabled:pointer-events-none rounded-lg transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Render Website</span>
            </button>
          </div>
        </div>

        {/* Preloaded Templates Quick Pick */}
        <div className="pt-4 border-t border-neutral-800 space-y-3">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
            Or Quick Load Verified Showcase Templates:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SHOWCASE_PROJECTS.map((proj) => (
              <button
                key={proj.id}
                onClick={() => {
                  onImportCode(proj.initialCode, proj.title);
                  onClose();
                }}
                className="p-3 text-left rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all group"
              >
                <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                  {proj.title}
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 line-clamp-1">
                  {proj.category}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-medium mt-2">
                  <span>Load Template</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
