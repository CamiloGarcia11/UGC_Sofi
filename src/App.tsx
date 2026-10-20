import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { WindowManagerProvider, useWindowManager } from './context/WindowManagerContext';
import { BlissBackground } from './components/xp/BlissBackground';
import { DesktopIcons } from './components/xp/DesktopIcons';
import { ClippyAssistant } from './components/xp/ClippyAssistant';
import { XPTaskbar } from './components/xp/XPTaskbar';
import { XPWindowFrame } from './components/xp/XPWindowFrame';
import { XPNotepad } from './components/xp/XPNotepad';
import { UGCApp } from './components/apps/ugc/UGCApp';
import { CMApp } from './components/apps/cm/CMApp';
import { ContactApp } from './components/apps/contact/ContactApp';

const XPDesktopWorkspace: React.FC = () => {
  const { windows, closeStartMenu } = useWindowManager();

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden select-none bg-[#0a5c0a] font-sans"
      onClick={() => closeStartMenu()}
    >
      {/* 1. Iconic Windows XP "Bliss" Wallpaper + Digital Collage Art */}
      <BlissBackground />

      {/* 2. Classic 3D Desktop Shortcuts */}
      <DesktopIcons />

      {/* 3. Interactive Office Clippy Assistant */}
      <ClippyAssistant />

      {/* 4. Windows XP Window Manager (Internet Explorer & Notepad) */}
      <AnimatePresence>
        {/* Window 1: Sobre Mí (Notepad) - Open by default on desktop */}
        {windows.notepad.isOpen && !windows.notepad.isMinimized && (
          <XPWindowFrame key="win-notepad" id="notepad">
            <XPNotepad />
          </XPWindowFrame>
        )}

        {/* Window 2: UGC Creator Studio (Internet Explorer 6) */}
        {windows.ugc.isOpen && !windows.ugc.isMinimized && (
          <XPWindowFrame key="win-ugc" id="ugc">
            <UGCApp />
          </XPWindowFrame>
        )}

        {/* Window 3: Community Manager Pro (Internet Explorer 6) */}
        {windows.cm.isOpen && !windows.cm.isMinimized && (
          <XPWindowFrame key="win-cm" id="cm">
            <CMApp />
          </XPWindowFrame>
        )}

        {/* Window 4: Contacto Directo & Redes (Windows XP Modal) */}
        {windows.contact.isOpen && !windows.contact.isMinimized && (
          <XPWindowFrame key="win-contact" id="contact">
            <ContactApp />
          </XPWindowFrame>
        )}
      </AnimatePresence>

      {/* 5. Iconic Windows XP Luna Taskbar & Start Menu */}
      <XPTaskbar />
    </div>
  );
};

export function App() {
  return (
    <WindowManagerProvider>
      <XPDesktopWorkspace />
    </WindowManagerProvider>
  );
}

export default App;
