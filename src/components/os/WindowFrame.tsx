import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, 
  RotateCw, 
  Copy, 
  Check, 
  Maximize2, 
  Minimize2, 
  X, 
  Minus, 
  Columns,
  ExternalLink
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import type { WindowId } from '../../types/window';

interface WindowFrameProps {
  id: WindowId;
  children: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ id, children }) => {
  const { 
    windows, 
    activeWindowId, 
    isSplitScreen, 
    closeWindow, 
    minimizeWindow, 
    toggleMaximizeWindow, 
    focusWindow,
    toggleSplitScreen
  } = useWindowManager();

  const win = windows[id];
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!win.isOpen || win.isMinimized) {
    return null;
  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const handleCopyUrl = () => {
    navigator.clipboard?.writeText(win.url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 1800);
  };

  const isSplitLeft = isSplitScreen && id === 'ugc';
  const isSplitRight = isSplitScreen && id === 'cm';
  const defaultPos = win.defaultPosition;

  let styleClasses = '';
  let inlineStyles: React.CSSProperties = {
    zIndex: win.zIndex,
  };

  if (isMobile) {
    styleClasses = 'fixed top-9 left-0 right-0 bottom-20 rounded-none';
  } else if (isSplitLeft) {
    styleClasses = 'fixed top-10 left-2 bottom-20 w-[calc(50vw-12px)] rounded-2xl';
  } else if (isSplitRight) {
    styleClasses = 'fixed top-10 right-2 bottom-20 w-[calc(50vw-12px)] rounded-2xl';
  } else if (win.isMaximized) {
    styleClasses = 'fixed top-10 left-3 right-3 bottom-20 rounded-2xl';
  } else {
    if (id === 'contact') {
      styleClasses = 'fixed w-[92vw] max-w-[560px] h-[82vh] max-h-[660px] rounded-2xl';
      inlineStyles = {
        ...inlineStyles,
        left: `calc(50% - 280px)`,
        top: '60px',
      };
    } else {
      styleClasses = 'fixed w-[94vw] md:w-[86vw] h-[84vh] rounded-2xl';
      inlineStyles = {
        ...inlineStyles,
        left: `${defaultPos.x}px`,
        top: `${defaultPos.y + 40}px`,
      };
    }
  }

  const isActive = activeWindowId === id;
  const isDraggable = !isMobile && !isSplitScreen && !win.isMaximized;

  return (
    <motion.div
      initial={{ scale: 0.92, opacity: 0, y: 20 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        y: 0,
        transition: { type: 'spring', damping: 25, stiffness: 350 }
      }}
      exit={{ 
        scale: 0.85, 
        opacity: 0, 
        y: 60,
        transition: { duration: 0.2 } 
      }}
      drag={isDraggable}
      dragMomentum={false}
      dragElastic={0.05}
      onMouseDown={() => focusWindow(id)}
      style={inlineStyles}
      className={`flex flex-col shadow-os-window overflow-hidden border transition-shadow duration-200 ${
        isActive 
          ? 'border-white/25 ring-1 ring-white/20' 
          : 'border-white/10 opacity-95'
      } bg-slate-950/95 backdrop-blur-2xl ${styleClasses}`}
    >
      {/* WINDOW HEADER BAR */}
      <div 
        className={`h-11 px-3 flex items-center justify-between select-none cursor-default border-b border-white/10 ${
          id === 'ugc'
            ? 'bg-gradient-to-r from-purple-950/80 via-slate-900/90 to-pink-950/80'
            : id === 'cm'
            ? 'bg-gradient-to-r from-slate-900/90 via-blue-950/80 to-slate-900/90'
            : 'bg-slate-900/95'
        } ${isDraggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
      >
        {/* Left: Traffic light buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className="group relative w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
            title="Cerrar ventana"
          >
            <X className="w-2.5 h-2.5 text-rose-950 opacity-0 group-hover:opacity-100 transition-opacity stroke-[3]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            className="group relative w-3.5 h-3.5 rounded-full bg-amber-400 hover:bg-amber-500 flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
            title="Minimizar al Dock"
          >
            <Minus className="w-2.5 h-2.5 text-amber-950 opacity-0 group-hover:opacity-100 transition-opacity stroke-[3]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximizeWindow(id);
            }}
            className="group relative w-3.5 h-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
            title={win.isMaximized ? "Restaurar tamaño normal" : "Maximizar ventana"}
          >
            {win.isMaximized ? (
              <Minimize2 className="w-2.5 h-2.5 text-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity stroke-[3]" />
            ) : (
              <Maximize2 className="w-2.5 h-2.5 text-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity stroke-[3]" />
            )}
          </button>

          <div className="hidden sm:flex items-center gap-1.5 ml-2 pl-2 border-l border-white/10 text-xs font-semibold text-slate-200">
            <span>{win.icon}</span>
            <span className="truncate max-w-[120px] md:max-w-[180px]">{win.title}</span>
          </div>
        </div>

        {/* Center: Simulated URL bar */}
        <div className="flex-1 max-w-md mx-3">
          <div className="flex items-center justify-between px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs text-slate-300 shadow-inner group">
            <div className="flex items-center gap-2 truncate">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate font-mono text-[11px] text-slate-300">
                {win.url}
              </span>
            </div>
            
            <div className="flex items-center space-x-1 shrink-0 ml-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyUrl();
                }}
                className="p-1 hover:text-white rounded transition-colors text-slate-400 cursor-pointer"
                title="Copiar enlace"
              >
                {copiedUrl ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRefresh();
                }}
                className={`p-1 hover:text-white rounded transition-colors text-slate-400 cursor-pointer ${
                  isRefreshing ? 'animate-spin text-pink-400' : ''
                }`}
                title="Recargar página"
              >
                <RotateCw className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 shrink-0">
          {!isMobile && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSplitScreen();
              }}
              className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                isSplitScreen 
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' 
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
              title="Split View 50/50"
            >
              <Columns className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={() => {
              window.open(win.url, '_blank');
            }}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors hidden sm:inline-flex cursor-pointer"
            title="Abrir en pestaña nueva"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* WINDOW BODY */}
      <div 
        className={`flex-1 overflow-y-auto overflow-x-hidden window-scroll relative ${
          id === 'ugc' ? 'theme-ugc' : id === 'cm' ? 'theme-cm' : ''
        }`}
      >
        {isRefreshing ? (
          <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-pink-500 border-t-transparent animate-spin" />
            <span className="text-xs text-slate-400 font-mono">Actualizando {win.title}...</span>
          </div>
        ) : (
          children
        )}
      </div>
    </motion.div>
  );
};
