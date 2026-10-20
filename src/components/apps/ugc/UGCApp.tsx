import React from 'react';
import { UGCHero } from './UGCHero';
import { CircularPhotoCarousel } from './CircularPhotoCarousel';
import { UGCVideoGallery } from './UGCVideoGallery';
import { UGCWorkflow } from './UGCWorkflow';
import { UGCPackages } from './UGCPackages';
import { MessageCircle, Mail, Code2, ExternalLink } from 'lucide-react';
import { InstagramIcon, TikTokIcon } from '../../common/BrandIcons';

export const UGCApp: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-full bg-[#FBF8EF] text-slate-900 selection:bg-ugc-pink selection:text-white ugc-scroll">
      {/* Hero Section with Sofia's Artwork + Compact Creator Profile Specs Card */}
      <UGCHero 
        onExploreGallery={() => scrollToSection('ugc-gallery')}
        onOpenQuote={() => scrollToSection('ugc-packages')}
        onExploreStats={() => scrollToSection('ugc-stats-grid')}
      />

      {/* 🧭 Sticky Quick-Nav Sub-Bar for Direct Access */}
      <div className="sticky top-0 z-30 bg-[#FBF8EF]/95 backdrop-blur-md border-y-2 border-black/15 px-3 py-2 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2.5">
          <button
            onClick={() => scrollToSection('ugc-photo-carousel')}
            className="px-3 py-1 rounded-full bg-white hover:bg-ugc-yellow border border-black font-chunky text-[11px] text-slate-800 flex items-center gap-1 whitespace-nowrap shadow-sm transition-transform active:scale-95 cursor-pointer"
          >
            <span>📸 Sesiones de Fotos</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-gallery')}
            className="px-3 py-1 rounded-full bg-white hover:bg-ugc-pink hover:text-white border border-black font-chunky text-[11px] text-slate-800 flex items-center gap-1 whitespace-nowrap shadow-sm transition-transform active:scale-95 cursor-pointer"
          >
            <span>🎬 Videos UGC</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-workflow')}
            className="px-3 py-1 rounded-full bg-white hover:bg-ugc-blue border border-black font-chunky text-[11px] text-slate-800 flex items-center gap-1 whitespace-nowrap shadow-sm transition-transform active:scale-95 cursor-pointer"
          >
            <span>✨ Cómo Trabajo</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-packages')}
            className="px-3 py-1 rounded-full bg-ugc-yellow hover:bg-yellow-300 border border-black font-chunky text-[11px] text-slate-900 flex items-center gap-1 whitespace-nowrap shadow-sticker transition-transform active:scale-95 cursor-pointer"
          >
            <span>💰 Tarifas & Planes</span>
          </button>
        </div>
      </div>

      {/* 📸 Circular 3D Photo Carousel (React Bits Style) */}
      <CircularPhotoCarousel />

      {/* Video Gallery (Vertical 9:16 Mockups in Brand Colors) */}
      <UGCVideoGallery />

      {/* 🚀 Cómo Trabajo: Proceso en 4 Pasos + Beneficios (Compacto & Interactivo) */}
      <UGCWorkflow />

      {/* Packages & Pricing */}
      <UGCPackages />

      {/* Mini Footer styled in Brand Colors */}
      <footer className="py-12 px-6 border-t-2 border-slate-900/10 bg-white text-center text-xs text-slate-600">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-chunky text-lg text-ugc-pink">Sofía</span>
            <span className="font-script text-xl text-ugc-yellow -ml-1">Cruz</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-widest pl-2">
              · Portafolio UGC
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a 
              href="https://wa.me/573023399168?text=Hola%20Sof%C3%ADa,%20quiero%20cotizar%20un%20proyecto%20UGC" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-ugc-yellow border border-black text-slate-900 font-bold hover:bg-yellow-300 transition-colors flex items-center gap-1.5 shadow-sm text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-ugc-pink" />
              <span>3023399168</span>
            </a>
            <a 
              href="https://www.instagram.com/sofiacruz0?rpxt=eGo2ODZtbXU2dWM0" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-ugc-blue border border-black text-slate-900 font-bold hover:bg-sky-200 transition-colors flex items-center gap-1.5 shadow-sm text-xs"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-ugc-pink" />
              <span>@sofiacruz0</span>
            </a>
            <a 
              href="https://www.tiktok.com/@sofiacruzve?_r=1&_t=ZS-9AisJbpLF0n" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-slate-900 text-white border border-black font-bold hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-sm text-xs"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-ugc-yellow" />
              <span>@sofiacruzve</span>
            </a>
            <a 
              href="mailto:anasofiacruzvega@gmail.com" 
              className="px-3 py-1.5 rounded-full bg-white border border-black text-slate-900 font-bold hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-sm text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-ugc-pink" />
              <span>anasofiacruzvega@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-4 border-t border-slate-100 gap-3">
            <p className="text-[11px] text-slate-500 font-medium">
              © 2026 Sofía Cruz UGC · Todos los derechos reservados.
            </p>
            <a
              href="https://visionwebcl.pages.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-mono text-[10px] font-bold transition-transform hover:scale-105 shadow-sm group cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-ugc-yellow" />
              <span>Desarrollado por <strong className="text-ugc-pink group-hover:underline">Vision Web</strong></span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
