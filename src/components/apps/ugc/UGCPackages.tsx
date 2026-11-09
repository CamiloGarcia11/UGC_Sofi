import React, { useState, useRef } from 'react';
import { 
  Check, 
  Sparkles, 
  MessageCircle, 
  Star,
  Layers,
  FileText,
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { UGCPackage } from '../../../types/ugc';

const UGC_PACKAGES: UGCPackage[] = [
  {
    id: 'pack-ugc',
    name: 'Video UGC',
    badge: 'PARA ANUNCIOS & PAUTA',
    videosCount: 1,
    description: 'Contenido grabado y editado para uso exclusivo de tu marca en pauta o redes, sin publicación en mi perfil.',
    deliveryTime: 'Entrega en 3 a 5 días hábiles',
    priceEstimate: '$130.000 COP + producto',
    features: [
      '📦 El producto físico enviado queda en poder de la creadora',
      '⏱️ Formato vertical 9:16 (hasta 1 min de duración)',
      '👗 Máximo hasta 3 prendas o 1 producto destacado',
      '💼 Derechos comerciales de uso para pauta y redes de tu marca',
      '✨ Edición dinámica con subtítulos claros y música en tendencia',
      '🔄 1 ronda de correcciones menores incluida tras entrega'
    ]
  },
  {
    id: 'pack-reel-home',
    name: 'Reel desde Casa',
    badge: '★ PUBLICADO EN PERFIL · 295K VISTAS ★',
    recommended: true,
    videosCount: 1,
    description: 'Video grabado con buena iluminación, edición atractiva y en tendencia, publicado directamente en mi perfil oficial.',
    deliveryTime: 'Entrega en 3 a 5 días hábiles',
    priceEstimate: '$180.000 COP + producto',
    features: [
      '📲 Publicación oficial en @sofiacruzve (TikTok) o @sofiacruz0 (Instagram)',
      '🏷️ Mención directa y etiqueta a la cuenta oficial de tu marca',
      '📦 El producto físico enviado queda en poder de la creadora',
      '⏱️ Formato vertical 9:16 (hasta 1 min de duración)',
      '✨ 1 ronda de correcciones menores antes de publicación',
      '💬 Monitoreo y respuesta a comentarios de audiencia inicial'
    ]
  },
  {
    id: 'pack-reel-location',
    name: 'Reel en Locación',
    badge: '📍 PRESENCIAL EN CÚCUTA & ÁREA METROPOLITANA',
    videosCount: 1,
    description: 'Grabado presencialmente en el lugar que elijas (tienda, restaurante, boutique o evento) para mostrar mejor la experiencia.',
    deliveryTime: 'Fecha a convenir según agenda previa',
    priceEstimate: '$250.000 COP + producto',
    features: [
      '📍 Asistencia presencial de Sofía en Cúcuta o área metropolitana',
      '🎥 Grabación in situ: instalaciones, experiencia, prueba o degustación',
      '📲 Publicación oficial en @sofiacruz0 (Instagram) o @sofiacruzve (TikTok)',
      '🍔 El consumo, producto o acceso corre por cuenta del establecimiento',
      '⏱️ Formato vertical 9:16 (hasta 1 min de duración con edición ágil)',
      '✨ 1 ronda de correcciones menores antes de la publicación final'
    ]
  }
];

const ADDITIONAL_SERVICES = [
  {
    title: 'Ráfaga de Historias (3 Historias)',
    desc: '3 historias consecutivas mostrando el producto y mencionando la marca con enlace directo en @sofiacruz0.',
    price: '$90.000 COP + producto',
    badge: '22K VISTAS EN STORIES',
    terms: '3 historias continuas + link directo + producto queda con la creadora'
  },
  {
    title: 'Post en Instagram (Feed)',
    desc: 'Publicación permanente en el feed fotográfico mostrando el producto o prenda y mencionando la marca en caption.',
    price: '$120.000 COP + producto',
    badge: 'FEED PERMANENTE',
    terms: 'Post estético + copy persuasivo + producto queda con la creadora'
  },
  {
    title: 'Pack de Fotografías (3 Fotos)',
    desc: '3 fotografías de producto o prendas en alta resolución con iluminación estética listas para catálogo.',
    price: '$70.000 COP + producto',
    badge: 'FOTOS DE PRODUCTO',
    terms: '3 fotos en alta calidad + retoque digital + producto queda con la creadora'
  },
  {
    title: 'Alianzas & Colaboraciones a Largo Plazo',
    desc: 'Paquetes especiales según cantidad de contenido para empresas y centros comerciales con campañas amplias.',
    price: 'Tarifa Flexible / A Convenir',
    badge: 'EMPRESAS & CENTROS COMERCIALES',
    terms: 'Esquema a la medida acordado directamente con el empresario o centro comercial'
  }
];

export const UGCPackages: React.FC = () => {
  const [selectedPackId, setSelectedPackId] = useState<string>('pack-reel-home');
  const packagesScrollRef = useRef<HTMLDivElement>(null);
  const servicesScrollRef = useRef<HTMLDivElement>(null);

  const scrollPackages = (direction: 'left' | 'right') => {
    if (packagesScrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      packagesScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesScrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      servicesScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pack: UGCPackage) => {
    setSelectedPackId(pack.id);
    
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#E33B87', '#B4D9F4', '#FEF49B', '#ffffff']
    });

    const msg = encodeURIComponent(
      `¡Hola Sofía Cruz! Me interesa contratar el paquete "${pack.name}" (${pack.priceEstimate}) de contenido UGC para mi marca. ¿Podemos revisar disponibilidad?`
    );
    window.open(`https://wa.me/573023399168?text=${msg}`, '_blank');
  };

  const handleServiceQuote = (title: string, price: string) => {
    const msg = encodeURIComponent(
      `¡Hola Sofía Cruz! Me gustaría cotizar el servicio de "${title}" (${price}) para mi marca.`
    );
    window.open(`https://wa.me/573023399168?text=${msg}`, '_blank');
  };

  return (
    <section id="ugc-packages" className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 bg-[#FBF8EF] text-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* UN SOLO RECUADRO GRANDE MAESTRO */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] border-3 sm:border-4 border-black shadow-[8px_8px_0px_#000000] p-5 sm:p-8 md:p-10 space-y-8">
          
          {/* Encabezado General dentro del recuadro */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-yellow border-2 border-black shadow-[2px_2px_0px_#000] text-slate-900 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-ugc-pink fill-ugc-pink" />
              <span>Tarifas Oficiales 2026 · En Pesos Colombianos (COP)</span>
            </div>
            
            <h2 className="font-chunky text-3xl sm:text-4xl md:text-5xl text-ugc-pink tracking-tight drop-shadow-[1px_1px_0px_#B4D9F4]">
              Planes & Tarifas de Contenido UGC
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Estrategia, producción y edición de videos verticales orgánicos y de pauta. Elige el formato ideal para tu marca:
            </p>
          </div>

          {/* Selector de Planes en Móvil / Controles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t-2 border-slate-900/10">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto">
              {UGC_PACKAGES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPackId(p.id);
                    const el = document.getElementById(`pkg-${p.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }}
                  className={`px-3 py-1.5 rounded-xl font-chunky text-xs uppercase tracking-wider border-2 border-black transition-all cursor-pointer whitespace-nowrap ${
                    selectedPackId === p.id
                      ? 'bg-ugc-pink text-white shadow-sticker -translate-y-0.5'
                      : 'bg-[#FBF8EF] text-slate-800 hover:bg-ugc-yellow shadow-sm'
                  }`}
                >
                  <span>{p.name}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-[11px] font-bold text-slate-600 font-mono hidden sm:inline">
                ← Desliza planes →
              </span>
              <button
                onClick={() => scrollPackages('left')}
                className="p-1.5 sm:p-2 rounded-full bg-[#FBF8EF] hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                title="Plan anterior"
                aria-label="Plan anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollPackages('right')}
                className="p-1.5 sm:p-2 rounded-full bg-[#FBF8EF] hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                title="Plan siguiente"
                aria-label="Plan siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Main Packages: En escritorio 3 columnas, en móvil carrusel táctil */}
          <div 
            ref={packagesScrollRef}
            className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-5 pb-4 md:pb-0 pt-3 px-1 no-scrollbar scroll-smooth items-stretch"
          >
            {UGC_PACKAGES.map((pack) => {
              const isRec = pack.recommended;
              const isSelected = selectedPackId === pack.id;

              return (
                <div
                  id={`pkg-${pack.id}`}
                  key={pack.id}
                  onClick={() => setSelectedPackId(pack.id)}
                  className={`shrink-0 w-[285px] sm:w-[320px] md:w-auto snap-center relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer border-3 border-black ${
                    isRec
                      ? 'bg-[#FFF9FA] shadow-[6px_6px_0px_#E33B87] ring-4 ring-ugc-pink/20'
                      : isSelected
                      ? 'bg-[#FAF8EF] shadow-[6px_6px_0px_#000]'
                      : 'bg-white hover:bg-[#FAF8EF] shadow-sticker'
                  }`}
                >
                  {/* Floating Recommended Tag */}
                  {pack.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-ugc-pink text-white text-[10px] font-chunky tracking-wider uppercase border-2 border-black shadow-sm flex items-center gap-1 whitespace-nowrap z-10">
                      <Sparkles className="w-3 h-3 text-ugc-yellow" />
                      <span>{pack.badge}</span>
                    </div>
                  )}

                  <div>
                    {/* Top info */}
                    <div className="flex items-center justify-between mb-2 pt-1">
                      <h3 className="font-chunky text-xl sm:text-2xl text-slate-900">{pack.name}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-ugc-blue border border-black text-xs font-bold text-slate-900">
                        {pack.videosCount} {pack.videosCount === 1 ? 'Video' : 'Videos'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">
                      {pack.description}
                    </p>

                    {/* Price Banner */}
                    <div className="mb-4 p-3.5 rounded-2xl bg-ugc-yellow/60 border-2 border-black">
                      <span className="text-[10px] text-slate-700 font-bold uppercase tracking-wider block mb-0.5">
                        Tarifa Oficial:
                      </span>
                      <span className="font-chunky text-2xl sm:text-3xl text-ugc-pink tracking-tight block">
                        {pack.priceEstimate}
                      </span>
                      <span className="text-[11px] text-slate-700 block mt-1 font-medium font-mono">
                        ⏱ {pack.deliveryTime}
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-6">
                      <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                        Incluye:
                      </span>
                      {pack.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <div className="w-4 h-4 rounded-full bg-ugc-pink/20 text-ugc-pink flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPackage(pack);
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer border-2 border-black ${
                      isRec
                        ? 'bg-ugc-pink hover:bg-ugc-berry text-white shadow-sticker'
                        : 'bg-ugc-yellow hover:bg-yellow-300 text-slate-900 shadow-sticker'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotizar {pack.name}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* BLOQUE INTERNO 2: Servicios Individuales & Combos */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF7F0] border-2 border-black shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 mb-4 border-b-2 border-slate-900/10">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-ugc-blue border border-black shadow-xs">
                  <Layers className="w-4 h-4 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-chunky text-base sm:text-lg text-slate-900">
                    Servicios Individuales & Combos Especiales
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-1.5 sm:hidden">
                  <button
                    onClick={() => scrollServices('left')}
                    className="p-1.5 rounded-full bg-white text-slate-900 border border-black shadow-xs cursor-pointer"
                    title="Servicio anterior"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => scrollServices('right')}
                    className="p-1.5 rounded-full bg-white text-slate-900 border border-black shadow-xs cursor-pointer"
                    title="Servicio siguiente"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <a
                  href="/media-kit-sofia-cruz-2026.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-ugc-yellow border-2 border-black text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-xs transition-colors shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-ugc-pink" />
                  <span>Media Kit PDF</span>
                </a>
              </div>
            </div>

            {/* Grid 4 Columnas de Servicios en Desktop, Scroll en Móvil */}
            <div 
              ref={servicesScrollRef}
              className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible gap-3 pb-2 sm:pb-0 no-scrollbar snap-x"
            >
              {ADDITIONAL_SERVICES.map((srv, i) => (
                <div 
                  key={i}
                  onClick={() => handleServiceQuote(srv.title, srv.price)}
                  className="shrink-0 w-[240px] sm:w-auto snap-start p-3.5 rounded-2xl bg-white border-2 border-black hover:shadow-sticker transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <span className="px-2 py-0.5 rounded-full bg-ugc-pink/10 border border-black/30 font-mono text-[9px] font-bold text-ugc-pink block w-fit mb-1.5">
                      {srv.badge}
                    </span>
                    <h5 className="font-chunky text-xs sm:text-sm text-slate-900 mb-1 group-hover:text-ugc-pink transition-colors">
                      {srv.title}
                    </h5>
                    <p className="text-[11px] text-slate-600 leading-snug mb-2">
                      {srv.desc}
                    </p>
                    <span className="text-[9.5px] font-mono text-slate-500 block mb-2.5 pt-1.5 border-t border-slate-100">
                      ✦ {srv.terms}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span className="font-chunky text-sm text-slate-900">
                      {srv.price}
                    </span>
                    <span className="text-[10px] font-bold text-ugc-pink group-hover:underline">
                      Pedir →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BLOQUE INTERNO 3: Términos & Condiciones */}
          <div className="rounded-2xl bg-[#FFF9ED] border-2 border-black p-4 sm:p-5 text-xs text-slate-700 shadow-xs">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/10">
              <FileText className="w-4 h-4 text-ugc-pink" />
              <span className="font-chunky text-sm text-slate-900 uppercase tracking-wide">
                Términos & Condiciones del Servicio
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
              <div className="p-2.5 bg-white rounded-xl border border-black/15 shadow-xs">
                <strong className="text-slate-900 block mb-0.5">📦 Productos Físicos:</strong>
                Los productos enviados para publicidad o UGC se quedan con la creadora.
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-black/15 shadow-xs">
                <strong className="text-slate-900 block mb-0.5">⏱️ Duración:</strong>
                Máximo 1 minuto por video en tarifa base. Tiempos superiores con recargo.
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-black/15 shadow-xs">
                <strong className="text-slate-900 block mb-0.5">👗 Límites:</strong>
                Videos pensados para un máximo de hasta 3 prendas o 1 producto por pieza.
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-black/15 shadow-xs">
                <strong className="text-slate-900 block mb-0.5">✨ Modificaciones:</strong>
                Incluye 1 ronda de correcciones menores sin costo adicional tras entrega.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
