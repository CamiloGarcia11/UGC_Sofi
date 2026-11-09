import React from 'react';
import { UGCHero } from './UGCHero';
import { UGCWhatIDo } from './UGCWhatIDo';
import { UGCBrands } from './UGCBrands';
import { UGCStats } from './UGCStats';
import { UGCVideoSection } from './UGCVideoSection';
import { CircularPhotoCarousel } from './CircularPhotoCarousel';
import { UGCPackages } from './UGCPackages';
import { UGCBusinessAlliances } from './UGCBusinessAlliances';
import { UGCWhyChooseMe } from './UGCWhyChooseMe';
import { UGCContactFooter } from './UGCContactFooter';

export const UGCApp: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-full bg-[#FBF8EF] text-slate-900 selection:bg-ugc-pink selection:text-white ugc-scroll font-sans">
      
      {/* 1. PORTADA MEDIA KIT 2026 & SOBRE MÍ (PÁGINAS 1 Y 2 DEL CANVA) */}
      <div id="ugc-hero">
        <UGCHero 
          onExploreGallery={() => scrollToSection('ugc-gallery')}
          onOpenQuote={() => scrollToSection('ugc-packages')}
          onExploreStats={() => scrollToSection('ugc-stats')}
        />
      </div>

      {/* 🧭 Sticky Quick-Nav Sub-Bar para Acceso Rápido y Cómodo */}
      <div className="sticky top-0 z-30 bg-[#FBF8EF]/95 backdrop-blur-md border-y-2 border-black/15 px-3 py-2 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-5xl mx-auto flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2">
          <button
            onClick={() => scrollToSection('ugc-hero')}
            className="px-3 py-1 rounded-full bg-white hover:bg-ugc-yellow border border-black font-chunky text-[11px] text-slate-800 flex items-center gap-1 whitespace-nowrap shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>🌸 Sobre Mí</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-what-i-do')}
            className="px-3 py-1 rounded-full bg-white hover:bg-ugc-yellow border border-black font-chunky text-[11px] text-slate-800 flex items-center gap-1 whitespace-nowrap shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>💡 Lo Que Hago</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-brands')}
            className="px-3 py-1 rounded-full bg-white hover:bg-ugc-yellow border border-black font-chunky text-[11px] text-slate-800 flex items-center gap-1 whitespace-nowrap shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>🏷️ Marcas</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-stats')}
            className="px-3 py-1 rounded-full bg-white hover:bg-ugc-yellow border border-black font-chunky text-[11px] text-slate-800 flex items-center gap-1 whitespace-nowrap shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>📊 Alcance</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-gallery')}
            className="px-3 py-1 rounded-full bg-ugc-pink hover:bg-ugc-berry text-white border border-black font-chunky text-[11px] flex items-center gap-1 whitespace-nowrap shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>🎬 Videos & Categorías</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-photo-carousel')}
            className="px-3 py-1 rounded-full bg-white hover:bg-ugc-yellow border border-black font-chunky text-[11px] text-slate-800 flex items-center gap-1 whitespace-nowrap shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>📸 Fotos</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-packages')}
            className="px-3 py-1 rounded-full bg-ugc-yellow hover:bg-yellow-300 text-slate-900 border border-black font-chunky text-[11px] flex items-center gap-1 whitespace-nowrap shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>💰 Tarifas</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-alliances')}
            className="px-3 py-1 rounded-full bg-white hover:bg-ugc-yellow border border-black font-chunky text-[11px] text-slate-800 flex items-center gap-1 whitespace-nowrap shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>🤝 Alianzas</span>
          </button>
          <button
            onClick={() => scrollToSection('ugc-contact')}
            className="px-3 py-1 rounded-full bg-slate-900 text-white hover:bg-slate-800 border border-black font-chunky text-[11px] flex items-center gap-1 whitespace-nowrap shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>💬 Contacto</span>
          </button>
        </div>
      </div>

      {/* 2. LO QUE HAGO (PÁGINA 3 DEL CANVA) */}
      <UGCWhatIDo />

      {/* 3. MARCAS CON LAS QUE HE TRABAJADO (PÁGINAS 4, 5 Y 6 DEL CANVA) */}
      <UGCBrands />

      {/* 4. ALCANCE DE VIDEOS UGC (PÁGINA 7 DEL CANVA) */}
      <UGCStats />

      {/* 5. VIDEOS DESTACADOS + CATEGORÍAS DE VIDEOS CON SUBPÁGINAS (PÁGINA 8 Y 9-18 DEL CANVA) */}
      <UGCVideoSection />

      {/* 6. SESIONES FOTOGRÁFICAS DE SOFÍA (CARRUSEL INTERACTIVO) */}
      <div id="ugc-photo-carousel">
        <CircularPhotoCarousel />
      </div>

      {/* 7. MIS PRECIOS & TARIFAS (PÁGINAS 19 Y 20 DEL CANVA) */}
      <UGCPackages />

      {/* 8. ALIANZAS COMERCIALES Y EMPRESARIALES (PÁGINA 21 DEL CANVA) */}
      <UGCBusinessAlliances />

      {/* 9. ¿POR QUÉ ELEGIRME COMO CREADORA UGC? (PÁGINA 22 DEL CANVA) */}
      <UGCWhyChooseMe />

      {/* 10. TRABAJEMOS JUNTOS & CANALES DIRECTOS (PÁGINA 23 DEL CANVA) */}
      <UGCContactFooter />

    </div>
  );
};
