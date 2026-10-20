import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  BarChart3, 
  UserCheck, 
  MessageCircle, 
  Columns
} from 'lucide-react';
import { InstagramIcon, TikTokIcon } from '../common/BrandIcons';
import { useWindowManager } from '../../context/WindowManagerContext';
import type { WindowId } from '../../types/window';

export const Dock: React.FC = () => {
  const { 
    windows, 
    activeWindowId, 
    openWindow, 
    minimizeWindow, 
    restoreWindow, 
    toggleSplitScreen, 
    isSplitScreen 
  } = useWindowManager();

  const handleAppClick = (id: WindowId) => {
    const win = windows[id];
    if (!win.isOpen) {
      openWindow(id);
    } else if (win.isMinimized) {
      restoreWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      restoreWindow(id);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('¡Hola Sofía! Vi tu portafolio y me gustaría cotizar un proyecto contigo.');
    window.open(`https://wa.me/573023399168?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/sofiacruz0?rpxt=eGo2ODZtbXU2dWM0', '_blank');
  };

  const openTikTok = () => {
    window.open('https://www.tiktok.com/@sofiacruzve?_r=1&_t=ZS-9AisJbpLF0n', '_blank');
  };

  return (
    <footer className="fixed bottom-3 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="pointer-events-auto glass-dock px-3 py-2 rounded-2xl flex items-center gap-2 md:gap-3 shadow-2xl"
      >
        {/* App 1: UGC Creator Studio */}
        <motion.button
          whileHover={{ scale: 1.2, y: -6 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAppClick('ugc')}
          className="relative group p-2 rounded-xl transition-colors hover:bg-white/10 flex flex-col items-center cursor-pointer"
          title="UGC Creator Studio (Videos, Reels, TikTok)"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 flex items-center justify-center shadow-md">
            <Video className="w-6 h-6 text-white" />
          </div>
          
          {/* Active indicator dot */}
          {windows.ugc.isOpen && (
            <span 
              className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full transition-all ${
                windows.ugc.isMinimized
                  ? 'bg-slate-400'
                  : activeWindowId === 'ugc'
                  ? 'bg-pink-400 shadow-glow-ugc w-3'
                  : 'bg-white/80'
              }`}
            />
          )}

          {/* Tooltip */}
          <span className="absolute -top-10 bg-slate-900/90 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/15 pointer-events-none shadow-lg">
            UGC Creator Studio
          </span>
        </motion.button>

        {/* App 2: CM Strategy & Agency */}
        <motion.button
          whileHover={{ scale: 1.2, y: -6 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAppClick('cm')}
          className="relative group p-2 rounded-xl transition-colors hover:bg-white/10 flex flex-col items-center cursor-pointer"
          title="CM Strategy & Agency (Gestión, Métricas & Campañas)"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-md">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>

          {/* Active indicator dot */}
          {windows.cm.isOpen && (
            <span 
              className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full transition-all ${
                windows.cm.isMinimized
                  ? 'bg-slate-400'
                  : activeWindowId === 'cm'
                  ? 'bg-cyan-400 shadow-glow-cm w-3'
                  : 'bg-white/80'
              }`}
            />
          )}

          {/* Tooltip */}
          <span className="absolute -top-10 bg-slate-900/90 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/15 pointer-events-none shadow-lg">
            CM Strategy & Agency
          </span>
        </motion.button>

        {/* Vertical divider */}
        <div className="w-[1px] h-8 bg-white/15 mx-1" />

        {/* Direct Link: WhatsApp */}
        <motion.button
          whileHover={{ scale: 1.2, y: -6 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsApp}
          className="relative group p-2 rounded-xl transition-colors hover:bg-white/10 flex flex-col items-center cursor-pointer"
          title="Abrir WhatsApp Directo"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-600 flex items-center justify-center shadow-md">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="absolute -top-10 bg-slate-900/90 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/15 pointer-events-none shadow-lg">
            Chat WhatsApp
          </span>
        </motion.button>

        {/* Direct Link: Instagram */}
        <motion.button
          whileHover={{ scale: 1.2, y: -6 }}
          whileTap={{ scale: 0.95 }}
          onClick={openInstagram}
          className="relative group p-2 rounded-xl transition-colors hover:bg-white/10 flex flex-col items-center cursor-pointer"
          title="Ver Instagram Oficial (@sofiacruz0)"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-500 flex items-center justify-center shadow-md">
            <InstagramIcon className="w-5 h-5 text-white" />
          </div>
          <span className="absolute -top-10 bg-slate-900/90 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/15 pointer-events-none shadow-lg">
            @sofiacruz0
          </span>
        </motion.button>

        {/* Direct Link: TikTok */}
        <motion.button
          whileHover={{ scale: 1.2, y: -6 }}
          whileTap={{ scale: 0.95 }}
          onClick={openTikTok}
          className="relative group p-2 rounded-xl transition-colors hover:bg-white/10 flex flex-col items-center cursor-pointer"
          title="Ver TikTok Oficial (@sofiacruzve)"
        >
          <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/20 flex items-center justify-center shadow-md">
            <TikTokIcon className="w-5 h-5 text-yellow-300" />
          </div>
          <span className="absolute -top-10 bg-slate-900/90 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/15 pointer-events-none shadow-lg">
            @sofiacruzve
          </span>
        </motion.button>

        {/* App 3: Contact / Bio */}
        <motion.button
          whileHover={{ scale: 1.2, y: -6 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAppClick('contact')}
          className="relative group p-2 rounded-xl transition-colors hover:bg-white/10 flex flex-col items-center cursor-pointer"
          title="Sobre Mí & Contacto"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-slate-700 to-slate-900 border border-white/20 flex items-center justify-center shadow-md">
            <UserCheck className="w-6 h-6 text-white" />
          </div>

          {windows.contact.isOpen && (
            <span 
              className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full transition-all ${
                windows.contact.isMinimized
                  ? 'bg-slate-400'
                  : activeWindowId === 'contact'
                  ? 'bg-emerald-400 w-3'
                  : 'bg-white/80'
              }`}
            />
          )}

          <span className="absolute -top-10 bg-slate-900/90 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/15 pointer-events-none shadow-lg">
            Sobre Mí / Contacto
          </span>
        </motion.button>

        {/* Quick Tiling Toggle button on dock */}
        <motion.button
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSplitScreen}
          className={`relative group p-2 rounded-xl transition-colors flex flex-col items-center cursor-pointer ${
            isSplitScreen ? 'bg-pink-500/30 border border-pink-500/50' : 'hover:bg-white/10'
          }`}
          title="Alternar Pantalla Dividida (50/50)"
        >
          <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner">
            <Columns className={`w-5 h-5 ${isSplitScreen ? 'text-pink-400' : 'text-slate-300'}`} />
          </div>
          <span className="absolute -top-10 bg-slate-900/90 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/15 pointer-events-none shadow-lg">
            {isSplitScreen ? 'Salir de Split Screen' : 'Split Screen 50/50'}
          </span>
        </motion.button>
      </motion.div>
    </footer>
  );
};
