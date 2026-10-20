import React from 'react';
import { CMHero } from './CMHero';
import { CMStrategyHub } from './CMStrategyHub';
import { CMPlans } from './CMPlans';
import { Mail, MessageCircle, Code2, ExternalLink } from 'lucide-react';
import { InstagramIcon, TikTokIcon } from '../../common/BrandIcons';

export const CMApp: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-full bg-[#F8F5E6] text-slate-900 selection:bg-cm-burgundy selection:text-white cm-scroll font-sans">
      {/* Executive Hero with Sofía Cruz CM Logo + Compact Strategist Profile Specs Card */}
      <CMHero 
        onExploreServices={() => scrollToSection('cm-strategy-hub')}
        onExploreMethodology={() => scrollToSection('cm-strategy-hub')}
        onBookAudit={() => scrollToSection('cm-plans')}
      />

      {/* 🧭 Sticky Quick-Nav Sub-Bar for Direct Access */}
      <div className="sticky top-0 z-30 bg-[#F8F5E6]/95 backdrop-blur-md border-y-2 border-cm-chocolate/15 px-3 py-2 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2.5">
          <button
            onClick={() => scrollToSection('cm-strategy-hub')}
            className="px-3 py-1 rounded-full bg-white hover:bg-cm-blue border border-cm-chocolate font-editorialSerif font-bold text-[11px] text-cm-chocolate flex items-center gap-1 whitespace-nowrap shadow-sm transition-transform active:scale-95 cursor-pointer"
          >
            <span>💼 Servicios & Metodología</span>
          </button>
          <button
            onClick={() => scrollToSection('cm-plans')}
            className="px-3 py-1 rounded-full bg-cm-burgundy hover:bg-[#6e1227] text-white border border-cm-chocolate font-editorialSerif font-bold text-[11px] flex items-center gap-1 whitespace-nowrap shadow-sticker-burgundy transition-transform active:scale-95 cursor-pointer"
          >
            <span>💰 Planes Mensuales (COP)</span>
          </button>
          <button
            onClick={() => scrollToSection('cm-terms')}
            className="px-3 py-1 rounded-full bg-white hover:bg-[#FAF5EA] border border-cm-chocolate font-editorialSerif font-bold text-[11px] text-cm-chocolate flex items-center gap-1 whitespace-nowrap shadow-sm transition-transform active:scale-95 cursor-pointer"
          >
            <span>📄 Media Kit & Términos</span>
          </button>
        </div>
      </div>

      {/* Structured Services & 4-Phase Work Methodology (Compact & Interactive) */}
      <CMStrategyHub />

      {/* Monthly Management Plans & Booking Form */}
      <CMPlans />

      {/* Corporate Internal Footer */}
      <footer className="py-12 px-6 border-t-2 border-cm-chocolate/10 bg-white text-center text-xs text-slate-600">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-editorialSerif font-bold text-lg text-cm-burgundy">Sofía</span>
            <span className="font-tanDisplay text-lg text-cm-chocolate -ml-1">Cruz</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-widest pl-2">
              · SMM Strategy & Agency
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a 
              href="https://wa.me/573023399168?text=Hola%20Sof%C3%ADa,%20me%20gustar%C3%ADa%20cotizar%20servicios%20de%20Community%20Manager" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-cm-yellow border border-cm-chocolate text-cm-chocolate font-bold hover:bg-yellow-300 transition-colors flex items-center gap-1.5 shadow-sm text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-cm-burgundy" />
              <span>3023399168</span>
            </a>
            <a 
              href="https://www.instagram.com/sofiacruz0?rpxt=eGo2ODZtbXU2dWM0" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-cm-blue border border-cm-chocolate text-cm-chocolate font-bold hover:bg-sky-200 transition-colors flex items-center gap-1.5 shadow-sm text-xs"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-cm-burgundy" />
              <span>@sofiacruz0</span>
            </a>
            <a 
              href="https://www.tiktok.com/@sofiacruzve?_r=1&_t=ZS-9AisJbpLF0n" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-slate-900 text-white border border-cm-chocolate font-bold hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-sm text-xs"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-cm-yellow" />
              <span>@sofiacruzve</span>
            </a>
            <a 
              href="mailto:anasofiacruzvega@gmail.com" 
              className="px-3 py-1.5 rounded-full bg-white border border-cm-chocolate text-cm-chocolate font-bold hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-sm text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-cm-burgundy" />
              <span>anasofiacruzvega@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-4 border-t border-cm-chocolate/10 gap-3">
            <p className="text-[11px] text-slate-500 font-medium font-mono">
              © 2026 Sofía Cruz · Confidencialidad y NDA garantizados.
            </p>
            <a
              href="https://visionwebcl.pages.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cm-chocolate hover:bg-[#2b1c18] text-white font-mono text-[10px] font-bold transition-transform hover:scale-105 shadow-sm group cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-cm-yellow" />
              <span>Desarrollado por <strong className="text-cm-yellow group-hover:underline">Vision Web</strong></span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
