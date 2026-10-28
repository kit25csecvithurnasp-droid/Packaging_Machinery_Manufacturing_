import React, { useState } from 'react';
import { Code2, Copy, Check, RotateCcw, Wand2, Sparkles, Plus } from 'lucide-react';
import { ActiveTab } from '../types';

interface EditorPaneProps {
  code: string;
  setCode: (code: string) => void;
  onReset: () => void;
  onOpenAiEnhancer: () => void;
}

export const EditorPane: React.FC<EditorPaneProps> = ({
  code,
  setCode,
  onReset,
  onOpenAiEnhancer,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('code');
  const [copied, setCopied] = useState(false);

  const lineCount = code.split('\n').length;
  const charCount = code.length;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const insertSnippet = (snippet: string) => {
    // Insert before closing </body> or append
    if (code.includes('</body>')) {
      const updated = code.replace('</body>', `${snippet}\n</body>`);
      setCode(updated);
    } else {
      setCode(code + '\n' + snippet);
    }
  };

  return (
    <div className="h-full flex flex-col bg-neutral-900 border-r border-neutral-800">
      {/* Editor Header / Segmented Controls */}
      <div className="h-12 border-b border-neutral-800 px-4 flex items-center justify-between gap-4 bg-neutral-950/40">
        <div className="flex items-center gap-1.5 p-1 bg-neutral-950 rounded-lg border border-neutral-800">
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'code'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            HTML / Code
          </button>
          <button
            onClick={() => setActiveTab('snippets')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'snippets'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Snippets
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAiEnhancer}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Refine</span>
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={onReset}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
            title="Reset to template"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor Content Area */}
      {activeTab === 'code' ? (
        <div className="flex-1 relative flex overflow-hidden">
          {/* Line Numbers */}
          <div className="w-12 py-3 bg-neutral-950/80 border-r border-neutral-800/80 select-none text-right pr-3 font-mono text-[11px] text-neutral-600 overflow-hidden">
            {Array.from({ length: Math.min(lineCount, 500) }).map((_, i) => (
              <div key={i} className="leading-5">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Textarea */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="flex-1 p-3 bg-neutral-900 font-mono text-xs text-neutral-200 leading-5 resize-none focus:outline-none select-text overflow-auto"
          />
        </div>
      ) : (
        /* Snippets Palette */
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
            Quick Architecture Snippets
          </div>
          <p className="text-xs text-neutral-400">
            Click to inject production-ready components into your active website code:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Call to Action Strip</span>
                <button
                  onClick={() =>
                    insertSnippet(`
  <!-- Injected CTA Strip -->
  <section class="max-w-6xl mx-auto px-6 py-12">
    <div class="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <h3 class="text-xl font-bold text-white">Ready to collaborate on next-gen systems?</h3>
        <p class="text-xs text-neutral-400 mt-1">Available for software engineering roles and systems architecture consulting.</p>
      </div>
      <a href="mailto:kit25csecvithurna.s.p@gmail.com" class="px-5 py-2.5 text-xs font-semibold bg-white text-neutral-950 rounded-lg hover:bg-neutral-200 transition-colors whitespace-nowrap">
        Contact Vithurna →
      </a>
    </div>
  </section>
                    `)
                  }
                  className="px-3 py-1 text-xs font-semibold bg-white text-neutral-950 rounded-lg hover:bg-neutral-200 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Inject
                </button>
              </div>
              <p className="text-xs text-neutral-500">
                Responsive high-conversion banner with verified contact action.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Tabular Metric Strip</span>
                <button
                  onClick={() =>
                    insertSnippet(`
  <!-- Injected Tabular Metric Strip -->
  <section class="max-w-6xl mx-auto px-6 py-8">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center font-mono">
      <div>
        <div class="text-2xl font-bold text-white tabular-nums">99.98%</div>
        <div class="text-xs text-neutral-400 mt-1">Cluster Availability</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-white tabular-nums">85k</div>
        <div class="text-xs text-neutral-400 mt-1">Operations / Sec</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-white tabular-nums">&lt; 15ms</div>
        <div class="text-xs text-neutral-400 mt-1">p99 Read Latency</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-white tabular-nums">100%</div>
        <div class="text-xs text-neutral-400 mt-1">Raft Consensus</div>
      </div>
    </div>
  </section>
                    `)
                  }
                  className="px-3 py-1 text-xs font-semibold bg-white text-neutral-950 rounded-lg hover:bg-neutral-200 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Inject
                </button>
              </div>
              <p className="text-xs text-neutral-500">
                Data metrics grid using strict tabular numerals and monospace alignment.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Modern FAQ Accordion</span>
                <button
                  onClick={() =>
                    insertSnippet(`
  <!-- Injected FAQ Section -->
  <section class="max-w-4xl mx-auto px-6 py-12 space-y-6">
    <h3 class="text-xl font-bold text-white">Frequently Asked Questions</h3>
    <div class="space-y-3 text-xs">
      <details class="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
        <summary class="font-semibold text-white cursor-pointer select-none">What technologies do you specialize in?</summary>
        <p class="mt-2 text-neutral-400 leading-relaxed">Full-stack systems development across TypeScript, React, Node.js, Python, and distributed algorithms in Go/Rust.</p>
      </details>
      <details class="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
        <summary class="font-semibold text-white cursor-pointer select-none">Are you available for 2025 engineering roles?</summary>
        <p class="mt-2 text-neutral-400 leading-relaxed">Yes! Graduating in May 2025 with B.E. Computer Science from KIT Coimbatore, actively interviewing for software engineering positions.</p>
      </details>
    </div>
  </section>
                    `)
                  }
                  className="px-3 py-1 text-xs font-semibold bg-white text-neutral-950 rounded-lg hover:bg-neutral-200 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Inject
                </button>
              </div>
              <p className="text-xs text-neutral-500">
                Accessible semantic HTML details/summary elements.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Editor Status Bar */}
      <div className="h-8 border-t border-neutral-800 px-4 bg-neutral-950/80 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div className="flex items-center gap-3">
          <span>{lineCount} lines</span>
          <span>·</span>
          <span>{charCount.toLocaleString()} chars</span>
        </div>
        <div className="text-neutral-400">Live Hot-Reload Active</div>
      </div>
    </div>
  );
};
