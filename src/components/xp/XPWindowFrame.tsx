import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  Home, 
  X as CloseIcon, 
  Lock
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import type { WindowId } from '../../types/window';

interface XPWindowFrameProps {
  id: WindowId;
  children: React.ReactNode;
}

export const XPWindowFrame: React.FC<XPWindowFrameProps> = ({ id, children }) => {
  const { 
    windows, 
    activeWindowId, 
    openWindow,
    closeWindow, 
    minimizeWindow, 
    toggleMaximizeWindow, 
    focusWindow,
    isSplitScreen
  } = useWindowManager();

  const win = windows[id];
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Position state for floating drag mode
  const [position, setPosition] = useState({
    x: win.defaultPosition.x,
    y: win.defaultPosition.y,
  });

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
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const isActive = activeWindowId === id;
  const isBrowser = id === 'ugc' || id === 'cm' || id === 'contact';
  const isMaximized = win.isMaximized || isMobile;

  const isSplitLeft = isSplitScreen && id === 'ugc';
  const isSplitRight = isSplitScreen && id === 'cm';

  // Determine window layout dimensions and coordinates
  let targetX = position.x;
  let targetY = position.y;
  let targetWidth: string | number = '88vw';
  let targetHeight: string | number = '82vh';
  let isRounded = true;

  if (isMobile) {
    targetX = 0;
    targetY = 0;
    targetWidth = '100vw';
    targetHeight = 'calc(100dvh - 32px)';
    isRounded = false;
  } else if (isMaximized) {
    targetX = 0;
    targetY = 0;
    targetWidth = '100vw';
    targetHeight = 'calc(100dvh - 32px)';
    isRounded = false;
  } else if (isSplitLeft) {
    targetX = 0;
    targetY = 0;
    targetWidth = '50vw';
    targetHeight = 'calc(100dvh - 32px)';
    isRounded = false;
  } else if (isSplitRight) {
    targetX = window.innerWidth ? window.innerWidth * 0.5 : 700;
    targetY = 0;
    targetWidth = '50vw';
    targetHeight = 'calc(100dvh - 32px)';
    isRounded = false;
  } else {
    // Normal floating mode per window type
    if (id === 'notepad') {
      targetWidth = '460px';
      targetHeight = '460px';
    } else if (id === 'contact') {
      targetWidth = '560px';
      targetHeight = '620px';
    } else {
      targetWidth = 'min(1150px, 88vw)';
      targetHeight = 'min(780px, 84vh)';
    }
  }

  const isDraggable = !isMobile && !isSplitScreen && !win.isMaximized;

  return (
    <motion.div
      initial={{ scale: 0.94, opacity: 0, y: 15 }}
      animate={{ 
        x: targetX,
        y: targetY,
        width: targetWidth,
        height: targetHeight,
        scale: 1, 
        opacity: 1, 
        transition: { 
          type: 'spring', 
          damping: 28, 
          stiffness: 380,
          mass: 0.8
        }
      }}
      exit={{ 
        scale: 0.88, 
        opacity: 0, 
        transition: { duration: 0.15 } 
      }}
      drag={isDraggable}
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={(_e, info) => {
        if (isDraggable) {
          setPosition((prev) => ({
            x: Math.max(0, Math.min(window.innerWidth - 200, prev.x + info.offset.x)),
            y: Math.max(0, Math.min(window.innerHeight - 100, prev.y + info.offset.y)),
          }));
        }
      }}
      onMouseDown={() => focusWindow(id)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: win.zIndex,
      }}
      className={`flex flex-col bg-[#ece9d8] select-none overflow-hidden ${
        isRounded ? 'rounded-t-lg shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_0_3px_#0055ea]' : 'rounded-none shadow-none border-b-2 border-black/30'
      }`}
    >
      {/* 1. CLASSIC WINDOWS XP LUNA TITLEBAR */}
      <div 
        onDoubleClick={() => {
          if (!isMobile && !isSplitScreen) {
            toggleMaximizeWindow(id);
          }
        }}
        className={`h-7 px-2 flex items-center justify-between select-none shrink-0 ${
          isActive ? 'xp-titlebar' : 'xp-titlebar-inactive'
        } ${isDraggable ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'} ${
          isRounded ? 'rounded-t-lg' : 'rounded-none'
        }`}
      >
        {/* Title & Icon */}
        <div className="flex items-center gap-1.5 overflow-hidden">
          <span className="text-sm shrink-0">{win.icon}</span>
          <span className="font-sans font-bold text-xs text-white tracking-wide truncate drop-shadow-[1px_1px_1px_#0f387d]">
            {win.title}
          </span>
        </div>

        {/* The 3 Iconic Windows XP Buttons (Always pinned top right) */}
        <div className="flex items-center space-x-1 shrink-0 ml-2">
          {/* Minimize Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            className="w-5 h-5 rounded-[3px] xp-btn-control flex items-center justify-center cursor-pointer transition-transform active:scale-95 shadow-sm"
            title="Minimizar"
          >
            <span className="w-2.5 h-[2px] bg-white block mb-0.5" />
          </button>

          {/* Maximize / Restore Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximizeWindow(id);
            }}
            className="w-5 h-5 rounded-[3px] xp-btn-control flex items-center justify-center cursor-pointer transition-transform active:scale-95 shadow-sm"
            title={win.isMaximized ? "Restaurar tamaño normal" : "Maximizar"}
          >
            {win.isMaximized ? (
              /* Restore overlapping double squares */
              <div className="relative w-3 h-3">
                <div className="absolute top-0 right-0 w-2 h-2 border-[1.5px] border-white" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-[1.5px] border-white bg-[#2270ea]" />
              </div>
            ) : (
              /* Single square */
              <span className="w-2.5 h-2.5 border-[1.5px] border-white block shadow-sm" />
            )}
          </button>

          {/* Iconic XP Red Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className="w-5 h-5 rounded-[3px] xp-btn-close flex items-center justify-center cursor-pointer transition-transform active:scale-95 shadow-sm"
            title="Cerrar"
          >
            <CloseIcon className="w-3.5 h-3.5 text-white stroke-[3.5] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.5)]" />
          </button>
        </div>
      </div>

      {/* 2. RETRO BROWSER TOOLBAR (If Internet Explorer / App Window) */}
      {isBrowser && (
        <div className="bg-[#ece9d8] border-b border-[#d4d0c8] text-black shrink-0">
          {/* Menu Bar: Archivo, Edición, Ver, Favoritos, Ayuda */}
          <div className="hidden sm:flex h-5 px-1 items-center gap-2 text-[11px] text-slate-800 border-b border-[#e0ded8]">
            <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.2 rounded-sm cursor-pointer">Archivo</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.2 rounded-sm cursor-pointer">Edición</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.2 rounded-sm cursor-pointer">Ver</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.2 rounded-sm cursor-pointer">Favoritos</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.2 rounded-sm cursor-pointer">Herramientas</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.2 rounded-sm cursor-pointer">Ayuda</span>
          </div>

          {/* Navigation Buttons: Back, Forward, Stop, Refresh, Home */}
          <div className="h-8 px-2 flex items-center gap-1.5 sm:gap-2 border-b border-[#d4d0c8]">
            <div className="flex items-center gap-0.5">
              <button 
                className="p-1 rounded hover:bg-black/10 active:bg-black/15 flex items-center gap-1 text-[11px] font-sans text-slate-700 cursor-pointer"
                title="Atrás"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <ArrowLeft className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="hidden sm:inline">Atrás</span>
              </button>

              <button 
                className="p-1 rounded hover:bg-black/10 text-slate-400 cursor-not-allowed"
                title="Adelante"
                disabled
              >
                <div className="w-5 h-5 rounded-full bg-slate-400 text-white flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </button>
            </div>

            <div className="w-[1px] h-5 bg-[#c0bda8] mx-0.5" />

            {/* Refresh */}
            <button
              onClick={handleRefresh}
              className={`p-1 rounded hover:bg-black/10 flex items-center gap-1 text-[11px] font-sans text-slate-700 cursor-pointer ${
                isRefreshing ? 'animate-spin text-blue-600' : ''
              }`}
              title="Actualizar página"
            >
              <RotateCw className="w-4 h-4 text-emerald-600" />
            </button>

            {/* Home */}
            <button
              onClick={() => {
                focusWindow('notepad');
              }}
              className="p-1 rounded hover:bg-black/10 flex items-center gap-1 text-[11px] font-sans text-slate-700 cursor-pointer"
              title="Ir a Inicio"
            >
              <Home className="w-4 h-4 text-blue-600" />
            </button>

            {/* Sunken Address Bar */}
            <div className="flex-1 flex items-center gap-1 ml-1 overflow-hidden">
              <span className="text-[11px] text-slate-600 font-sans hidden sm:inline">Dirección:</span>
              <div className="flex-1 flex items-center bg-white xp-sunken px-2 py-0.5 text-xs text-slate-800 overflow-hidden">
                <Lock className="w-3 h-3 text-emerald-600 mr-1.5 shrink-0" />
                <span className="font-mono text-[11px] truncate">{win.url}</span>
              </div>
              <button
                onClick={handleRefresh}
                className="px-2 py-0.5 bg-[#ece9d8] hover:bg-[#dedad0] border border-[#7f9db9] text-[11px] font-sans font-bold text-slate-800 shadow-sm cursor-pointer shrink-0"
              >
                Ir
              </button>
            </div>
          </div>

          {/* Mobile Quick-App Switcher (Instant Navigation on Smartphones) */}
          <div className="flex sm:hidden h-9 px-2 items-center justify-between bg-[#ece9d8] border-b border-[#d4d0c8] gap-1.5 py-1">
            <button
              onClick={() => openWindow('ugc')}
              className={`flex-1 py-1 px-1.5 rounded text-[10px] font-bold border transition-all truncate flex items-center justify-center gap-1 cursor-pointer ${
                id === 'ugc'
                  ? 'bg-ugc-pink text-white border-black shadow-sm'
                  : 'bg-white text-slate-800 border-slate-300'
              }`}
            >
              <span>🎬 UGC Creator</span>
            </button>
            <button
              onClick={() => openWindow('cm')}
              className={`flex-1 py-1 px-1.5 rounded text-[10px] font-bold border transition-all truncate flex items-center justify-center gap-1 cursor-pointer ${
                id === 'cm'
                  ? 'bg-cm-burgundy text-white border-black shadow-sm'
                  : 'bg-white text-slate-800 border-slate-300'
              }`}
            >
              <span>📊 CM Redes</span>
            </button>
            <button
              onClick={() => openWindow('contact')}
              className={`flex-1 py-1 px-1.5 rounded text-[10px] font-bold border transition-all truncate flex items-center justify-center gap-1 cursor-pointer ${
                id === 'contact'
                  ? 'bg-[#2566dc] text-white border-black shadow-sm'
                  : 'bg-white text-slate-800 border-slate-300'
              }`}
            >
              <span>💌 Contacto</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. WINDOW BODY / INTERNAL CANVAS */}
      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden bg-white xp-scroll relative">
        {isRefreshing ? (
          <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-3 bg-[#ece9d8] text-slate-700">
            <div className="w-8 h-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
            <span className="font-pixel text-xs text-blue-800">Cargando Internet Explorer...</span>
          </div>
        ) : (
          children
        )}
      </div>

      {/* Bottom Status bar for Browser */}
      {isBrowser && (
        <div className="h-5 bg-[#ece9d8] border-t border-[#d4d0c8] px-3 flex items-center justify-between text-[10px] text-slate-600 font-sans select-none shrink-0">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Listo · Zona de Internet Explorer
          </span>
          <span className="font-mono">{win.isMaximized ? 'Pantalla Completa' : '100% Zoom'}</span>
        </div>
      )}
    </motion.div>
  );
};
