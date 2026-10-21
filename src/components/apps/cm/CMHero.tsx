import React, { useState } from 'react';
import { 
  Target, 
  Clock,
  ShieldCheck, 
  CheckCircle,
  Calendar,
  Layers,
  Award,
  Maximize2,
  X,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import sofiaPresentationImg from '../../../assets/sofia-cm-presentation.png';

interface CMHeroProps {
  onExploreServices: () => void;
  onExploreMethodology: () => void;
  onBookAudit: () => void;
}

const CM_PROFILE_ROWS = [
  { label: "INDUSTRIAS", value: "Tiendas Online, Marcas de Moda, Joyería, Belleza y Negocios" },
  { label: "CÓMO TRABAJAMOS", value: "Cercano, elegante y pensado para conseguir clientes y ventas reales" },
  { label: "QUÉ SE PUBLICA", value: "Carruseles informativos, videos cortos (Reels) y plan mensual ordenado" },
  { label: "IDIOMAS", value: "Español (Nativo) · Inglés (Fluido para atender clientes internacionales)" },
  { label: "PLANES DISPONIBLES", value: "Gestión completa de redes mes a mes, revisión de cuenta y asesorías 1 a 1" },
  { label: "DISPONIBILIDAD", value: "Trabajo 100% online · Atención exclusiva a máximo 5 marcas por mes" },
  { label: "PÚBLICO OBJETIVO", value: "Seguidores leales y personas interesadas listas para comprarte" },
  { label: "REDES SOCIALES", value: "Instagram, TikTok, LinkedIn y anuncios pagos en Meta" },
  { label: "LO QUE NOS DIFERENCIA", value: "Respondemos tus mensajes en menos de 1 hora y entregamos reportes claros" },
];

export const CMHero: React.FC<CMHeroProps> = ({ 
  onExploreServices, 
  onExploreMethodology, 
  onBookAudit 
}) => {
  const [isCutoutZoomed, setIsCutoutZoomed] = useState(false);
  return (
    <section className="relative pt-6 pb-12 px-4 sm:px-6 md:px-8 bg-[#F8F5E6] text-slate-900 overflow-hidden font-sans border-b-2 border-cm-chocolate/10">
      
      {/* Background Decorative Stars */}
      <div className="absolute top-10 right-14 text-cm-burgundy text-3xl select-none pointer-events-none opacity-40">
        ★
      </div>
      <div className="absolute top-36 left-8 text-cm-blue text-4xl select-none pointer-events-none opacity-60">
        ★
      </div>
      <div className="absolute bottom-16 right-1/4 text-cm-chocolate text-2xl select-none pointer-events-none opacity-30">
        ★
      </div>

      <div className="max-w-6xl mx-auto space-y-8">

        {/* 1. TOP BRAND HEADER: LOGO & TAGS */}
        <div className="flex flex-col items-center justify-center text-center pt-1">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cm-blue/30 border border-cm-blue text-cm-chocolate text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5">
            <span>GESTIÓN DE REDES SOCIALES · COMMUNITY MANAGER</span>
          </div>

          <div className="flex items-baseline justify-center gap-2.5 sm:gap-4 my-1 sm:my-2">
            <h1 className="font-editorialSerif font-bold text-4xl sm:text-6xl md:text-7xl text-cm-burgundy tracking-tight drop-shadow-[2px_2px_0px_#B4D9F4] leading-none select-none">
              Sofía
            </h1>
            <span className="font-tanDisplay italic font-normal text-3xl sm:text-5xl md:text-6xl text-cm-chocolate tracking-normal select-none inline-block">
              Cruz
            </span>
          </div>

          {/* Official CM Palette Colorway Blocks Bar */}
          <div className="flex items-center gap-1.5 mt-3 p-1 bg-white rounded-full border border-cm-chocolate/20 shadow-sm">
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cm-burgundy text-white font-editorialSerif text-[10px] font-bold">
              <span>Sofía</span>
              <span className="font-tanDisplay text-cm-blue text-xs font-normal">Cruz</span>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-cm-chocolate/10 text-cm-blue font-editorialSerif text-[10px] font-bold">
              <span>Sofía</span>
              <span className="font-tanDisplay text-cm-burgundy text-xs font-normal">Cruz</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cm-blue text-cm-burgundy font-editorialSerif text-[10px] font-bold">
              <span>Sofía</span>
              <span className="font-tanDisplay text-white text-xs font-normal">Cruz</span>
            </div>
          </div>
        </div>

        {/* 2. BALANCED EXECUTIVE HERO: SOFÍA'S EDITORIAL PRESENTATION (LEFT) + STRATEGIC DOSSIER & PITCH (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2">
          
          {/* LEFT: SOFÍA'S OFFICIAL CM & UGC PRESENTATION ARTWORK */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center my-auto">
            <div 
              onClick={() => setIsCutoutZoomed(true)}
              className="relative w-full max-w-[370px] sm:max-w-[420px] pt-3 pb-1 group cursor-pointer"
              title="Toca para ver el afiche de presentación en alta resolución"
            >
              {/* Top Washi Tape Sticker */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <div className="px-4 py-1 bg-cm-yellow border-2 border-cm-chocolate text-cm-chocolate text-[10px] font-mono font-bold tracking-widest uppercase transform -rotate-1 shadow-sm rounded-md whitespace-nowrap flex items-center gap-1.5">
                  <span>✨ PRESENTACIÓN OFICIAL · CM & UGC</span>
                </div>
              </div>

              {/* Editorial Presentation Card Frame */}
              <div className="relative w-full bg-gradient-to-b from-[#FBF8EF] via-[#FAF5EA] to-[#F3ECDD] rounded-[32px] border-3 border-cm-chocolate p-4 sm:p-5 shadow-editorial hover:-translate-y-1 hover:shadow-[10px_10px_0px_#3C2722] transition-all duration-300 select-none overflow-hidden flex flex-col justify-between">
                
                {/* Inner Border Line */}
                <div className="absolute inset-2.5 rounded-[24px] border border-cm-chocolate/15 pointer-events-none" />

                {/* Subtle Geometric Texture Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#3C2722_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-[0.035] pointer-events-none" />

                {/* Decorative Stars */}
                <div className="absolute top-3.5 left-4 z-10 text-cm-burgundy text-base select-none pointer-events-none">
                  ★
                </div>
                <div className="absolute top-3.5 right-4 z-10 text-cm-chocolate/35 text-base select-none pointer-events-none">
                  ★
                </div>

                {/* Floating Availability Pill */}
                <div className="absolute bottom-14 right-3 z-20 bg-cm-yellow border-2 border-cm-chocolate px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 transform rotate-2 group-hover:rotate-0 transition-transform">
                  <CheckCircle className="w-3 h-3 text-cm-burgundy" />
                  <span className="font-mono text-[9px] font-bold text-cm-chocolate uppercase">
                    Estratega Activa
                  </span>
                </div>

                {/* Center: Sofía's Presentation Poster Collage Artwork */}
                <div className="relative w-full flex items-center justify-center pt-4 pb-2 z-10">
                  <img
                    src={sofiaPresentationImg}
                    alt="Sofía Cruz - Community Manager y Creadora de Contenido UGC"
                    className="w-full max-h-[440px] sm:max-h-[470px] object-contain filter drop-shadow-[0_12px_24px_rgba(60,39,34,0.18)] transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded-2xl">
                    <span className="px-3.5 py-1.5 rounded-full bg-white border-2 border-cm-chocolate font-editorialSerif font-bold text-xs text-cm-chocolate shadow-sticker-burgundy flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-cm-burgundy" />
                      <span>Ver en pantalla completa</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Card Footer Ribbon */}
                <div className="w-full pt-3 border-t-2 border-cm-chocolate/15 flex items-center justify-between text-xs relative z-10">
                  <div className="flex items-center gap-1">
                    <span className="font-editorialSerif font-bold text-cm-burgundy text-sm">Sofía</span>
                    <span className="font-tanDisplay text-cm-chocolate text-sm -ml-0.5">Cruz</span>
                    <span className="text-[10px] text-slate-500 font-mono pl-1 hidden sm:inline">· Afiche de Identidad</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cm-burgundy text-white font-mono text-[9px] font-bold shadow-sm tracking-wide">
                    VERIFICADA
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT: STRATEGIC PROPOSITION, KPIS & FICHA DE ESTRATEGA */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Header Proposition */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-cm-burgundy text-white text-[10px] font-bold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cm-yellow animate-pulse" />
                <span className="uppercase tracking-wider">Estrategia y Crecimiento de Redes Sociales</span>
              </div>

              <h2 className="font-editorialSerif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cm-chocolate tracking-tight leading-[1.15]">
                Hacemos que tus redes se vean profesionales y <span className="text-cm-burgundy italic">conecten con tu público</span>
              </h2>
            </div>

            {/* Pilares de Compromiso y Calidad de Servicio */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-white border-2 border-cm-chocolate shadow-sticker-burgundy">
                <div className="flex items-center gap-1 text-cm-burgundy font-editorialSerif font-bold text-base sm:text-lg">
                  <Target className="w-3.5 h-3.5 shrink-0" />
                  <span>100%</span>
                </div>
                <span className="text-[10px] text-slate-700 block font-bold leading-tight mt-0.5">A tu Medida</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border-2 border-cm-chocolate shadow-sticker-burgundy">
                <div className="flex items-center gap-1 text-cm-chocolate font-editorialSerif font-bold text-base sm:text-lg">
                  <Clock className="w-3.5 h-3.5 shrink-0 text-cm-burgundy" />
                  <span>&lt; 1 Hora</span>
                </div>
                <span className="text-[10px] text-slate-700 block font-bold leading-tight mt-0.5">Atención Rápida</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border-2 border-cm-chocolate shadow-sticker-burgundy">
                <div className="flex items-center gap-1 text-emerald-700 font-editorialSerif font-bold text-base sm:text-lg">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>30 Días</span>
                </div>
                <span className="text-[10px] text-slate-700 block font-bold leading-tight mt-0.5">Sin Improvisar</span>
              </div>
            </div>

            {/* Ficha de Estratega Card */}
            <div className="relative w-full bg-white rounded-2xl border-2 border-cm-chocolate shadow-[6px_6px_0px_#3C2722] p-4 sm:p-5 transition-all">
              <div className="flex items-center justify-between pb-2.5 border-b-2 border-cm-chocolate/15">
                <div>
                  <h3 className="font-editorialSerif text-lg sm:text-xl text-cm-chocolate tracking-tight leading-none font-bold">
                    PERFIL DE <span className="text-cm-burgundy">ESTRATEGA & CM</span>
                  </h3>
                </div>

                <div className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cm-blue border border-cm-chocolate text-[10px] font-mono font-bold text-cm-chocolate">
                  <Award className="w-3 h-3 text-cm-burgundy" />
                  <span>MÁX. 5 MARCAS</span>
                </div>
              </div>

              <div className="divide-y divide-cm-chocolate/10 text-xs mt-1">
                {CM_PROFILE_ROWS.map((row, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-2 py-1.5 sm:py-2 items-baseline hover:bg-cm-cream/40 px-1.5 rounded transition-colors"
                  >
                    <div className="sm:col-span-4 flex items-center gap-1">
                      <span className="text-cm-burgundy text-[10px]">◆</span>
                      <span className="font-editorialSerif font-bold text-[11px] text-cm-chocolate tracking-wide uppercase">
                        {row.label}
                      </span>
                    </div>

                    <div className="sm:col-span-8">
                      <span className="font-sans text-[11px] sm:text-xs text-slate-800 font-medium">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-2.5 border-t-2 border-dashed border-cm-chocolate/15 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-700 font-medium">
                  <ShieldCheck className="w-3 h-3 text-emerald-700" />
                  <span>Acuerdos de confidencialidad y no divulgación (NDA)</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="font-editorialSerif font-bold text-cm-burgundy text-xs">Sofía</span>
                  <span className="font-tanDisplay text-cm-chocolate text-xs -ml-0.5">Cruz</span>
                  <span className="text-[9px] font-mono text-slate-400 pl-1 uppercase">
                    · Verified Strategist
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                onClick={onBookAudit}
                className="px-4 py-2.5 rounded-xl bg-cm-burgundy hover:bg-[#6e1227] text-white font-bold text-xs uppercase tracking-wider border-2 border-cm-chocolate shadow-editorial flex items-center gap-1.5 cursor-pointer transition-transform active:translate-x-0.5 active:translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Revisar mi Cuenta Gratis</span>
              </button>

              <button
                onClick={onExploreServices}
                className="px-3.5 py-2.5 rounded-xl bg-cm-blue hover:bg-sky-300 text-cm-chocolate font-bold text-xs uppercase tracking-wider border-2 border-cm-chocolate shadow-editorial flex items-center gap-1.5 cursor-pointer transition-transform active:translate-x-0.5 active:translate-y-0.5"
              >
                <Layers className="w-3.5 h-3.5 text-cm-burgundy" />
                <span>Ver Servicios</span>
              </button>

              <button
                onClick={onExploreMethodology}
                className="px-3 py-2 rounded-xl hover:bg-white text-cm-chocolate text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-cm-chocolate/20"
              >
                <Award className="w-3.5 h-3.5 text-cm-burgundy" />
                <span>Cómo Trabajamos</span>
              </button>
            </div>

            {/* Guarantee Note */}
            <div className="flex items-center gap-2 text-[11px] text-slate-600 font-medium pt-0.5">
              <span className="flex items-center gap-1 text-emerald-800 font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700" /> Atención dedicada a tu negocio
              </span>
              <span>•</span>
              <span>Total privacidad y confidencialidad</span>
            </div>

          </div>

        </div>

      </div>

      {/* 🖼️ MODAL LIGHTBOX: VER PRESENTACIÓN EN TAMAÑO COMPLETO */}
      <AnimatePresence>
        {isCutoutZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsCutoutZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative max-w-lg w-full bg-[#FAF5EA] rounded-3xl border-4 border-cm-chocolate shadow-[12px_12px_0px_#3C2722] p-5 sm:p-6 flex flex-col items-center overflow-auto text-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsCutoutZoomed(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cm-burgundy text-white border-2 border-cm-chocolate hover:bg-[#6e1227] transition-colors shadow-sm cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full flex items-center justify-center pt-4 pb-2">
                <img
                  src={sofiaPresentationImg}
                  alt="Afiche Oficial - Sofía Cruz Community Manager y Creadora UGC"
                  className="w-full max-h-[72vh] object-contain select-none relative z-10 filter drop-shadow-[0_16px_32px_rgba(60,39,34,0.25)] rounded-xl"
                />
              </div>

              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t-2 border-cm-chocolate/15 mt-3 text-xs">
                <div className="text-center sm:text-left">
                  <span className="font-editorialSerif font-bold text-cm-chocolate text-sm block">
                    Sofía Cruz · Community Manager & Creadora UGC
                  </span>
                  <span className="text-[10px] text-slate-600 font-mono">
                    Estrategia, diseño y crecimiento comercial en Instagram & TikTok
                  </span>
                </div>

                <a
                  href="https://wa.me/573023399168?text=Hola%20Sof%C3%ADa,%20me%20gustar%C3%ADa%20agendar%20una%20asesor%C3%ADa%20gratuita%20para%20mis%20redes%20sociales"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-cm-burgundy text-white font-bold text-xs uppercase tracking-wider border-2 border-cm-chocolate shadow-sm flex items-center gap-1.5 hover:bg-[#6e1227] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Escribir al WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
