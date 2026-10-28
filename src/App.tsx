import React, { useState } from 'react';
import { Header } from './components/Header';
import { EditorPane } from './components/EditorPane';
import { LivePreviewPane } from './components/LivePreviewPane';
import { ClaudeLinkModal } from './components/ClaudeLinkModal';
import { AiEnhancerModal } from './components/AiEnhancerModal';
import { ExportModal } from './components/ExportModal';
import { VithurnaPortfolioView } from './components/VithurnaPortfolioView';
import { DocsView } from './components/DocsView';
import { SHOWCASE_PROJECTS } from './data/showcases';
import { ActiveView, ShowcaseProject } from './types';
import { Sparkles, ArrowRight, FolderKanban, Check, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('workspace');
  const [selectedShowcaseId, setSelectedShowcaseId] = useState<string>(SHOWCASE_PROJECTS[0].id);
  const [activeCode, setActiveCode] = useState<string>(SHOWCASE_PROJECTS[0].initialCode);
  
  // Modals state
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const currentProject = SHOWCASE_PROJECTS.find(p => p.id === selectedShowcaseId) || SHOWCASE_PROJECTS[0];

  const handleSelectShowcase = (project: ShowcaseProject) => {
    setSelectedShowcaseId(project.id);
    setActiveCode(project.initialCode);
  };

  const handleImportCode = (newCode: string, title?: string) => {
    setActiveCode(newCode);
    setActiveView('workspace');
  };

  const handleResetCode = () => {
    setActiveCode(currentProject.initialCode);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* 3-Zone Global Navigation */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenImportModal={() => setIsImportModalOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Main Workspace Body */}
      {activeView === 'workspace' && (
        <div className="flex-1 flex flex-col">
          {/* Top Project Selector Ribbon */}
          <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              <span className="text-xs font-semibold text-neutral-400 shrink-0">Active Project:</span>
              <div className="flex items-center gap-1.5 p-1 bg-neutral-950 rounded-lg border border-neutral-800 shrink-0">
                {SHOWCASE_PROJECTS.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleSelectShowcase(proj)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      selectedShowcaseId === proj.id
                        ? 'bg-neutral-800 text-white shadow-sm font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {proj.title.split('—')[0].trim()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 text-xs">
              <button
                onClick={() => setIsImportModalOpen(true)}
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1.5"
              >
                <span>Import Claude URL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-neutral-600 hidden sm:inline">|</span>
              <button
                onClick={() => setActiveView('portfolio-preview')}
                className="text-neutral-300 hover:text-white font-medium hidden sm:flex items-center gap-1"
              >
                <span>Full Portfolio View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dual Split IDE Canvas */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-7.5rem)]">
            {/* Left Column: Code & Snippet Editor */}
            <div className="lg:col-span-5 h-[500px] lg:h-auto border-b lg:border-b-0">
              <EditorPane
                code={activeCode}
                setCode={setActiveCode}
                onReset={handleResetCode}
                onOpenAiEnhancer={() => setIsAiModalOpen(true)}
              />
            </div>

            {/* Right Column: Responsive Live Preview Frame */}
            <div className="lg:col-span-7 h-[650px] lg:h-auto">
              <LivePreviewPane
                code={activeCode}
                onOpenExportModal={() => setIsExportModalOpen(true)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Standalone Full Portfolio View */}
      {activeView === 'portfolio-preview' && (
        <VithurnaPortfolioView onBackToStudio={() => setActiveView('workspace')} />
      )}

      {/* Documentation View */}
      {activeView === 'docs' && (
        <DocsView
          onBackToStudio={() => setActiveView('workspace')}
          onOpenImportModal={() => setIsImportModalOpen(true)}
        />
      )}

      {/* Modals */}
      <ClaudeLinkModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImportCode={handleImportCode}
      />

      <AiEnhancerModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        code={activeCode}
        onApplyCode={setActiveCode}
      />

      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        code={activeCode}
      />
    </div>
  );
}
