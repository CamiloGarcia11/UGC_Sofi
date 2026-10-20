export type WindowId = 'notepad' | 'ugc' | 'cm' | 'contact';

export interface WindowState {
  id: WindowId;
  title: string;
  subtitle: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  url: string;
  icon: string;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number | string; height: number | string };
}

export interface WindowManagerContextType {
  windows: Record<WindowId, WindowState>;
  activeWindowId: WindowId | null;
  isSplitScreen: boolean;
  isStartMenuOpen: boolean;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  restoreWindow: (id: WindowId) => void;
  toggleMaximizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  toggleSplitScreen: () => void;
  setSplitScreen: (active: boolean) => void;
  toggleStartMenu: () => void;
  closeStartMenu: () => void;
}
