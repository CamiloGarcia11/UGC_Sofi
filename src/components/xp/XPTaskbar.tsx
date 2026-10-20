import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Wifi, 
  Columns, 
  MessageCircle, 
  FileText, 
  Video, 
  BarChart3, 
  UserCheck, 
  Power, 
  LogOut, 
  Folder, 
  Image as ImageIcon,
  Code2,
  ExternalLink
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { InstagramIcon, TikTokIcon } from '../common/BrandIcons';
import type { WindowId } from '../../types/window';

export const XPTaskbar: React.FC = () => {
  const { 
    windows, 
    activeWindowId, 
    isStartMenuOpen, 
    toggleStartMenu, 
    closeStartMenu, 
    openWindow, 
    minimizeWindow, 
    restoreWindow, 
    toggleSplitScreen, 
    isSplitScreen 
  } = useWindowManager();

  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(85);
  const [showVolumePopup, setShowVolumePopup] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      const dateStr = now.toLocaleDateString('es-ES', { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short' 
      });
      setCurrentTime(timeStr);
      setCurrentDate(dateStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTaskClick = (id: WindowId) => {
    closeStartMenu();
    const win = windows[id];
    if (win.isMinimized) {
      restoreWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      restoreWindow(id);
    }
  };

  const openWhatsApp = () => {
    closeStartMenu();
    const message = encodeURIComponent('¡Hola Sofía! Vi tu portafolio y me gustaría cotizar un proyecto.');
    window.open(`https://wa.me/573023399168?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    closeStartMenu();
    window.open('https://www.instagram.com/sofiacruz0?rpxt=eGo2ODZtbXU2dWM0', '_blank');
  };

  const openTikTok = () => {
    closeStartMenu();
    window.open('https://www.tiktok.com/@sofiacruzve?_r=1&_t=ZS-9AisJbpLF0n', '_blank');
  };

  const openWindowsList = (Object.keys(windows) as WindowId[]).filter(
    (id) => windows[id].isOpen
  );

  return (
    <>
      {/* 1. CLASSIC WINDOWS XP START MENU POPUP */}
      {isStartMenuOpen && (
        <div 
          className="fixed bottom-8 left-0 z-50 w-80 sm:w-96 rounded-t-md shadow-[4px_4px_16px_rgba(0,0,0,0.6)] border border-[#0055ea] overflow-hidden select-none animate-in fade-in zoom-in-95 duration-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with User Info */}
          <div className="h-14 px-3 bg-gradient-to-r from-[#0058ee] via-[#2270ea] to-[#3882f6] flex items-center gap-3 border-b border-white/40 shadow-inner">
            <div className="w-10 h-10 rounded-sm bg-white p-0.5 border border-white shadow">
              <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-lg">
                👩‍💻
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-xs sm:text-sm drop-shadow-[1px_1px_1px_#000]">
                Sofía Cruz
              </h3>
              <span className="text-blue-100 text-[11px] font-mono block">
                Creadora UGC & CM Pro
              </span>
            </div>
          </div>

          {/* Two Columns Body */}
          <div className="grid grid-cols-12 bg-white text-slate-800 text-xs">
            {/* Left Column (White Background) */}
            <div className="col-span-7 p-2 space-y-1 bg-white border-r border-[#d4d0c8]">
              {/* App: UGC Studio */}
              <button
                onClick={() => {
                  closeStartMenu();
                  openWindow('ugc');
                }}
                className="w-full p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2.5 text-left transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded bg-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs block leading-tight">UGC Studio</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-blue-100 block">Reels & Videos 9:16</span>
                </div>
              </button>

              {/* App: CM Pro */}
              <button
                onClick={() => {
                  closeStartMenu();
                  openWindow('cm');
                }}
                className="w-full p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2.5 text-left transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs block leading-tight">CM Strategy Pro</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-blue-100 block">Gestión & Métricas</span>
                </div>
              </button>

              {/* App: Notepad */}
              <button
                onClick={() => {
                  closeStartMenu();
                  openWindow('notepad');
                }}
                className="w-full p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2.5 text-left transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded bg-slate-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs block leading-tight">Sobre_mi.txt</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-blue-100 block">Bloc de notas</span>
                </div>
              </button>

              <div className="my-1 border-t border-[#d4d0c8]" />

              {/* WhatsApp direct */}
              <button
                onClick={openWhatsApp}
                className="w-full p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2.5 text-left transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs block leading-tight">WhatsApp Directo</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-blue-100 block font-mono">3023399168</span>
                </div>
              </button>

              {/* Instagram */}
              <button
                onClick={openInstagram}
                className="w-full p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2.5 text-left transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-bold text-xs block leading-tight">Instagram Oficial</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-blue-100 block">@sofiacruz0</span>
                </div>
              </button>

              {/* TikTok */}
              <button
                onClick={openTikTok}
                className="w-full p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2.5 text-left transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <TikTokIcon className="w-4 h-4 text-yellow-300" />
                </div>
                <div>
                  <span className="font-bold text-xs block leading-tight">TikTok Oficial</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-blue-100 block">@sofiacruzve</span>
                </div>
              </button>
            </div>

            {/* Right Column (Light Blue Background) */}
            <div className="col-span-5 p-2 space-y-1.5 bg-[#d3e5fa] text-[#00136b] text-xs font-semibold">
              <button
                onClick={() => {
                  closeStartMenu();
                  openWindow('contact');
                }}
                className="w-full p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2 text-left cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-blue-700" />
                <span>Sobre Mí / Contacto</span>
              </button>

              <button
                onClick={() => {
                  closeStartMenu();
                  openWindow('ugc');
                }}
                className="w-full p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2 text-left cursor-pointer"
              >
                <ImageIcon className="w-4 h-4 text-blue-700" />
                <span>Mis Videos UGC</span>
              </button>

              <button
                onClick={() => {
                  closeStartMenu();
                  toggleSplitScreen();
                }}
                className="w-full p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2 text-left cursor-pointer"
              >
                <Columns className="w-4 h-4 text-blue-700" />
                <span>Pantalla Dividida (UGC + CM)</span>
              </button>

              <div className="my-1 border-t border-[#b8d1f2]" />

              <a
                href="mailto:anasofiacruzvega@gmail.com"
                className="p-1.5 rounded hover:bg-[#316ac5] hover:text-white flex items-center gap-2 text-left cursor-pointer block"
              >
                <Folder className="w-4 h-4 text-blue-700" />
                <span>anasofiacruzvega@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Bottom Bar: Log Off & Turn Off */}
          <div className="h-10 bg-gradient-to-r from-[#1941a5] to-[#225adf] px-3 flex items-center justify-between text-white text-xs border-t border-[#0055ea]">
            <button
              onClick={() => closeStartMenu()}
              className="flex items-center gap-1.5 hover:text-yellow-300 cursor-pointer font-bold"
            >
              <LogOut className="w-3.5 h-3.5 text-yellow-400" />
              <span>Cerrar sesión</span>
            </button>

            <button
              onClick={() => {
                closeStartMenu();
                alert('¡Gracias por visitar el portafolio de Sofía! Para contactarla, haz clic en WhatsApp o Contáctame.');
              }}
              className="flex items-center gap-1.5 hover:text-red-300 cursor-pointer font-bold"
            >
              <Power className="w-3.5 h-3.5 text-red-400" />
              <span>Apagar equipo</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. WINDOWS XP LUNA BOTTOM TASKBAR */}
      <footer className="fixed bottom-0 left-0 right-0 h-8 z-40 xp-taskbar flex items-center justify-between select-none px-0.5">
        
        {/* Left Side: The Iconic Green Start Button */}
        <div className="flex items-center h-full">
          <button
            onClick={toggleStartMenu}
            className="h-full px-4 rounded-r-xl xp-start-btn flex items-center gap-2 cursor-pointer transition-transform active:translate-y-[1px]"
            title="Haga clic aquí para comenzar"
          >
            {/* Windows 4-Color Flag Logo */}
            <svg viewBox="0 0 32 32" className="w-4 h-4 drop-shadow">
              <path d="M4 6 Q10 4 14 7 Q14 13 4 14 Z" fill="#eb4132" />
              <path d="M16 7 Q22 4 28 6 Q28 14 16 13 Z" fill="#439e47" />
              <path d="M4 16 Q10 17 14 14 Q14 24 4 26 Z" fill="#2d7dd2" />
              <path d="M16 14 Q22 17 28 16 Q28 26 16 24 Z" fill="#fbb03b" />
            </svg>
            <span className="font-sans italic font-bold text-sm text-white tracking-wide">
              Inicio
            </span>
          </button>

          {/* Quick Launch Icons */}
          <div className="hidden sm:flex items-center gap-1 px-2 border-r border-[#193892]">
            <button
              onClick={() => openWindow('ugc')}
              className="p-1 hover:bg-white/20 rounded cursor-pointer"
              title="Abrir UGC Creator Studio"
            >
              <Video className="w-3.5 h-3.5 text-pink-300" />
            </button>
            <button
              onClick={() => openWindow('cm')}
              className="p-1 hover:bg-white/20 rounded cursor-pointer"
              title="Abrir Community Manager Pro"
            >
              <BarChart3 className="w-3.5 h-3.5 text-blue-200" />
            </button>
            <button
              onClick={() => openWindow('notepad')}
              className="p-1 hover:bg-white/20 rounded cursor-pointer"
              title="Abrir Sobre_mi.txt"
            >
              <FileText className="w-3.5 h-3.5 text-yellow-200" />
            </button>
          </div>
        </div>

        {/* Center: Open / Minimized Window Tabs */}
        <div className="flex-1 flex items-center gap-1 px-2 overflow-x-auto no-scrollbar h-full">
          {openWindowsList.map((id) => {
            const win = windows[id];
            const isTabActive = activeWindowId === id && !win.isMinimized;

            return (
              <button
                key={id}
                onClick={() => handleTaskClick(id)}
                className={`h-[26px] max-w-[170px] min-w-[110px] px-2 rounded-[3px] flex items-center gap-1.5 cursor-pointer text-xs font-sans text-left truncate transition-all ${
                  isTabActive
                    ? 'bg-gradient-to-b from-[#193892] via-[#1c44b0] to-[#193b98] text-white shadow-inner border border-[#132c74]'
                    : 'bg-gradient-to-b from-[#3c80f2] via-[#2566dc] to-[#194cb8] text-white hover:brightness-110 border border-[#1844a0]'
                }`}
                title={win.title}
              >
                <span className="text-xs shrink-0">{win.icon}</span>
                <span className="truncate font-medium text-[11px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.6)]">
                  {win.title.split(' - ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Credit Button: Desarrollado por Vision Web */}
        <a
          href="https://visionwebcl.pages.dev"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-yellow-300 hover:to-yellow-200 text-slate-900 border border-black/40 text-[10px] font-bold shadow-sm transition-transform hover:scale-105 mr-1 cursor-pointer shrink-0"
          title="Sitio web desarrollado por Vision Web"
        >
          <Code2 className="w-3.5 h-3.5 text-slate-900" />
          <span>Desarrollado por <strong>Vision Web</strong></span>
          <ExternalLink className="w-2.5 h-2.5 opacity-70" />
        </a>

        {/* Right Side: Windows XP System Tray */}
        <div className="h-full px-3 bg-gradient-to-b from-[#0c59b2] via-[#1084d0] to-[#166ac6] border-l border-[#0c4992] shadow-inner flex items-center gap-2.5 text-white text-xs">
          
          {/* Split Screen Shortcut */}
          <button
            onClick={toggleSplitScreen}
            className={`hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] cursor-pointer ${
              isSplitScreen ? 'bg-yellow-400 text-black font-bold' : 'hover:bg-white/20'
            }`}
            title="Alternar modo 50/50"
          >
            <Columns className="w-3 h-3" />
            <span>50/50</span>
          </button>

          {/* Sound / Volume with Popup */}
          <div className="relative">
            <button
              onClick={() => setShowVolumePopup(!showVolumePopup)}
              className="hover:text-yellow-300 transition-colors cursor-pointer"
              title={`Volumen: ${isMuted ? 'Silenciado' : `${volume}%`}`}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-red-300" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>

            {showVolumePopup && (
              <div 
                className="absolute right-0 bottom-8 w-40 p-2.5 bg-[#ece9d8] border-2 border-[#0055ea] shadow-xl text-black z-50 rounded-t"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between text-[11px] font-bold mb-1">
                  <span>Volumen XP</span>
                  <span>{isMuted ? '0%' : `${volume}%`}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(Number(e.target.value));
                    if (isMuted) setIsMuted(false);
                  }}
                  className="w-full accent-[#0055ea] cursor-pointer"
                />
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="mt-2 text-[10px] w-full py-0.5 bg-[#d4d0c8] hover:bg-[#c0bda8] border border-black cursor-pointer font-bold"
                >
                  {isMuted ? 'Reactivar' : 'Silencio'}
                </button>
              </div>
            )}
          </div>

          {/* Network icon */}
          <div title="Conexión de área local: 100 Mbps" className="cursor-pointer">
            <Wifi className="w-3.5 h-3.5 text-emerald-300" />
          </div>

          {/* Language Pill */}
          <span className="font-mono text-[10px] font-bold px-1 bg-blue-900/40 rounded border border-blue-300/40">
            ESP
          </span>

          {/* Clock */}
          <div 
            title={`Fecha: ${currentDate}`}
            className="font-sans font-semibold text-[11px] tracking-tight cursor-default whitespace-nowrap pl-1"
          >
            {currentTime}
          </div>
        </div>

      </footer>
    </>
  );
};
