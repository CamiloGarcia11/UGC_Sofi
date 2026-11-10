import React, { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface BrandItem {
  id: string;
  name: string;
  category: string;
  bgColor: string;
  textColor: string;
  imgSrc?: string;
}

const BRANDS_LIST: BrandItem[] = [
  {
    id: 'b-rexona',
    name: 'Rexona',
    category: 'Cuidado Personal',
    bgColor: 'bg-teal-950',
    textColor: 'text-white',
    imgSrc: '/brands/rexona.png',
  },
  {
    id: 'b-buenavista',
    name: 'Buena Vista Hostal',
    category: 'Turismo & Hospedaje',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-950',
    imgSrc: '/brands/buenavista.png',
  },
  {
    id: 'b-paisajes-cafe',
    name: 'Paisajes & Café',
    category: 'Cafetería & Gastronomía',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-950',
    imgSrc: '/brands/paisajes-cafe.png',
  },
  {
    id: 'b-capilla',
    name: 'Capilla Restobar',
    category: 'Restobar & Coctelería',
    bgColor: 'bg-slate-900',
    textColor: 'text-white',
    imgSrc: '/brands/capilla-restobar.png',
  },
  {
    id: 'b-cafitech',
    name: 'Cafitech',
    category: 'Audio & Tecnología',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-950',
    imgSrc: '/brands/cafitech.png',
  },
  {
    id: 'b-visionweb',
    name: 'Vision Web',
    category: 'Agencia & Software',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-950',
    imgSrc: '/brands/vision-web.png',
  },
  {
    id: 'b-pueblito',
    name: 'Pueblito Chitarero',
    category: 'Destino & Cultura',
    bgColor: 'bg-yellow-50',
    textColor: 'text-amber-950',
    imgSrc: '/brands/pueblito-chitarero.png',
  },
];

export const UGCBrands: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll loop para movimiento continuo y dinámico
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scrollSpeed = 0.75; // Velocidad suave

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed;
        const oneThird = container.scrollWidth / 3;
        if (container.scrollLeft >= oneThird * 2) {
          container.scrollLeft -= oneThird;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scrollManual = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Triplicamos la lista para dar efecto de carrusel continuo infinito
  const displayBrands = [...BRANDS_LIST, ...BRANDS_LIST, ...BRANDS_LIST];

  return (
    <section id="ugc-brands" className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Encabezado */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-yellow/40 border border-black text-slate-900 text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-1.5 shadow-xs">
          <Star className="w-3 h-3 text-ugc-pink fill-ugc-pink" />
          <span>PORTAFOLIO COMERCIAL</span>
        </div>
        <h2 className="font-chunky text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
          Marcas <span className="text-ugc-pink drop-shadow-[2px_2px_0px_#B4D9F4]">con las que he trabajado</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto mt-1.5">
          Colaboraciones comerciales, reseñas y contenido publicitario para marcas destacadas.
        </p>
      </div>

      {/* Carrusel Dinámico con Controles */}
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Botón Izquierdo */}
        <button
          onClick={() => scrollManual('left')}
          className="absolute -left-2 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Botón Derecho */}
        <button
          onClick={() => scrollManual('right')}
          className="absolute -right-2 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Degradados laterales para desvanecimiento elegante */}
        <div className="absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#FBF8EF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#FBF8EF] to-transparent z-10 pointer-events-none" />

        {/* Track Deslizable del Carrusel */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-4 px-8 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollBehavior: 'auto' }}
        >
          {displayBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex flex-col items-center shrink-0 group transition-transform hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Círculo estilo sticker */}
              <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-3 border-black ${brand.bgColor} flex items-center justify-center text-center shadow-[4px_4px_0px_#000000] group-hover:shadow-[6px_6px_0px_#000000] group-hover:scale-105 transition-all select-none overflow-hidden relative bg-white p-0`}>
                {brand.imgSrc ? (
                  <img 
                    src={brand.imgSrc} 
                    alt={brand.name} 
                    className="w-full h-full object-cover rounded-full select-none pointer-events-none" 
                    loading="lazy"
                    draggable={false}
                  />
                ) : (
                  <div className="p-2 flex flex-col items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-ugc-pink mb-0.5 opacity-80" />
                    <span className={`font-chunky text-[10px] sm:text-[11px] leading-tight ${brand.textColor}`}>
                      {brand.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Nombre de la marca */}
              <span className="font-chunky text-xs sm:text-[13px] text-slate-800 mt-2 text-center max-w-[120px] truncate leading-tight group-hover:text-ugc-pink transition-colors">
                {brand.name}
              </span>

              {/* Categoría pequeña debajo */}
              <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider text-center max-w-[110px] truncate mt-0.5">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador / Nota sutil */}
      <div className="text-center mt-3 sm:mt-4">
        <span className="inline-block text-[10px] sm:text-[11px] font-mono text-slate-500 font-medium bg-white/70 px-3.5 py-1 rounded-full border border-slate-200">
          ✦ Desliza o toca para pausar · Espacios listos para marcas 2026 ✦
        </span>
      </div>
    </section>
  );
};
