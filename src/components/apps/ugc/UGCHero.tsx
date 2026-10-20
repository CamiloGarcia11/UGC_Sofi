import React, { useState } from 'react';
import { 
  ArrowRight,
  Maximize2,
  X,
  Sparkles,
  Camera,
  CheckCircle2,
  TrendingUp,
  Eye,
  Users,
  Award,
  MessageCircle,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import sofiaPresentationImg from '../../../assets/sofia-presentacion.png';
import { InstagramIcon, TikTokIcon } from '../../common/BrandIcons';

interface UGCHeroProps {
  onExploreGallery: () => void;
  onOpenQuote: () => void;
  onExploreStats?: () => void;
}

const UGC_PROFILE_ROWS = [
  { label: "NICHOS PRINCIPALES", value: "Belleza, Cuidado Facial (Skincare), Moda, Estilo de Vida & Gadgets" },
  { label: "MÉTRICAS TIKTOK", value: "+158.8K Reproducciones · 5.8K Likes · 723 Compartidos · Picos de 15.6K vistas" },
  { label: "CÓMO SE SIENTE", value: "Cercano, natural y honesto (como el consejo de una amiga, cero pose de anuncio)" },
  { label: "TIPOS DE VIDEO", value: "Videos verticales para celular (Reels y TikTok), probando tu producto y fotos reales" },
  { label: "IDIOMAS", value: "Español (Nativo) · Inglés (Fluido para marcas de cualquier país)" },
  { label: "FORMAS DE TRABAJO", value: "Videos para tus redes, menciones en mi cuenta y videos listos para tus anuncios" },
  { label: "ENTREGAS & ENVÍOS", value: "Entrega súper rápida (3 a 5 días) · Recibo productos de cualquier ciudad o país" },
  { label: "A QUIÉN LE LLEGA", value: "Mujeres de 18 a 35 años que compran seguido por internet" },
  { label: "DÓNDE SE PUBLICA", value: "TikTok, Instagram Reels, YouTube Shorts y anuncios pagos en redes" },
  { label: "EL SECRETO DEL VIDEO", value: "Los primeros 3 segundos atrapan a la gente para que no pase de largo y quiera comprar" },
];

// 📎 Clip metálico de carnet / binder clip con asas plateadas realistas
const BinderClipSVG: React.FC<{ className?: string }> = ({ className = "w-14 h-12" }) => (
  <svg 
    viewBox="0 0 60 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ugcSilverHandle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#CBD5E1" />
        <stop offset="35%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#64748B" />
      </linearGradient>
      <linearGradient id="ugcClampBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="40%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <filter id="ugcClipShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.45" />
      </filter>
    </defs>

    {/* Asa de alambre plateado metálico */}
    <path 
      d="M18 24V10C18 5.58 21.58 2 26 2H34C38.42 2 42 5.58 42 10V24" 
      stroke="url(#ugcSilverHandle)" 
      strokeWidth="2.8" 
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#ugcClipShadow)"
    />

    {/* Detalle interno de reflejo del alambre */}
    <path 
      d="M22 24V12C22 9.79 23.79 8 26 8H34C36.21 8 38 9.79 38 12V24" 
      stroke="url(#ugcSilverHandle)" 
      strokeWidth="1.8" 
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.85"
    />

    {/* Base de la pinza metálica oscura que aprieta el carnet */}
    <rect 
      x="10" 
      y="22" 
      width="40" 
      height="18" 
      rx="3" 
      fill="url(#ugcClampBody)" 
      stroke="#0F172A" 
      strokeWidth="1.5"
      filter="url(#ugcClipShadow)"
    />

    {/* Brillo superior de la pinza */}
    <rect 
      x="12" 
      y="23" 
      width="36" 
      height="1.5" 
      rx="0.75" 
      fill="#94A3B8" 
      opacity="0.75" 
    />

    {/* Labio inferior del clip */}
    <path 
      d="M10 38C15 40 45 40 50 38V40H10V38Z" 
      fill="#0F172A" 
    />
  </svg>
);

// 🏷️ Código de barras auténtico de carnet / ID badge
const BarcodeSVG: React.FC<{ className?: string }> = ({ className = "w-full h-7" }) => (
  <svg 
    viewBox="0 0 140 28" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true"
  >
    <rect x="0" y="0" width="2" height="28" />
    <rect x="4" y="0" width="1.5" height="28" />
    <rect x="8" y="0" width="3" height="28" />
    <rect x="13" y="0" width="1" height="28" />
    <rect x="16" y="0" width="2" height="28" />
    <rect x="20" y="0" width="4" height="28" />
    <rect x="26" y="0" width="1" height="28" />
    <rect x="29" y="0" width="2.5" height="28" />
    <rect x="34" y="0" width="1" height="28" />
    <rect x="37" y="0" width="3.5" height="28" />
    <rect x="43" y="0" width="1.5" height="28" />
    <rect x="47" y="0" width="2" height="28" />
    <rect x="51" y="0" width="3" height="28" />
    <rect x="56" y="0" width="1" height="28" />
    <rect x="59" y="0" width="2" height="28" />
    <rect x="63" y="0" width="4" height="28" />
    <rect x="69" y="0" width="1" height="28" />
    <rect x="72" y="0" width="2.5" height="28" />
    <rect x="77" y="0" width="3.5" height="28" />
    <rect x="83" y="0" width="1" height="28" />
    <rect x="86" y="0" width="2" height="28" />
    <rect x="90" y="0" width="4" height="28" />
    <rect x="96" y="0" width="1" height="28" />
    <rect x="99" y="0" width="2" height="28" />
    <rect x="103" y="0" width="3" height="28" />
    <rect x="108" y="0" width="1" height="28" />
    <rect x="111" y="0" width="2.5" height="28" />
    <rect x="116" y="0" width="1.5" height="28" />
    <rect x="120" y="0" width="3" height="28" />
    <rect x="125" y="0" width="1" height="28" />
    <rect x="128" y="0" width="2" height="28" />
    <rect x="132" y="0" width="3.5" height="28" />
    <rect x="138" y="0" width="2" height="28" />
  </svg>
);

// ⭐️ Estrella con lunares / polka dots estilo sticker vintage
const PolkaDotStarSVG: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="ugcDotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="2.2" fill="#3C2722" />
      </pattern>
    </defs>
    <polygon 
      points="50,5 64,36 98,38 72,61 80,95 50,76 20,95 28,61 2,38 36,36" 
      fill="#FFFDF7"
      stroke="#3C2722" 
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <polygon 
      points="50,5 64,36 98,38 72,61 80,95 50,76 20,95 28,61 2,38 36,36" 
      fill="url(#ugcDotPattern)"
      stroke="none"
    />
  </svg>
);

