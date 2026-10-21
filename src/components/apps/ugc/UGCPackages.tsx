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
    id: 'pack-single',
    name: '1 Video UGC',
    badge: 'PRUEBA INDIVIDUAL',
    videosCount: 1,
    description: 'Perfecto para probar el formato UGC por primera vez con un video enfocado en tu producto o prenda.',
    deliveryTime: 'Entrega en 3 a 5 días',
    priceEstimate: '$80.000 COP',
    features: [
      '1 Video vertical 9:16 (hasta 1 min de duración)',
      'Hasta 3 prendas o 1 producto destacado',
      'Edición ágil con subtítulos claros y música en tendencia',
      'Enfoque auténtico adaptado al estilo de tu marca',
      'Derechos de uso para tus redes sociales y pauta',
      '1 ronda de correcciones menores incluida'
    ]
  },
  {
    id: 'pack-trio',
    name: 'Pack 3 Videos UGC',
    badge: '★ EL MÁS ELEGIDO · AHORRA $60.000 ★',
    recommended: true,
    videosCount: 3,
    description: 'El paquete favorito para testear diferentes ángulos, ganchos de inicio y formatos para multiplicar tus ventas.',
    deliveryTime: 'Entrega en 3 a 5 días',
    priceEstimate: '$180.000 COP',
    features: [
      '3 Videos institucionales o publicitarios (hasta 1 min c/u)',
      'Hasta 3 prendas o 1 producto por cada video',
      'Variedad de ganchos: demostración, reseña y unboxing',
      'Edición dinámica con tomas de apoyo en detalle',
      'Derechos comerciales completos para pauta y anuncios',
      '1 ronda de correcciones menores incluida'
    ]
  },
  {
    id: 'pack-monthly',
    name: 'TikTok - Pack Mensual',
    badge: '1 VIDEO CADA SEMANA',
    videosCount: 4,
    description: 'Presencia continua en redes con un video fresco cada semana para mantener el tráfico y las ventas activas.',
    deliveryTime: 'Entregas semanales programadas',
    priceEstimate: '$250.000 COP',
    features: [
      '4 Videos en el mes (1 video nuevo cada semana)',
      'Contenido constante para no perder relevancia en el algoritmo',
      'Ideas de guiones y conceptos adaptados a tu tienda',
      'Edición completa con formato vertical 9:16',
      'Uso comercial para tus campañas del mes',
      'Atención y coordinación directa por WhatsApp'
    ]
  }
];

const ADDITIONAL_SERVICES = [
  {
    title: 'Pack de Impulso (Combo)',
    desc: '1 TikTok / Reel + 1 Ráfaga de historias en Instagram',
    price: '$150.000 COP',
    badge: 'COMBO VIRAL'
  },
  {
    title: 'Pack de Fotografías',
    desc: '3 fotografías profesionales por producto o prenda',
    price: '$70.000 COP',
    badge: 'FOTOS PRO'
  },
  {
    title: 'Instagram - 1 Historia',
    desc: 'Historia publicada en @sofiacruz0 con enlace directo',
    price: '$60.000 COP',
    badge: '@sofiacruz0'
  },
  {
    title: 'Instagram - Ráfaga de Historias',
    desc: 'Secuencia completa de historias para destacar tu marca',
    price: '$100.000 COP',
    badge: 'HISTORIAS'
  }
];

