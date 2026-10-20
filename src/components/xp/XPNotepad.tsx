import React, { useState } from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { Video, BarChart3 } from 'lucide-react';

export const XPNotepad: React.FC = () => {
  const { openWindow } = useWindowManager();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menus = ['Archivo', 'Edición', 'Formato', 'Ver', 'Ayuda'];

  return (
    <div className="flex flex-col h-full bg-white select-text">
      {/* Classic Windows XP Notepad Menu Bar */}
      <div className="h-6 bg-[#ece9d8] border-b border-[#d4d0c8] px-1 flex items-center gap-1 select-none text-[11px] text-black">
        {menus.map((m) => (
          <div key={m} className="relative">
            <button
              onClick={() => setActiveMenu(activeMenu === m ? null : m)}
              className={`px-2 py-0.5 rounded-sm hover:bg-[#316ac5] hover:text-white transition-colors cursor-pointer ${
                activeMenu === m ? 'bg-[#316ac5] text-white' : ''
              }`}
            >
              {m}
            </button>

            {/* Dropdown menu */}
            {activeMenu === m && (
              <div 
                className="absolute top-6 left-0 w-36 bg-[#ece9d8] border border-[#7f9db9] shadow-lg py-1 z-50 text-[11px] text-black select-none"
                onClick={() => setActiveMenu(null)}
              >
                <div className="px-3 py-1 hover:bg-[#316ac5] hover:text-white cursor-pointer">Guardar</div>
                <div className="px-3 py-1 hover:bg-[#316ac5] hover:text-white cursor-pointer">Guardar como...</div>
                <div className="my-1 border-t border-[#d4d0c8]" />
                <div className="px-3 py-1 hover:bg-[#316ac5] hover:text-white cursor-pointer">Configurar página</div>
                <div className="px-3 py-1 hover:bg-[#316ac5] hover:text-white cursor-pointer">Imprimir...</div>
                <div className="my-1 border-t border-[#d4d0c8]" />
                <div className="px-3 py-1 hover:bg-[#316ac5] hover:text-white cursor-pointer">Salir</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Notepad Text Canvas */}
      <div className="flex-1 p-4 font-mono text-xs sm:text-[13px] text-slate-900 leading-relaxed overflow-y-auto bg-white xp-scroll">
        <div className="space-y-4">
          <div className="pb-2 border-b border-dashed border-slate-300">
            <p className="font-bold text-[#003399]">
              =============================================<br />
              SOFIA CRUZ // PORTAFOLIO UGC & CM [2026]<br />
              =============================================
            </p>
            <p className="text-slate-600 text-[11px] mt-1">
              Última modificación: Martes, 20 de Octubre de 2026, 15:50:00<br />
              Autora: Sofía Cruz · Creadora UGC & Community Manager
            </p>
          </div>

          <p>
            ¡Hola! Bienvenid@ a mi portafolio interactivo. Soy Sofía Cruz, y me especializo en conectar marcas con sus audiencias ideales a través de dos áreas complementarias:
          </p>

          {/* UGC Profile */}
          <div className="p-3 bg-[#fff0f6] border border-[#ffb3d9] rounded-sm space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#c2185b]">
              <span>🎬</span>
              <span>1. CREADORA UGC (Videos Cercanos y Reales):</span>
            </div>
            <p className="text-slate-700 text-xs">
              Creo videos verticales para celular (TikTok, Reels, Instagram) recomendando tu producto de forma honesta y cercana. Videos entretenidos que atrapan desde el primer segundo y animan a la gente a comprar sin sentirse bombardeados de publicidad.
            </p>
            <div className="pt-1">
              <button
                onClick={() => openWindow('ugc')}
                className="px-2.5 py-1 bg-[#ff2e7e] hover:bg-[#e0246a] text-white text-[11px] font-bold rounded-sm shadow-sm flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Explorar Galería de Videos UGC ➔</span>
              </button>
            </div>
          </div>

          {/* CM Profile */}
          <div className="p-3 bg-[#f0f7ff] border border-[#b8daff] rounded-sm space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#0052cc]">
              <span>📊</span>
              <span>2. GESTIÓN PROFESIONAL DE REDES (Community Manager):</span>
            </div>
            <p className="text-slate-700 text-xs">
              Organizo tu calendario de publicaciones, redacto textos que atraen y venden, respondo rápido a los mensajes de tus clientes y te entrego reportes claros mes a mes para que veas el crecimiento real de tu negocio.
            </p>
            <div className="pt-1">
              <button
                onClick={() => openWindow('cm')}
                className="px-2.5 py-1 bg-[#0052cc] hover:bg-[#003d99] text-white text-[11px] font-bold rounded-sm shadow-sm flex items-center gap-1 cursor-pointer transition-colors"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Ver Servicios & Casos de Éxito CM ➔</span>
              </button>
            </div>
          </div>

          {/* Quick specs */}
          <div className="pt-2 text-[11px] text-slate-600 space-y-0.5">
            <p>✓ Equipo: iPhone 15 Pro Max en máxima calidad · Micrófono inalámbrico de alta fidelidad</p>
            <p>✓ Espacios: Espacios estéticos en casa, escritorio moderno y exteriores luminosos</p>
            <p>✓ Entregas: 48 a 72 horas con diferentes opciones de inicio para probar</p>
          </div>

          {/* Canales de Contacto Directo */}
          <div className="p-3 bg-[#f8f9fa] border border-[#d1d5db] rounded-sm space-y-1 text-xs">
            <p className="font-bold text-slate-900">📞 CANALES DE CONTACTO DIRECTO:</p>
            <p>• WhatsApp: +57 302 339 9168</p>
            <p>• Instagram: @sofiacruz0</p>
            <p>• TikTok: @sofiacruzve</p>
            <p>• Correo: anasofiacruzvega@gmail.com</p>
          </div>

          <p className="pt-2 text-slate-500 italic text-[11px]">
            &gt; Haz doble clic en los iconos del escritorio para explorar cada sección con su experiencia completa.
          </p>
        </div>
      </div>

      {/* Notepad Status Bar */}
      <div className="h-5 bg-[#ece9d8] border-t border-[#d4d0c8] px-3 flex items-center justify-between text-[10px] text-slate-600 font-mono select-none">
        <span>Línea 24, Columna 1</span>
        <span>100% · Windows (CRLF) · UTF-8</span>
      </div>
    </div>
  );
};
