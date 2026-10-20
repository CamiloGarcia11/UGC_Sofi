import React, { useState } from 'react';
import { 
  Video, 
  BarChart3, 
  UserCheck, 
  Pin, 
  ArrowRight, 
  X, 
  CheckCircle2
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';

export const Desktop: React.FC = () => {
  const { openWindow } = useWindowManager();
  const [showSticky, setShowSticky] = useState<boolean>(true);
  const [selectedDesktopIcon, setSelectedDesktopIcon] = useState<string | null>(null);

  return (
    <div 
      className="relative w-full h-full overflow-hidden select-none bg-slate-950"
      onClick={() => setSelectedDesktopIcon(null)}
    >
      {/* Dynamic Aesthetic Wallpaper Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))] pointer-events-none" />
      
      {/* Subtle animated glowing ambient orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-600/15 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] rounded-full bg-pink-600/10 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* Subtle OS grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Desktop Workspace content */}
      <div className="relative z-10 w-full h-full pt-14 pb-24 px-6 flex flex-col justify-between pointer-events-none">
        
        {/* Top-Left: Desktop Shortcuts Grid */}
        <div className="flex flex-col sm:flex-row gap-6 items-start pointer-events-auto">
          {/* App 1: UGC Creator Studio */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDesktopIcon('ugc');
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              openWindow('ugc');
            }}
            className={`group w-36 p-3 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-200 border ${
              selectedDesktopIcon === 'ugc'
                ? 'bg-white/15 border-pink-400/50 backdrop-blur-md shadow-glow-ugc'
                : 'hover:bg-white/10 border-transparent hover:border-white/10 backdrop-blur-sm'
            }`}
          >
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Video className="w-8 h-8 text-white" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 text-[9px] text-white font-bold items-center justify-center">U</span>
              </span>
            </div>
            <span className="mt-2 text-xs font-semibold text-white drop-shadow tracking-wide leading-tight">
              UGC Creator Studio
            </span>
            <span className="text-[10px] text-pink-200/80 font-medium mt-0.5 leading-snug">
              Creatividad, Contenido & Estilo
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                openWindow('ugc');
              }}
              className="mt-2 text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 group-hover:bg-pink-500 group-hover:text-white transition-colors"
            >
              Abrir Studio
            </button>
          </div>

          {/* App 2: CM Strategy & Agency */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDesktopIcon('cm');
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              openWindow('cm');
            }}
            className={`group w-36 p-3 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-200 border ${
              selectedDesktopIcon === 'cm'
                ? 'bg-white/15 border-blue-400/50 backdrop-blur-md shadow-glow-cm'
                : 'hover:bg-white/10 border-transparent hover:border-white/10 backdrop-blur-sm'
            }`}
          >
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <BarChart3 className="w-8 h-8 text-white" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 text-[9px] text-white font-bold items-center justify-center">CM</span>
              </span>
            </div>
            <span className="mt-2 text-xs font-semibold text-white drop-shadow tracking-wide leading-tight">
              CM Strategy & Agency
            </span>
            <span className="text-[10px] text-blue-200/80 font-medium mt-0.5 leading-snug">
              Gestión, Métricas & Marcas
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                openWindow('cm');
              }}
              className="mt-2 text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors"
            >
              Abrir Agencia
            </button>
          </div>

          {/* App 3: Sobre Mí & Contacto */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDesktopIcon('contact');
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              openWindow('contact');
            }}
            className={`group w-36 p-3 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-200 border ${
              selectedDesktopIcon === 'contact'
                ? 'bg-white/15 border-emerald-400/50 backdrop-blur-md shadow-lg'
                : 'hover:bg-white/10 border-transparent hover:border-white/10 backdrop-blur-sm'
            }`}
          >
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <span className="mt-2 text-xs font-semibold text-white drop-shadow tracking-wide leading-tight">
              Bio & Contacto
            </span>
            <span className="text-[10px] text-emerald-200/80 font-medium mt-0.5 leading-snug">
              Media Kit & Conexión
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                openWindow('contact');
              }}
              className="mt-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-600 group-hover:text-white transition-colors"
            >
              Conocer a Sofía
            </button>
          </div>
        </div>

        {/* Floating Desktop Widget: Sticky Note Welcome Card */}
        {showSticky && (
          <div className="pointer-events-auto self-end max-w-sm w-full rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/15 p-4 shadow-2xl">
            {/* Widget Header */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Pin className="w-4 h-4 text-pink-400 transform rotate-12" />
                <span className="text-xs font-semibold tracking-wide text-white flex items-center gap-1.5">
                  Bienvenid@ a mi espacio creativo ✨
                </span>
              </div>
              <button 
                onClick={() => setShowSticky(false)}
                className="text-slate-400 hover:text-white transition-colors p-1 cursor-pointer"
                title="Ocultar nota"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Note Body */}
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Hola, soy <strong className="text-pink-300 font-semibold">Sofía</strong>. Combino la autenticidad del 
              <span className="text-pink-400 font-medium"> UGC</span> de alta conversión con la seriedad y estructura analítica del 
              <span className="text-cyan-400 font-medium"> Community Management estratégico</span>.
            </p>

            <div className="space-y-1.5 mb-3 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>Haz clic en cualquier app para navegar su landing page.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Prueba el botón <strong>Split Screen 50/50</strong> en la Top Bar para comparar ambos perfiles lado a lado.</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => openWindow('ugc')}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white font-medium text-[11px] shadow-sm transition-transform active:scale-95 cursor-pointer"
              >
                <span>Ver Portafolio UGC</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              
              <button
                onClick={() => openWindow('cm')}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-[11px] shadow-sm transition-transform active:scale-95 cursor-pointer"
              >
                <span>Estrategia CM</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
