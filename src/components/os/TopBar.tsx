import React, { useState, useEffect } from 'react';
import { 
  Columns, 
  Wifi, 
  Volume2, 
  VolumeX, 
  Battery, 
  Mail, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';

export const TopBar: React.FC = () => {
  const { 
    windows, 
    activeWindowId, 
    isSplitScreen, 
    toggleSplitScreen, 
    openWindow 
  } = useWindowManager();

  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(80);
  const [showVolumePopup, setShowVolumePopup] = useState<boolean>(false);
  const [batteryLevel] = useState<number>(96);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
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

  const activeApp = activeWindowId ? windows[activeWindowId] : null;

  return (
    <header className="fixed top-0 left-0 right-0 h-9 z-50 glass-topbar flex items-center justify-between px-3 text-xs font-medium text-slate-200 select-none shadow-sm">
      {/* Left side: Activities, OS Brand & Active App */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => toggleSplitScreen()}
          className="px-2.5 py-1 rounded hover:bg-white/10 active:bg-white/15 transition-all text-slate-200 font-semibold flex items-center gap-1.5 cursor-pointer"
          title="Tiling / Modo Actividades"
        >
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
          <span>Actividades</span>
        </button>

        <span className="text-slate-500 font-mono">|</span>

        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
          <span className="text-cyan-400 font-bold">StudioOS</span>
          <span className="text-[9px] px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300">v2.4</span>
        </div>

        {/* Dynamic Foreground App Indicator */}
        {activeApp && activeApp.isOpen && !activeApp.isMinimized ? (
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10 text-white font-medium text-[11px]">
            <span className="text-xs">{activeApp.icon}</span>
            <span className="truncate max-w-[140px] md:max-w-none">{activeApp.title}</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-300 text-[10px] font-normal hidden md:inline">{activeApp.subtitle}</span>
          </div>
        ) : (
          <div className="hidden sm:flex items-center gap-1 px-2 text-slate-400 text-[11px]">
            <span>Escritorio</span>
          </div>
        )}
      </div>

      {/* Center: Live Clock & Date */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 cursor-pointer hover:bg-white/10 px-3 py-0.5 rounded transition-all">
        <span className="capitalize text-slate-300 hidden md:inline">{currentDate}</span>
        <span className="font-semibold text-white tracking-wider font-mono">{currentTime}</span>
      </div>

      {/* Right side: Split screen button, quick indicators, and CTA */}
      <div className="flex items-center space-x-2">
        {/* Split Screen / Tiling Mode Button */}
        <button
          onClick={toggleSplitScreen}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-all cursor-pointer font-medium ${
            isSplitScreen
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm ring-1 ring-white/30'
              : 'hover:bg-white/10 text-slate-300 bg-white/5 border border-white/10'
          }`}
          title="Alternar modo pantalla dividida (50% UGC / 50% CM)"
        >
          {isSplitScreen ? (
            <>
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Modo Libre</span>
            </>
          ) : (
            <>
              <Columns className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Split Screen 50/50</span>
            </>
          )}
        </button>

        {/* System Tray (Network, Sound, Battery) */}
        <div className="flex items-center space-x-1.5 px-2 py-1 rounded bg-white/5 border border-white/10">
          <button 
            title="Conexión de red: 1 Gbps / Fibra Óptica"
            className="text-slate-300 hover:text-white transition-colors"
          >
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
          </button>

          {/* Volume button with dropdown slider */}
          <div className="relative">
            <button 
              onClick={() => setShowVolumePopup(!showVolumePopup)}
              title={`Volumen: ${isMuted ? 'Silenciado' : `${volume}%`}`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-red-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-slate-200" />
              )}
            </button>

            {showVolumePopup && (
              <div className="absolute right-0 top-7 w-48 p-3 rounded-xl bg-slate-900/95 border border-white/15 backdrop-blur-xl shadow-2xl z-50 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between mb-2 text-slate-300 text-[11px]">
                  <span className="font-semibold">Volumen Master</span>
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
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="mt-2 text-[10px] text-slate-400 hover:text-white w-full text-center py-1 rounded bg-white/5"
                >
                  {isMuted ? 'Reactivar sonido' : 'Silenciar todo'}
                </button>
              </div>
            )}
          </div>

          <div 
            title={`Batería: ${batteryLevel}% · Conectado`}
            className="flex items-center gap-1 text-[11px] text-slate-300"
          >
            <Battery className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xl:inline text-[10px]">{batteryLevel}%</span>
          </div>
        </div>

        {/* Direct Contact Button */}
        <button
          onClick={() => openWindow('contact')}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold shadow-sm transition-all transform active:scale-95 cursor-pointer text-[11px]"
        >
          <Mail className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Contacto Directo</span>
        </button>
      </div>
    </header>
  );
};
