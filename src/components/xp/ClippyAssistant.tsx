import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';

export const ClippyAssistant: React.FC = () => {
  const { openWindow } = useWindowManager();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isWinking, setIsWinking] = useState<boolean>(false);

  const handleClippyClick = () => {
    setIsWinking(true);
    setTimeout(() => setIsWinking(false), 800);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-12 right-6 z-30 p-2 rounded-full bg-yellow-200 border-2 border-black shadow-lg hover:scale-110 transition-transform cursor-pointer font-pixel text-xs text-black flex items-center gap-1.5"
        title="Llamar al Asistente Clippy"
      >
        <span>📎</span>
        <span className="hidden sm:inline">Clippy</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-14 right-4 sm:right-10 z-30 flex flex-col items-end pointer-events-auto select-none">
      
      {/* XP Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative mb-2 w-72 sm:w-80 p-3.5 bg-[#ffffea] border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.4)] text-black"
      >
        {/* Close Button on Bubble */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1.5 right-1.5 text-slate-500 hover:text-black p-0.5 cursor-pointer"
          title="Ocultar asistente"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Bubble Title */}
        <div className="flex items-center gap-1.5 font-bold text-xs text-[#003399] pb-1 border-b border-black/10">
          <span>📎</span>
          <span className="font-pixel text-[11px]">Asistente Virtual</span>
        </div>

        {/* Bubble Text */}
        <p className="text-xs text-slate-800 leading-relaxed mt-2 font-sans font-medium">
          ¡Hola! Parece que estás explorando el portafolio de <strong>Sofía</strong>. Haz doble clic en cualquiera de sus aplicaciones para ver sus proyectos:
        </p>

        {/* Interactive Quick Links */}
        <div className="mt-3 space-y-1.5">
          <button
            onClick={() => openWindow('ugc')}
            className="w-full text-left px-2.5 py-1.5 rounded bg-white hover:bg-[#d8e6ff] border border-slate-300 text-xs font-semibold text-[#003399] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            <span>Abrir UGC Creator Studio (Reels & TikToks)</span>
          </button>

          <button
            onClick={() => openWindow('cm')}
            className="w-full text-left px-2.5 py-1.5 rounded bg-white hover:bg-[#d8e6ff] border border-slate-300 text-xs font-semibold text-[#003399] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Abrir CM Strategy Pro (Métricas & Clientes)</span>
          </button>

          <button
            onClick={() => openWindow('notepad')}
            className="w-full text-left px-2.5 py-1.5 rounded bg-white hover:bg-[#d8e6ff] border border-slate-300 text-xs font-semibold text-[#003399] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Leer Sobre_mi.txt (Bloc de notas)</span>
          </button>
        </div>

        {/* Speech Bubble Arrow */}
        <div className="absolute -bottom-2 right-12 w-4 h-4 bg-[#ffffea] border-r-2 border-b-2 border-black transform rotate-45" />
      </motion.div>

      {/* Animated Clippy Figure */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClippyClick}
        className="cursor-pointer relative pr-10"
        title="¡Haz clic en Clippy!"
      >
        <svg
          width="76"
          height="88"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[3px_3px_2px_rgba(0,0,0,0.35)]"
        >
          {/* Paperclip Wire Body (Metallic Silver / Gray Gradient) */}
          <path
            d="M50,110 L50,45 C50,25 70,25 70,45 L70,95 C70,105 40,105 40,95 L40,35 C40,10 85,10 85,35 L85,85"
            stroke="#a8b2be"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50,110 L50,45 C50,25 70,25 70,45 L70,95 C70,105 40,105 40,95 L40,35 C40,10 85,10 85,35 L85,85"
            stroke="#3a424e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Eyebrows */}
          <path
            d="M38,32 Q46,26 54,30"
            stroke="#000"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M62,30 Q70,26 78,32"
            stroke="#000"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Left Eye */}
          <ellipse cx="46" cy="42" rx="9" ry="11" fill="#fff" stroke="#000" strokeWidth="2.5" />
          <ellipse cx="48" cy="43" rx="4.5" ry="6" fill="#000" />
          <circle cx="49.5" cy="40.5" r="1.8" fill="#fff" />

          {/* Right Eye */}
          {isWinking ? (
            <path
              d="M62,43 Q70,48 78,43"
              stroke="#000"
              strokeWidth="4"
              strokeLinecap="round"
            />
          ) : (
            <>
              <ellipse cx="70" cy="42" rx="9" ry="11" fill="#fff" stroke="#000" strokeWidth="2.5" />
              <ellipse cx="68" cy="43" rx="4.5" ry="6" fill="#000" />
              <circle cx="69.5" cy="40.5" r="1.8" fill="#fff" />
            </>
          )}
        </svg>
      </motion.div>

    </div>
  );
};
