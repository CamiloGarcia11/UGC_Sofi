import React, { useState } from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import type { WindowId } from '../../types/window';

export const DesktopIcons: React.FC = () => {
  const { openWindow } = useWindowManager();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const icons = [
    {
      id: 'ugc' as WindowId,
      name: 'UGC_Creator_Studio.exe',
      label: 'UGC Creator Studio.exe',
      type: 'Aplicación',
      renderIcon: () => (
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Retro Film/Video Clapper Icon */}
          <svg viewBox="0 0 48 48" className="w-11 h-11 drop-shadow-md">
            <rect x="6" y="10" width="36" height="30" rx="3" fill="#1b2a4a" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M6 10 L42 10 L42 20 L6 20 Z" fill="#ff2e7e" />
            <line x1="14" y1="10" x2="18" y2="20" stroke="#fff" strokeWidth="2" />
            <line x1="24" y1="10" x2="28" y2="20" stroke="#fff" strokeWidth="2" />
            <line x1="34" y1="10" x2="38" y2="20" stroke="#fff" strokeWidth="2" />
            <circle cx="24" cy="30" r="6" fill="#ffd700" stroke="#b29400" strokeWidth="1" />
            <polygon points="22,27 28,30 22,33" fill="#ffffff" />
          </svg>
        </div>
      ),
    },
    {
      id: 'cm' as WindowId,
      name: 'Community_Manager_Pro.exe',
      label: 'Community Manager Pro.exe',
      type: 'Aplicación',
      renderIcon: () => (
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Retro 3D Chart & Strategy Binder Icon */}
          <svg viewBox="0 0 48 48" className="w-11 h-11 drop-shadow-md">
            <path d="M4 14 L18 14 L22 18 L44 18 L44 40 L4 40 Z" fill="#2d68c4" stroke="#ffffff" strokeWidth="1.5" />
            <rect x="10" y="22" width="28" height="16" rx="2" fill="#eaf2ff" stroke="#1d4a8c" strokeWidth="1" />
            <rect x="14" y="30" width="4" height="6" fill="#3b82f6" />
            <rect x="22" y="26" width="4" height="10" fill="#10b981" />
            <rect x="30" y="24" width="4" height="12" fill="#f59e0b" />
          </svg>
        </div>
      ),
    },
    {
      id: 'notepad' as WindowId,
      name: 'Sobre_mi.txt',
      label: 'Sobre_mi.txt',
      type: 'Documento',
      renderIcon: () => (
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Classic Windows XP Notepad Icon */}
          <svg viewBox="0 0 48 48" className="w-11 h-11 drop-shadow-md">
            <path d="M10 6 L32 6 L40 14 L40 42 L10 42 Z" fill="#ffffff" stroke="#374151" strokeWidth="1.5" />
            <path d="M32 6 L32 14 L40 14 Z" fill="#d1d5db" stroke="#374151" strokeWidth="1" />
            {/* Notepad lines */}
            <line x1="15" y1="18" x2="33" y2="18" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="15" y1="24" x2="35" y2="24" stroke="#9ca3af" strokeWidth="1.2" />
            <line x1="15" y1="30" x2="35" y2="30" stroke="#9ca3af" strokeWidth="1.2" />
            <line x1="15" y1="36" x2="28" y2="36" stroke="#9ca3af" strokeWidth="1.2" />
          </svg>
        </div>
      ),
    },
    {
      id: 'contact' as WindowId,
      name: 'Contacto_Directo.exe',
      label: 'Contacto Directo.exe',
      type: 'Acceso directo',
      renderIcon: () => (
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Retro Mail & Globe Network Shortcut */}
          <svg viewBox="0 0 48 48" className="w-11 h-11 drop-shadow-md">
            <circle cx="24" cy="24" r="18" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <rect x="12" y="16" width="24" height="16" rx="2" fill="#ffffff" stroke="#065f46" strokeWidth="1" />
            <path d="M12 18 L24 26 L36 18" stroke="#065f46" strokeWidth="1.5" fill="none" />
            <polygon points="4,36 12,36 12,44 4,44" fill="#3b82f6" />
            <path d="M6 42 L10 38" stroke="#fff" strokeWidth="1.5" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div 
      className="absolute top-28 left-6 md:left-10 z-10 flex flex-col gap-6 select-none"
      onClick={() => setSelectedId(null)}
    >
      {icons.map((icon) => {
        const isSelected = selectedId === icon.id;

        return (
          <div
            key={icon.id}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(icon.id);
              if (typeof window !== 'undefined' && window.innerWidth < 768) {
                openWindow(icon.id);
              }
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              openWindow(icon.id);
            }}
            className={`group w-24 p-2 rounded flex flex-col items-center text-center cursor-pointer transition-colors ${
              isSelected ? 'xp-icon-selected' : 'hover:bg-blue-500/10'
            }`}
          >
            {/* 3D Retro Icon */}
            <div className="transition-transform group-hover:scale-105 active:scale-95">
              {icon.renderIcon()}
            </div>

            {/* Label with Windows XP drop shadow */}
            <span 
              className={`mt-1.5 text-[11px] font-sans font-medium leading-tight px-1 py-0.5 rounded ${
                isSelected 
                  ? 'bg-[#0B61FF] text-white' 
                  : 'text-white drop-shadow-[1px_1px_1px_#000000]'
              }`}
            >
              {icon.label}
            </span>

            {/* Mobile quick-open pill (single tap helper for small screens) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                openWindow(icon.id);
              }}
              className="mt-1 sm:hidden text-[9px] px-2 py-0.5 bg-yellow-300 text-black font-pixel font-bold rounded shadow border border-black"
            >
              Abrir
            </button>
          </div>
        );
      })}
    </div>
  );
};