export const UGCPackages: React.FC = () => {
  const [selectedPackId, setSelectedPackId] = useState<string>('pack-trio');
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
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-yellow border-2 border-black shadow-[2px_2px_0px_#000] text-slate-900 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-ugc-pink fill-ugc-pink" />
            <span>Tarifas Oficiales 2026 · En Pesos Colombianos (COP)</span>
          </div>
          
          <h2 className="font-chunky text-3xl sm:text-4xl md:text-5xl text-ugc-pink tracking-tight drop-shadow-[1px_1px_0px_#B4D9F4]">
            Planes & Tarifas de Contenido UGC
          </h2>
        </div>

        {/* Packages Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {UGC_PACKAGES.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedPackId(p.id);
                  const el = document.getElementById(`pkg-${p.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }}
                className={`px-3.5 py-1.5 rounded-xl font-chunky text-xs uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
                  selectedPackId === p.id
                    ? 'bg-ugc-pink text-white shadow-sticker -translate-y-0.5'
                    : 'bg-white text-slate-800 hover:bg-ugc-yellow shadow-sm'
                }`}
              >
                <span>{p.name}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-600 font-mono hidden sm:inline">
              ← Desliza planes →
            </span>
            <button
              onClick={() => scrollPackages('left')}
              className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Plan anterior"
              aria-label="Plan anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollPackages('right')}
              className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Plan siguiente"
              aria-label="Plan siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Main Packages Horizontal Carousel Track */}
        <div 
          ref={packagesScrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-3 px-1 no-scrollbar scroll-smooth mb-2"
        >
          {UGC_PACKAGES.map((pack) => {
            const isRec = pack.recommended;
            const isSelected = selectedPackId === pack.id;

            return (
              <div
                id={`pkg-${pack.id}`}
                key={pack.id}
                onClick={() => setSelectedPackId(pack.id)}
                className={`shrink-0 w-[285px] sm:w-[330px] md:w-[350px] snap-center relative rounded-[32px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer border-2 border-black ${
                  isSelected ? 'ring-2 ring-ugc-pink' : ''
                } ${
                  isRec
                    ? 'bg-white shadow-[6px_6px_0px_#E33B87] ring-4 ring-ugc-pink/30'
                    : isSelected
                    ? 'bg-white shadow-[6px_6px_0px_#000]'
                    : 'bg-[#fffdf9] hover:bg-white shadow-sticker'
                }`}
              >
                {/* Floating Recommended Tag */}
                {pack.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-ugc-pink text-white text-[10px] font-chunky tracking-wider uppercase border-2 border-black shadow-sm flex items-center gap-1 whitespace-nowrap">
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
                    <span className="font-chunky text-2xl sm:text-3xl text-ugc-pink tracking-tight">
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

        {/* Compact Additional Services & Combos */}
        <div className="mb-10 p-5 sm:p-6 rounded-3xl bg-white border-2 border-black shadow-sticker">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 border-b-2 border-slate-100">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-ugc-blue border border-black">
                <Layers className="w-4 h-4 text-slate-900" />
              </div>
              <div>
                <h4 className="font-chunky text-base sm:text-lg text-slate-900">
                  Servicios Individuales & Combos Especiales
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollServices('left')}
                  className="p-1.5 rounded-full bg-white hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                  title="Servicio anterior"
                  aria-label="Servicio anterior"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => scrollServices('right')}
                  className="p-1.5 rounded-full bg-white hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                  title="Servicio siguiente"
                  aria-label="Servicio siguiente"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <a
                href="/media-kit-sofia-cruz-2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-ugc-cream hover:bg-ugc-yellow border-2 border-black text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-sm transition-colors shrink-0"
              >
                <Download className="w-3.5 h-3.5 text-ugc-pink" />
                <span>Media Kit PDF</span>
              </a>
            </div>
          </div>

          {/* Horizontal Track for Additional Services */}
          <div 
            ref={servicesScrollRef}
            className="flex overflow-x-auto snap-x gap-3.5 pb-2 pt-1 no-scrollbar scroll-smooth"
          >
            {ADDITIONAL_SERVICES.map((srv, i) => (
              <div 
                key={i}
                onClick={() => handleServiceQuote(srv.title, srv.price)}
                className="shrink-0 w-[240px] sm:w-[265px] snap-start p-3.5 rounded-2xl bg-[#FAF7F0] border-2 border-black hover:bg-white hover:shadow-sticker transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-white border border-black font-mono text-[9px] font-bold text-ugc-pink block w-fit mb-1.5">
                    {srv.badge}
                  </span>
                  <h5 className="font-chunky text-xs sm:text-sm text-slate-900 mb-1 group-hover:text-ugc-pink transition-colors">
                    {srv.title}
                  </h5>
                  <p className="text-[11px] text-slate-600 leading-snug mb-3">
                    {srv.desc}
                  </p>
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

        {/* Compact Terms & Conditions */}
        <div className="rounded-2xl bg-[#FFF9ED] border-2 border-black p-5 sm:p-6 text-xs text-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/10">
            <FileText className="w-4 h-4 text-ugc-pink" />
            <span className="font-chunky text-sm text-slate-900 uppercase tracking-wide">
              Términos & Condiciones del Servicio
            </span>
          </div>

          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px] no-scrollbar pb-1">
            <div className="shrink-0 w-[230px] sm:w-auto p-2.5 bg-white rounded-xl border border-black/15">
              <strong className="text-slate-900 block mb-0.5">📦 Productos Físicos:</strong>
              Los productos enviados para la publicidad o contenido UGC se los queda la creadora.
            </div>
            <div className="shrink-0 w-[230px] sm:w-auto p-2.5 bg-white rounded-xl border border-black/15">
              <strong className="text-slate-900 block mb-0.5">⏱️ Duración:</strong>
              Máximo 1 minuto por video incluido en tarifa base. Tiempos superiores con recargo.
            </div>
            <div className="shrink-0 w-[230px] sm:w-auto p-2.5 bg-white rounded-xl border border-black/15">
              <strong className="text-slate-900 block mb-0.5">👗 Límites:</strong>
              Videos pensados para un máximo de hasta 3 prendas o 1 producto por pieza.
            </div>
            <div className="shrink-0 w-[230px] sm:w-auto p-2.5 bg-white rounded-xl border border-black/15">
              <strong className="text-slate-900 block mb-0.5">✨ Modificaciones:</strong>
              Incluye 1 ronda de correcciones menores sin costo adicional tras la entrega.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
