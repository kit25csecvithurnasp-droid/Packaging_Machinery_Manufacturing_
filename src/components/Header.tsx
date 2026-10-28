import React from 'react';
import { ActiveView } from '../types';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  onOpenImportModal: () => void;
  onOpenExportModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  onOpenImportModal,
  onOpenExportModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 px-6 h-16 flex items-center justify-between gap-8">
      {/* Zone 1: Single text element wordmark */}
      <button 
        onClick={() => setActiveView('workspace')}
        className="text-lg font-extrabold tracking-tight text-white hover:text-neutral-200 transition-colors whitespace-nowrap shrink-0 text-left"
      >
        ArtifactCraft
      </button>

      {/* Zone 2: 4-5 concise single-line nav links */}
      <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
        <button
          onClick={() => setActiveView('workspace')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 ${
            activeView === 'workspace' ? 'text-white font-semibold' : ''
          }`}
        >
          Studio Workspace
        </button>
        <button
          onClick={() => setActiveView('portfolio-preview')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 ${
            activeView === 'portfolio-preview' ? 'text-white font-semibold' : ''
          }`}
        >
          Vithurna Portfolio
        </button>
        <button
          onClick={onOpenImportModal}
          className="hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          Import Claude Link
        </button>
        <button
          onClick={() => setActiveView('docs')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 ${
            activeView === 'docs' ? 'text-white font-semibold' : ''
          }`}
        >
          Documentation
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onOpenExportModal}
          className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
        >
          Export Website
        </button>
      </div>
    </header>
  );
};
