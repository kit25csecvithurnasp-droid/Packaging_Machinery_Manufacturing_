import React, { useState, useRef, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, Minimize2, RefreshCw, ExternalLink, Download } from 'lucide-react';
import { ViewportMode } from '../types';

interface LivePreviewPaneProps {
  code: string;
  onOpenExportModal: () => void;
}

export const LivePreviewPane: React.FC<LivePreviewPaneProps> = ({
  code,
  onOpenExportModal,
}) => {
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const reloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  const openInNewWindow = () => {
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  // Viewport width styling
  const getViewportContainerStyle = () => {
    switch (viewport) {
      case 'mobile':
        return 'w-[375px] h-[720px] rounded-3xl border-4 border-neutral-800 shadow-2xl overflow-hidden my-auto';
      case 'tablet':
        return 'w-[768px] h-[90%] rounded-2xl border-4 border-neutral-800 shadow-2xl overflow-hidden my-auto';
      case 'desktop':
      default:
        return 'w-full h-full border-0';
    }
  };

  return (
    <div
      className={`h-full flex flex-col bg-neutral-950 transition-all ${
        isFullscreen ? 'fixed inset-0 z-50' : 'relative'
      }`}
    >
      {/* Top Preview Controls Bar */}
      <div className="h-12 border-b border-neutral-800 px-4 flex items-center justify-between gap-4 bg-neutral-950/80">
        {/* Viewport switchers */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800">
          <button
            onClick={() => setViewport('desktop')}
            className={`p-1.5 rounded-md transition-colors ${
              viewport === 'desktop'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Desktop view (1440px / 100%)"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewport('tablet')}
            className={`p-1.5 rounded-md transition-colors ${
              viewport === 'tablet'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Tablet view (768px)"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewport('mobile')}
            className={`p-1.5 rounded-md transition-colors ${
              viewport === 'mobile'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Mobile view (375px)"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Viewport label indicator */}
        <div className="text-xs text-neutral-400 font-mono hidden sm:block">
          {viewport === 'desktop' && 'Desktop Baseline (Fluid 100%)'}
          {viewport === 'tablet' && 'Tablet Baseline (768px)'}
          {viewport === 'mobile' && 'Mobile Viewport (375px)'}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={reloadIframe}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
            title="Reload preview"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={openInNewWindow}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
            title="Open in standalone tab"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenExportModal}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
            title="Download HTML package"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 overflow-auto bg-neutral-950 p-0 sm:p-4 flex items-center justify-center">
        <div className={`transition-all duration-200 bg-white ${getViewportContainerStyle()}`}>
          <iframe
            key={iframeKey}
            ref={iframeRef}
            srcDoc={code}
            title="Live Website Preview"
            sandbox="allow-scripts allow-modals allow-forms allow-same-origin allow-popups"
            className="w-full h-full border-0 bg-neutral-950"
          />
        </div>
      </div>
    </div>
  );
};
