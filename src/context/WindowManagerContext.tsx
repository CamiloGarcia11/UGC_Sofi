import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { WindowId, WindowState, WindowManagerContextType } from '../types/window';

const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;

const getInitialWindows = (): Record<WindowId, WindowState> => ({
  notepad: {
    id: 'notepad',
    title: 'Sobre_mi.txt - Bloc de notas',
    subtitle: 'Texto sin formato',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 12,
    url: 'C:\\Documents and Settings\\Sofia\\Escritorio\\Sobre_mi.txt',
    icon: '📝',
    defaultPosition: { x: 380, y: 65 },
    defaultSize: { width: '420px', height: '410px' },
  },
  ugc: {
    id: 'ugc',
    title: 'UGC Creator Studio - Internet Explorer',
    subtitle: 'Creatividad, Reels & TikToks 9:16',
    isOpen: false,
    isMinimized: false,
    isMaximized: isMobileDevice,
    zIndex: 10,
    url: 'http://www.mi-portafolio.xp/ugc',
    icon: '🎬',
    defaultPosition: { x: 60, y: 35 },
    defaultSize: { width: '84%', height: '84%' },
  },
  cm: {
    id: 'cm',
    title: 'Community Manager Pro - Internet Explorer',
    subtitle: 'Estrategia, Métricas & Marcas',
    isOpen: false,
    isMinimized: false,
    isMaximized: isMobileDevice,
    zIndex: 9,
    url: 'http://www.mi-portafolio.xp/community-manager',
    icon: '📊',
    defaultPosition: { x: 100, y: 55 },
    defaultSize: { width: '84%', height: '84%' },
  },
  contact: {
    id: 'contact',
    title: 'Contacto Directo & Redes - Windows XP',
    subtitle: 'Conexión, WhatsApp & Media Kit',
    isOpen: false,
    isMinimized: false,
    isMaximized: isMobileDevice,
    zIndex: 11,
    url: 'http://www.mi-portafolio.xp/contacto',
    icon: '📁',
    defaultPosition: { x: 200, y: 80 },
    defaultSize: { width: '560px', height: '600px' },
  },
});

const WindowManagerContext = createContext<WindowManagerContextType | null>(null);

export const WindowManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(getInitialWindows);
  const [activeWindowId, setActiveWindowId] = useState<WindowId | null>(null);
  const [isSplitScreen, setIsSplitScreen] = useState<boolean>(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false);

  const closeStartMenu = useCallback(() => {
    setIsStartMenuOpen(false);
  }, []);

  const toggleStartMenu = useCallback(() => {
    setIsStartMenuOpen((prev) => !prev);
  }, []);

  const focusWindow = useCallback((id: WindowId) => {
    setIsStartMenuOpen(false);
    setWindows((prevWindows) => {
      if (!prevWindows[id]) return prevWindows;
      const currentHighestZ = Math.max(...Object.values(prevWindows).map(w => w.zIndex), 10);
      const nextZ = currentHighestZ + 1;
      return {
        ...prevWindows,
        [id]: {
          ...prevWindows[id],
          zIndex: nextZ,
          isMinimized: false,
        },
      };
    });
    setActiveWindowId(id);
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    setIsStartMenuOpen(false);
    setWindows((prevWindows) => {
      const currentHighestZ = Math.max(...Object.values(prevWindows).map(w => w.zIndex), 10);
      const nextZ = currentHighestZ + 1;
      return {
        ...prevWindows,
        [id]: {
          ...prevWindows[id],
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
        },
      };
    });
    setActiveWindowId(id);
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
        isMinimized: false,
      },
    }));

    if (isSplitScreen && (id === 'ugc' || id === 'cm')) {
      setIsSplitScreen(false);
    }

    setActiveWindowId((current) => {
      if (current !== id) return current;
      const remaining = Object.values(windows)
        .filter((w) => w.id !== id && w.isOpen && !w.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex);
      return remaining.length > 0 ? remaining[0].id : null;
    });
  }, [isSplitScreen, windows]);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }));

    if (isSplitScreen && (id === 'ugc' || id === 'cm')) {
      setIsSplitScreen(false);
    }

    setActiveWindowId((current) => {
      if (current !== id) return current;
      const remaining = Object.values(windows)
        .filter((w) => w.id !== id && w.isOpen && !w.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex);
      return remaining.length > 0 ? remaining[0].id : null;
    });
  }, [isSplitScreen, windows]);

  const restoreWindow = useCallback((id: WindowId) => {
    focusWindow(id);
  }, [focusWindow]);

  const toggleMaximizeWindow = useCallback((id: WindowId) => {
    if (isSplitScreen) {
      setIsSplitScreen(false);
    }
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id].isMaximized,
        isMinimized: false,
      },
    }));
    focusWindow(id);
  }, [isSplitScreen, focusWindow]);

  const toggleSplitScreen = useCallback(() => {
    setIsSplitScreen((prev) => {
      const next = !prev;
      if (next) {
        setWindows((curr) => ({
          ...curr,
          ugc: {
            ...curr.ugc,
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: 15,
          },
          cm: {
            ...curr.cm,
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: 16,
          },
        }));
        setActiveWindowId('cm');
      }
      return next;
    });
  }, []);

  const setSplitScreen = useCallback((active: boolean) => {
    if (active) {
      setWindows((curr) => ({
        ...curr,
        ugc: {
          ...curr.ugc,
          isOpen: true,
          isMinimized: false,
          isMaximized: false,
        },
        cm: {
          ...curr.cm,
          isOpen: true,
          isMinimized: false,
          isMaximized: false,
        },
      }));
    }
    setIsSplitScreen(active);
  }, []);

  const value = useMemo(
    () => ({
      windows,
      activeWindowId,
      isSplitScreen,
      isStartMenuOpen,
      openWindow,
      closeWindow,
      minimizeWindow,
      restoreWindow,
      toggleMaximizeWindow,
      focusWindow,
      toggleSplitScreen,
      setSplitScreen,
      toggleStartMenu,
      closeStartMenu,
    }),
    [
      windows,
      activeWindowId,
      isSplitScreen,
      isStartMenuOpen,
      openWindow,
      closeWindow,
      minimizeWindow,
      restoreWindow,
      toggleMaximizeWindow,
      focusWindow,
      toggleSplitScreen,
      setSplitScreen,
      toggleStartMenu,
      closeStartMenu,
    ]
  );

  return <WindowManagerContext.Provider value={value}>{children}</WindowManagerContext.Provider>;
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within a WindowManagerProvider');
  }
  return context;
};