// ⭐️ Estrella dorada
const GoldStarSVG: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const UGCHero: React.FC<UGCHeroProps> = ({ onExploreGallery, onOpenQuote, onExploreStats }) => {
  const [isPosterZoomed, setIsPosterZoomed] = useState(false);
  const [posterTab, setPosterTab] = useState<'carnet' | 'poster'>('carnet');

  return (
    <section className="relative pt-6 pb-12 px-4 sm:px-6 md:px-8 bg-[#FBF8EF] text-slate-900 overflow-hidden font-sans">
      
      {/* Background Decorative Doodles */}
      <div className="absolute top-8 left-6 text-ugc-yellow text-3xl select-none pointer-events-none opacity-80">
        ✦
      </div>
      <div className="absolute top-24 right-8 text-ugc-pink text-3xl select-none pointer-events-none opacity-70">
        ✦
      </div>
      <div className="absolute bottom-10 left-12 text-ugc-blue text-4xl select-none pointer-events-none opacity-60">
        ✦
      </div>

      <div className="max-w-6xl mx-auto space-y-8">

        {/* 1. TOP BRAND HEADER: LOGO & TAGS */}
        <div className="flex flex-col items-center justify-center text-center pt-1">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-ugc-blue/40 border border-ugc-blue text-slate-800 text-[10px] font-bold tracking-[0.22em] uppercase mb-1">
            <span>PORTAFOLIO UGC · PRESENTACIÓN OFICIAL</span>
          </div>

          <div className="relative inline-block my-0.5">
            <h1 className="font-chunky text-4xl sm:text-6xl md:text-7xl text-ugc-pink tracking-tight drop-shadow-[2px_3px_0px_#B4D9F4] leading-none select-none">
              Sofía
            </h1>
            <span className="font-script text-3xl sm:text-5xl md:text-6xl text-ugc-yellow absolute -bottom-2.5 sm:-bottom-3.5 -right-4 sm:-right-8 transform -rotate-6 drop-shadow-[1px_2px_0px_#E33B87] select-none">
              Cruz
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-md mt-2.5 font-medium">
            Creadora de Contenido UGC & Estratega Visual · Creando y diseñando marcas desde el 2021.
          </p>

          {/* Brand Palette Colorway Blocks Bar */}
          <div className="flex items-center gap-1.5 mt-3 p-1 bg-white rounded-full border border-slate-200 shadow-sm">
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-ugc-pink text-white font-chunky text-[10px]">
              <span>Sofía</span>
              <span className="font-script text-ugc-yellow text-xs font-normal">Cruz</span>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-ugc-yellow text-ugc-pink font-chunky text-[10px]">
              <span>Sofía</span>
              <span className="font-script text-ugc-pink text-xs font-normal">Cruz</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-ugc-blue text-white font-chunky text-[10px]">
              <span className="text-white">Sofía</span>
              <span className="font-script text-ugc-pink text-xs font-normal">Cruz</span>
            </div>
          </div>

          {/* TikTok Real Stats Quick Badge */}
          {onExploreStats && (
            <button
              onClick={onExploreStats}
              className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-slate-900 text-white font-mono text-[11px] font-bold border-2 border-black shadow-sticker hover:bg-slate-800 transition-all hover:scale-105 cursor-pointer"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-ugc-yellow" />
              <span>Métricas Reales TikTok: <strong className="text-ugc-yellow font-chunky">+158.8K Vistas</strong> · 723 Compartidos</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
            </button>
          )}
        </div>

        {/* 2. BALANCED PRESENTATION HERO: SOFÍA'S CARNET (LEFT) + COMPACT CREATOR PROFILE CARD (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2">
          
          {/* LEFT: CARNET OFICIAL DE CREADORA (ESTILO BADGE / PASS CON CLIP METÁLICO) - CENTRADO VERTICALMENTE */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center my-auto">
            <div 
              onClick={() => {
                setPosterTab('carnet');
                setIsPosterZoomed(true);
              }}
              className="relative w-full max-w-[380px] sm:max-w-[430px] pt-5 pb-1 group cursor-pointer"
              title="Toca para ver el carnet en alta resolución"
            >
              
              {/* 📎 Clip Metálico de Oficina (Binder Clip con asas plateadas superpuestas) */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none drop-shadow-md">
                <BinderClipSVG className="w-13 h-11 sm:w-14 sm:h-12" />
              </div>

              {/* 🪪 Tarjeta del Carnet */}
              <div className="relative w-full bg-[#FAF4E6] rounded-[28px] border-[2.5px] border-[#3C2722] p-4 sm:p-5 shadow-[6px_6px_0px_#3C2722] sm:shadow-[8px_8px_0px_#3C2722] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#3C2722] transition-all duration-300 select-none overflow-hidden">
                
                {/* Marco de línea interior del carnet (borde interno sutil) */}
                <div className="absolute inset-2 sm:inset-2.5 rounded-[22px] border border-[#3C2722]/35 pointer-events-none" />

                {/* Estrella dorada superior izquierda */}
                <div className="absolute top-4 left-4 z-10 text-[#C89B3C]">
                  <GoldStarSVG className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Sticker de estrella con lunares / polka dots entre el texto y la foto */}
                <div className="absolute bottom-5 left-[43%] sm:left-[45%] z-20 pointer-events-none transform -rotate-12 group-hover:rotate-6 transition-transform duration-300">
                  <PolkaDotStarSVG className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-sm" />
                </div>

                {/* Grilla interna del Carnet */}
                <div className="grid grid-cols-12 gap-3 items-center relative z-10 pt-2 sm:pt-3">
                  
                  {/* Columna Izquierda: Tipografía & Firma */}
                  <div className="col-span-7 space-y-1 pl-1">
                    
                    {/* Título Principal en Editorial Serif */}
                    <h3 className="font-editorialSerif font-bold text-2xl sm:text-[28px] text-[#3C2722] tracking-tight leading-[0.95]">
                      CREATIVE<br />PORTFOLIO
                    </h3>

                    {/* Firma manuscrita en Script */}
                    <div className="relative inline-block my-0.5">
                      <span className="font-script text-2xl sm:text-3xl text-[#3C2722] block leading-tight transform -rotate-1">
                        Sofía Cruz
                      </span>
                      {/* Estrella dorada decorativa junto a la firma */}
                      <span className="absolute -top-1 -right-3.5 text-[#C89B3C] text-xs">
                        ★
                      </span>
                    </div>

                    {/* Especialidad de la Creadora */}
                    <p className="font-mono text-[9px] sm:text-[10px] font-bold text-[#5C4033] tracking-[0.16em] uppercase leading-tight pt-0.5">
                      BEAUTY & LIFESTYLE<br />CREATOR
                    </p>

                  </div>

                  {/* Columna Derecha: Foto de Identificación enmarcada + Código de Barras */}
                  <div className="col-span-5 flex flex-col items-center">
                    
                    {/* Marco de Foto con borde sólido */}
                    <div className="w-full aspect-[3/3.8] rounded-xl overflow-hidden border-2 border-[#3C2722] bg-white shadow-sm relative group/photo">
                      <img
                        src={sofiaPresentationImg}
                        alt="Sofía Cruz - Creadora de Contenido UGC"
                        className="w-full h-full object-cover object-[center_38%] transition-transform duration-500 group-hover:scale-105"
                        loading="eager"
                      />

                      {/* Overlay al hacer hover para ver en grande */}
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <Maximize2 className="w-4 h-4 text-white drop-shadow" />
                      </div>
                    </div>

                    {/* Código de barras auténtico debajo de la foto */}
                    <div className="w-full mt-2 pt-0.5 flex flex-col items-center">
                      <BarcodeSVG className="w-full h-5 sm:h-6 text-[#3C2722]" />
                      <span className="font-mono text-[7px] sm:text-[8px] text-[#5C4033] font-bold tracking-widest mt-0.5">
                        SOFÍA-CRUZ-2026
                      </span>
                    </div>

                  </div>

                </div>

              </div>

              {/* Subtítulo interactivo debajo del carnet */}
              <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[10px] font-mono text-slate-500">
                <Sparkles className="w-3 h-3 text-ugc-pink" />
                <span>Carnet Oficial de Sofía · Clic para ampliar</span>
              </div>

            </div>
          </div>

          {/* RIGHT: COMPACT "PERFIL DE CREADORA" CARD (TOTALMENTE EN ESPAÑOL CON GANCHOS) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="relative w-full bg-white rounded-3xl border-3 border-black shadow-[8px_8px_0px_#000000] p-5 sm:p-6 transition-all">
              
              {/* Top Washi Tape Sticker holding the sheet */}
              <div className="absolute -top-3 left-8 z-20">
                <div className="px-4 py-0.5 bg-ugc-yellow/95 border border-black/30 text-[9px] font-mono uppercase tracking-widest text-slate-800 shadow-sm font-bold transform -rotate-1">
                  // SOFÍA CRUZ · FICHA TÉCNICA UGC
                </div>
              </div>

              {/* Header inside the compact sheet */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-900/10">
                <div>
                  <h3 className="font-chunky text-xl sm:text-2xl text-slate-900 tracking-tight leading-none">
                    PERFIL DE <span className="text-ugc-pink drop-shadow-[1px_1px_0px_#FEF49B]">CREADORA</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 font-sans font-medium mt-0.5">
                    Sofía Cruz · Videos auténticos que frenan el scroll y multiplican tus ventas
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-ugc-blue/40 border border-black text-[10px] font-mono font-bold text-slate-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>AGENDA ABIERTA 2026</span>
                </div>
              </div>

              {/* Compact Ruled Specs Rows (Exact reference table, compressed and clean) */}
              <div className="divide-y divide-slate-900/10 text-xs mt-1">
                {UGC_PROFILE_ROWS.map((row, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-2 py-1.5 sm:py-2 items-baseline hover:bg-slate-50 px-1.5 rounded transition-colors"
                  >
                    <div className="sm:col-span-4 flex items-center gap-1">
                      <span className="text-ugc-pink text-[10px]">▪</span>
                      <span className="font-chunky text-[11px] text-slate-900 tracking-wide uppercase">
                        {row.label}
                      </span>
                    </div>

                    <div className="sm:col-span-8">
                      <span className="font-sans text-[11px] sm:text-xs text-slate-700 font-medium">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTAs & Guarantee Bar */}
              <div className="mt-4 pt-3.5 border-t-2 border-slate-900/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Derechos incluidos: Usa los videos en tus redes y anuncios sin costos extras</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onExploreGallery}
                    className="px-3.5 py-1.5 rounded-xl bg-ugc-pink hover:bg-ugc-berry text-white font-bold text-xs uppercase tracking-wider border-2 border-black shadow-sticker flex items-center gap-1.5 cursor-pointer transition-transform active:translate-x-0.5 active:translate-y-0.5"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Ver Fotos y Videos</span>
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="px-3.5 py-1.5 rounded-xl bg-ugc-yellow hover:bg-yellow-300 text-slate-900 font-bold text-xs uppercase tracking-wider border-2 border-black shadow-sticker flex items-center gap-1 cursor-pointer transition-transform active:translate-x-0.5 active:translate-y-0.5"
                  >
                    <span>Cotizar Ahora</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 3. REDES SOCIALES OFICIALES & CANALES DIRECTOS DE SOFÍA */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          <a
            href="https://wa.me/573023399168?text=Hola%20Sof%C3%ADa,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20contenido%20UGC"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#25D366]/20 border-2 border-black text-slate-900 font-bold text-xs shadow-sm hover:bg-[#25D366]/30 transition-all flex items-center gap-1.5 group"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700 group-hover:scale-110 transition-transform" />
            <span>WhatsApp: 3023399168</span>
          </a>

          <a
            href="https://www.instagram.com/sofiacruz0?rpxt=eGo2ODZtbXU2dWM0"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-ugc-pink/20 border-2 border-black text-slate-900 font-bold text-xs shadow-sm hover:bg-ugc-pink/30 transition-all flex items-center gap-1.5 group"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-ugc-pink group-hover:scale-110 transition-transform" />
            <span>Instagram: @sofiacruz0</span>
          </a>

          <a
            href="https://www.tiktok.com/@sofiacruzve?_r=1&_t=ZS-9AisJbpLF0n"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white border-2 border-black font-bold text-xs shadow-sm hover:bg-slate-800 transition-all flex items-center gap-1.5 group"
          >
            <TikTokIcon className="w-3.5 h-3.5 text-ugc-yellow group-hover:scale-110 transition-transform" />
            <span>TikTok: @sofiacruzve</span>
          </a>

          <a
            href="mailto:anasofiacruzvega@gmail.com"
            className="px-3.5 py-1.5 rounded-full bg-ugc-yellow/80 border-2 border-black text-slate-900 font-bold text-xs shadow-sm hover:bg-ugc-yellow transition-all flex items-center gap-1.5 group"
          >
            <Mail className="w-3.5 h-3.5 text-ugc-pink group-hover:scale-110 transition-transform" />
            <span>anasofiacruzvega@gmail.com</span>
          </a>
        </div>

        {/* 4. REJILLA DE ESTADÍSTICAS REALES DE TIKTOK (@sofiacruzve) */}
        <div id="ugc-stats-grid" className="bg-white rounded-3xl border-3 border-black shadow-[8px_8px_0px_#000000] p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b-2 border-slate-900/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900 text-ugc-yellow border border-black text-[10px] font-mono font-bold uppercase">
                <TikTokIcon className="w-3 h-3 text-ugc-yellow" />
                <span>MÉTRICAS REALES EN TIKTOK (@sofiacruzve)</span>
              </div>
              <h3 className="font-chunky text-xl sm:text-2xl text-slate-900 mt-1">
                Resultados & Alcance Comprobado
              </h3>
            </div>

            <p className="text-xs text-slate-600 font-medium max-w-xs text-left sm:text-right">
              Datos extraídos directamente de analítica oficial de TikTok: audiencia real interesada en tus productos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            
            {/* Stat 1 */}
            <div className="p-3.5 rounded-2xl bg-ugc-pink/10 border-2 border-black shadow-sm text-center">
              <div className="w-8 h-8 rounded-full bg-ugc-pink text-white flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                <Eye className="w-4 h-4" />
              </div>
              <span className="font-chunky text-2xl text-ugc-pink block leading-tight">
                158.8K
              </span>
              <span className="text-[11px] font-bold text-slate-800 block mt-0.5">
                Vistas Totales
              </span>
              <span className="text-[9px] text-slate-500 font-sans block">
                Alcance acumulado TikTok
              </span>
            </div>

            {/* Stat 2 */}
            <div className="p-3.5 rounded-2xl bg-ugc-yellow/30 border-2 border-black shadow-sm text-center">
              <div className="w-8 h-8 rounded-full bg-ugc-yellow text-slate-900 border border-black flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                <TrendingUp className="w-4 h-4 text-ugc-pink" />
              </div>
              <span className="font-chunky text-2xl text-slate-900 block leading-tight">
                15.6K
              </span>
              <span className="text-[11px] font-bold text-slate-800 block mt-0.5">
                Pico Máximo
              </span>
              <span className="text-[9px] text-slate-500 font-sans block">
                Vistas en un solo periodo
              </span>
            </div>

            {/* Stat 3 */}
            <div className="p-3.5 rounded-2xl bg-ugc-blue/30 border-2 border-black shadow-sm text-center">
              <div className="w-8 h-8 rounded-full bg-ugc-blue text-slate-900 border border-black flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                <Users className="w-4 h-4 text-slate-900" />
              </div>
              <span className="font-chunky text-2xl text-slate-900 block leading-tight">
                2.7K
              </span>
              <span className="text-[11px] font-bold text-slate-800 block mt-0.5">
                Visitas al Perfil
              </span>
              <span className="text-[9px] text-slate-500 font-sans block">
                Tráfico con alto interés
              </span>
            </div>

            {/* Stat 4 */}
            <div className="p-3.5 rounded-2xl bg-[#fff0f6] border-2 border-black shadow-sm text-center">
              <div className="w-8 h-8 rounded-full bg-ugc-pink text-white flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="font-chunky text-2xl text-ugc-pink block leading-tight">
                5.8K
              </span>
              <span className="text-[11px] font-bold text-slate-800 block mt-0.5">
                Me Gusta
              </span>
              <span className="text-[9px] text-slate-500 font-sans block">
                Reacciones orgánicas
              </span>
            </div>

            {/* Stat 5 */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 border-2 border-black shadow-sm text-center">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                <Award className="w-4 h-4 text-white" />
              </div>
              <span className="font-chunky text-2xl text-emerald-950 block leading-tight">
                723
              </span>
              <span className="text-[11px] font-bold text-slate-800 block mt-0.5">
                Compartidos
              </span>
              <span className="text-[9px] text-emerald-700 font-sans font-bold block">
                Factor viral UGC
              </span>
            </div>

            {/* Stat 6 */}
            <div className="p-3.5 rounded-2xl bg-ugc-blue/30 border-2 border-black shadow-sm text-center">
              <div className="w-8 h-8 rounded-full bg-ugc-blue text-slate-900 border border-black flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                <Award className="w-4 h-4 text-ugc-pink" />
              </div>
              <span className="font-chunky text-2xl text-slate-900 block leading-tight">
                237
              </span>
              <span className="text-[11px] font-bold text-slate-800 block mt-0.5">
                Comentarios
              </span>
              <span className="text-[9px] text-slate-500 font-sans block">
                Interacción genuina
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* 🖼️ MODAL LIGHTBOX: VER CARNET O AFICHE EN TAMAÑO COMPLETO */}
      <AnimatePresence>
        {isPosterZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsPosterZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative max-w-2xl max-h-[92vh] bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_#000] p-4 sm:p-6 flex flex-col items-center overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de Cerrar */}
              <button
                onClick={() => setIsPosterZoomed(false)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-ugc-pink text-white border-2 border-black hover:bg-pink-600 transition-colors shadow-sm cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Selector de Pestañas: Carnet vs Afiche */}
              <div className="flex items-center gap-2 mb-4 self-start">
                <button
                  onClick={() => setPosterTab('carnet')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border-2 border-black transition-all cursor-pointer ${
                    posterTab === 'carnet'
                      ? 'bg-ugc-pink text-white shadow-sticker'
                      : 'bg-[#FBF8EF] text-slate-800 hover:bg-ugc-yellow'
                  }`}
                >
                  🪪 Carnet de Creadora
                </button>
                <button
                  onClick={() => setPosterTab('poster')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border-2 border-black transition-all cursor-pointer ${
                    posterTab === 'poster'
                      ? 'bg-ugc-pink text-white shadow-sticker'
                      : 'bg-[#FBF8EF] text-slate-800 hover:bg-ugc-yellow'
                  }`}
                >
                  📄 Afiche Original
                </button>
              </div>

              {/* Vista 1: Carnet en alta resolución */}
              {posterTab === 'carnet' ? (
                <div className="relative w-full max-w-lg pt-6 pb-2">
                  {/* Clip Metálico en el modal */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-md">
                    <BinderClipSVG className="w-16 h-14" />
                  </div>

                  {/* Tarjeta del Carnet en Grande */}
                  <div className="relative w-full bg-[#FAF4E6] rounded-[32px] border-3 border-[#3C2722] p-6 sm:p-8 shadow-[10px_10px_0px_#3C2722] select-none overflow-hidden">
                    <div className="absolute inset-3 rounded-[26px] border border-[#3C2722]/35 pointer-events-none" />

                    <div className="absolute top-5 left-5 z-10 text-[#C89B3C]">
                      <GoldStarSVG className="w-7 h-7" />
                    </div>

                    <div className="absolute bottom-6 left-[45%] z-20 pointer-events-none transform -rotate-12">
                      <PolkaDotStarSVG className="w-14 h-14 drop-shadow-sm" />
                    </div>

                    <div className="grid grid-cols-12 gap-4 items-center relative z-10 pt-2">
                      <div className="col-span-7 space-y-1.5 pl-2">
                        <h3 className="font-editorialSerif font-bold text-3xl sm:text-4xl text-[#3C2722] tracking-tight leading-[0.95]">
                          CREATIVE<br />PORTFOLIO
                        </h3>

                        <div className="relative inline-block my-1">
                          <span className="font-script text-3xl sm:text-4xl text-[#3C2722] block leading-tight transform -rotate-1">
                            Sofía Cruz
                          </span>
                          <span className="absolute -top-1 -right-4 text-[#C89B3C] text-sm">
                            ★
                          </span>
                        </div>

                        <p className="font-mono text-xs font-bold text-[#5C4033] tracking-[0.18em] uppercase leading-tight pt-1">
                          BEAUTY & LIFESTYLE<br />CREATOR
                        </p>
                      </div>

                      <div className="col-span-5 flex flex-col items-center">
                        <div className="w-full aspect-[3/3.8] rounded-2xl overflow-hidden border-2 border-[#3C2722] bg-white shadow-md">
                          <img
                            src={sofiaPresentationImg}
                            alt="Sofía Cruz"
                            className="w-full h-full object-cover object-[center_38%]"
                          />
                        </div>

                        <div className="w-full mt-2.5 pt-1 flex flex-col items-center">
                          <BarcodeSVG className="w-full h-7 text-[#3C2722]" />
                          <span className="font-mono text-[9px] text-[#5C4033] font-bold tracking-widest mt-1">
                            SOFÍA-CRUZ-2026
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Vista 2: Afiche original completo */
                <img
                  src={sofiaPresentationImg}
                  alt="Sofía Cruz Presentación Oficial"
                  className="w-full h-auto max-h-[75vh] object-contain rounded-2xl select-none"
                />
              )}

              {/* Pie de modal */}
              <div className="w-full flex items-center justify-between pt-4 text-xs text-slate-600 border-t border-slate-200 mt-3">
                <span className="font-chunky text-slate-900 text-sm">
                  ✨ Sofía Cruz · Creadora de Contenido UGC & CM
                </span>
                <button
                  onClick={() => setIsPosterZoomed(false)}
                  className="px-3.5 py-1 rounded-full bg-ugc-yellow border-2 border-black font-chunky text-xs text-slate-900 hover:bg-yellow-300 cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
