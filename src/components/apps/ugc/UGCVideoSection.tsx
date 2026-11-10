import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Volume2, 
  VolumeX, 
  ArrowLeft, 
  MessageCircle, 
  Flame,
  Film
} from 'lucide-react';

export interface CategoryData {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  badgeColor: string;
  videos: VideoItem[];
}

export interface VideoItem {
  id: string;
  title: string;
  hook: string;
  views: string;
  likes: string;
  videoSrc: string;
  tags: string[];
}

const CATEGORIES_DATA: Record<string, CategoryData> = {
  maquillaje: {
    id: 'maquillaje',
    name: 'Maquillaje',
    icon: '💄',
    tagline: 'Rutinas, lip combos y probando productos',
    description: 'Videos dinámicos enfocados en aplicación, textura, cobertura y resultados de cosméticos.',
    badgeColor: 'bg-ugc-pink text-white',
    videos: [
      {
        id: 'maq-1',
        title: 'Demostración de Producto & Glow Routine',
        hook: '"No esperaba que este producto me cambiara la rutina tan rápido... miren el acabado"',
        views: '15.6K',
        likes: '1.4K',
        videoSrc: '/1.mp4',
        tags: ['Glow Real', 'Lip Combo', 'Textura'],
      },
      {
        id: 'maq-2',
        title: 'Prueba Honesta & Reseña en Vivo',
        hook: '"Lo probé durante días para decirles la verdad antes de que lo compren"',
        views: '10.4K',
        likes: '920',
        videoSrc: '/2.mp4',
        tags: ['Opinión Sincera', 'Cero Filtro', 'Durabilidad'],
      },
    ],
  },
  skincare: {
    id: 'skincare',
    name: 'Skincare',
    icon: '✨',
    tagline: 'Cuidado facial, ingredientes y rutinas AM/PM',
    description: 'Demostraciones cercanas de absorción, luminosidad y beneficios reales para el cuidado de la piel.',
    badgeColor: 'bg-ugc-blue text-slate-900',
    videos: [
      {
        id: 'skin-1',
        title: 'Rutina de Cuidado & Efecto Luminoso',
        hook: '"El paso en mi rutina facial que me devolvió la hidratación en segundos"',
        views: '15.6K',
        likes: '1.4K',
        videoSrc: '/1.mp4',
        tags: ['Hidratación', 'Piel Sana', 'Rutina AM'],
      },
      {
        id: 'skin-2',
        title: 'Paso a Paso: Reseña Honesta de Producto',
        hook: '"Así reacciona mi piel después de aplicarlo día a día"',
        views: '10.4K',
        likes: '920',
        videoSrc: '/2.mp4',
        tags: ['Ingredientes', 'Beneficios', 'Sensación'],
      },
    ],
  },
  ropa: {
    id: 'ropa',
    name: 'Moda / Ropa',
    icon: '👗',
    tagline: 'Outfits, hauls, styling y boutiques',
    description: 'Transiciones ágiles, cómo combinar prendas y contenido estético para marcas de moda.',
    badgeColor: 'bg-purple-600 text-white',
    videos: [
      {
        id: 'ropa-1',
        title: 'Formato Viral de Outfits para Marcas',
        hook: '"3 formas distintas de estilizar esta prenda para robarte todas las miradas"',
        views: '12.8K',
        likes: '1.1K',
        videoSrc: '/3.mp4',
        tags: ['Outfits', 'Styling', 'Boutique'],
      },
      {
        id: 'ropa-2',
        title: 'Vlog de Estilo & Experiencia en Tienda',
        hook: '"Acompáñame a armar el look perfecto para este fin de semana"',
        views: '28.4K',
        likes: '2.6K',
        videoSrc: '/4.mp4',
        tags: ['Look del Día', 'Experiencia', 'Moda'],
      },
    ],
  },
  cabello: {
    id: 'cabello',
    name: 'Cabello',
    icon: '💇‍♀️',
    tagline: 'Cuidado capilar, brillo y tratamientos',
    description: 'Contenido enfocado en resultados visibles, tips de estilizado y rutinas de cuidado capilar.',
    badgeColor: 'bg-emerald-600 text-white',
    videos: [
      {
        id: 'cab-1',
        title: 'Rutina Capilar & Brillo Extremo',
        hook: '"El secreto para mantener el cabello con brillo y sin frizz todo el día"',
        views: '15.6K',
        likes: '1.4K',
        videoSrc: '/1.mp4',
        tags: ['Cuidado Capilar', 'Anti-Frizz', 'Brillo'],
      },
      {
        id: 'cab-2',
        title: 'Reseña de Tratamiento & Aplicación',
        hook: '"Miren el cambio antes y después de usar este producto en mi cabello"',
        views: '10.4K',
        likes: '920',
        videoSrc: '/2.mp4',
        tags: ['Tratamiento', 'Resultados', 'Recomendación'],
      },
    ],
  },
  foodie: {
    id: 'foodie',
    name: 'Foodie / Gastronomía',
    icon: '🍔',
    tagline: 'Restaurantes, planes y recomendaciones gastronómicas',
    description: 'Tours de comida, reseñas de platillos y videos diseñados para despertar el antojo inmediato.',
    badgeColor: 'bg-orange-600 text-white',
    videos: [
      {
        id: 'food-1',
        title: 'Ruta Gastronómica & Recomendación de Lugares',
        hook: '"Un plan perfecto de fin de semana con comida deliciosa y buena vibra"',
        views: '34.1K',
        likes: '3.1K',
        videoSrc: '/5.mp4',
        tags: ['Ruta Foodie', 'Recomendación', 'Plan de Fin'],
      },
      {
        id: 'food-2',
        title: 'Vlog de Experiencia & Paradas Imperdibles',
        hook: '"Hicimos una parada en el camino para probar esta delicia con una vista increíble"',
        views: '28.4K',
        likes: '2.6K',
        videoSrc: '/4.mp4',
        tags: ['Experiencia Real', 'Antojos', 'Restaurantes'],
      },
    ],
  },
  otros: {
    id: 'otros',
    name: 'Otros / Lifestyle',
    icon: '📱',
    tagline: 'Tecnología, vlogs, viajes y marcas en general',
    description: 'Formatos versátiles para negocios de servicios, accesorios, tecnología y estilo de vida.',
    badgeColor: 'bg-ugc-yellow text-slate-900',
    videos: [
      {
        id: 'otros-1',
        title: 'Formato Viral para Anuncios de Marcas',
        hook: '"Los primeros 3 segundos que hacen que la gente no pase de largo y quiera comprar"',
        views: '15.6K',
        likes: '1.4K',
        videoSrc: '/3.mp4',
        tags: ['Gancho Viral', 'Venta Directa', 'Reels & TikTok'],
      },
      {
        id: 'otros-2',
        title: 'Vlog de Aventura & Experiencia Real',
        hook: '"Un recorrido espontáneo mostrando cómo se vive la experiencia en persona"',
        views: '28.4K',
        likes: '2.6K',
        videoSrc: '/4.mp4',
        tags: ['Vlog de Viaje', 'Storytelling', 'Lifestyle'],
      },
      {
        id: 'otros-3',
        title: 'Vlog Lifestyle & Escapada de Fin de Semana',
        hook: '"Un día conmigo desconectando en la montaña y viviendo la experiencia completa"',
        views: '22.3K',
        likes: '1.9K',
        videoSrc: '/6.mp4',
        tags: ['Lifestyle', 'Vlog de Viaje', 'Escapada', 'Storytelling'],
      },
    ],
  },
};

// Videos destacados para la página principal
const FEATURED_VIDEOS: VideoItem[] = [
  {
    id: 'feat-1',
    title: 'Demostración de Producto & Belleza',
    hook: '"No esperaba que este producto me cambiara la rutina tan rápido..."',
    views: '15.6K',
    likes: '1.4K',
    videoSrc: '/1.mp4',
    tags: ['Demostración', 'Belleza', 'Alta Retención'],
  },
  {
    id: 'feat-2',
    title: 'Formato Viral para Anuncios de Marcas',
    hook: '"El gancho visual en los primeros 3 segundos para frenar el scroll"',
    views: '10.4K',
    likes: '920',
    videoSrc: '/3.mp4',
    tags: ['Anuncios Pauta', 'Venta Directa', '9:16'],
  },
  {
    id: 'feat-3',
    title: 'Ruta & Experiencia Gastronómica',
    hook: '"Un plan perfecto de fin de semana con recomendación honesta"',
    views: '34.1K',
    likes: '3.1K',
    videoSrc: '/5.mp4',
    tags: ['Experiencia', 'Foodie & Planes', 'Viral'],
  },
  {
    id: 'feat-4',
    title: 'Vlog Lifestyle & Escapada de Fin de Semana',
    hook: '"Un día conmigo desconectando en la montaña y viviendo la experiencia"',
    views: '22.3K',
    likes: '1.9K',
    videoSrc: '/6.mp4',
    tags: ['Lifestyle', 'Vlog de Viaje', 'Experiencia Real'],
  },
];

export const UGCVideoSection: React.FC = () => {
  const [activeCategoryKey, setActiveCategoryKey] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMutedMap, setIsMutedMap] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Reset playback when switching categories
  useEffect(() => {
    // Pause any currently playing video
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid && !vid.paused) {
        vid.pause();
      }
    });
    setPlayingId(null);
  }, [activeCategoryKey]);

  const togglePlay = (id: string) => {
    const vid = videoRefs.current[id];
    if (!vid) return;

    if (playingId === id && !vid.paused) {
      vid.pause();
      setPlayingId(null);
    } else {
      // Pause other videos
      Object.entries(videoRefs.current).forEach(([k, v]) => {
        if (v && k !== id && !v.paused) {
          v.pause();
        }
      });
      vid.play().then(() => {
        setPlayingId(id);
      }).catch(() => {
        // Handle autoplay policy
      });
    }
  };

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (!vid) return;
    const nextMuted = !vid.muted;
    vid.muted = nextMuted;
    setIsMutedMap((prev) => ({ ...prev, [id]: nextMuted }));
  };

  // =========================================================================
  // VISTA SUBPÁGINA DE CATEGORÍA
  // =========================================================================
  if (activeCategoryKey && CATEGORIES_DATA[activeCategoryKey]) {
    const category = CATEGORIES_DATA[activeCategoryKey];

    return (
      <section id="ugc-category-subpage" className="py-8 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto animate-in fade-in duration-200">
        
        {/* Barra superior con botón volver + Selector rápido de categorías */}
        <div className="bg-white rounded-3xl border-3 border-black p-4 sm:p-5 shadow-[6px_6px_0px_#000000] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-slate-900/10">
            <button
              onClick={() => {
                setActiveCategoryKey(null);
                const el = document.getElementById('ugc-video-categories');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-full bg-ugc-yellow hover:bg-yellow-300 border-2 border-black font-chunky text-xs text-slate-900 flex items-center gap-2 shadow-sticker transition-transform active:scale-95 cursor-pointer w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Volver al Portafolio UGC</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                Subpágina:
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-chunky border border-black shadow-xs ${category.badgeColor}`}>
                {category.icon} {category.name}
              </span>
            </div>
          </div>

          {/* Píldoras para cambiar a otra categoría directamente sin devolverse */}
          <div className="pt-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-mono text-slate-500 uppercase font-bold shrink-0">
              Cambiar a:
            </span>
            {Object.values(CATEGORIES_DATA).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryKey(cat.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-chunky border transition-all whitespace-nowrap cursor-pointer ${
                  activeCategoryKey === cat.id
                    ? 'bg-slate-900 text-white border-black shadow-sm'
                    : 'bg-[#FBF8EF] hover:bg-ugc-yellow text-slate-800 border-black/40'
                }`}
              >
                <span>{cat.icon} {cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Título de la Subpágina */}
        <div className="text-center mb-8">
          <h2 className="font-editorialSerif italic font-bold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            {category.name}
          </h2>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-black font-chunky text-xs text-slate-900 shadow-sticker mt-2">
            <span>Dale click para reproducir 📱</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto mt-3">
            {category.description}
          </p>
        </div>

        {/* Grilla de Teléfonos Mockups 9:16 con Videos de la Categoría */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${category.videos.length >= 3 ? 'lg:grid-cols-3 max-w-5xl' : 'lg:grid-cols-2 max-w-3xl'} mx-auto gap-8 sm:gap-10 justify-items-center`}>
          {category.videos.map((vid) => {
            const isPlaying = playingId === vid.id;
            const isMuted = isMutedMap[vid.id] ?? true;

            return (
              <div 
                key={vid.id}
                className="w-full max-w-[320px] flex flex-col items-center group"
              >
                {/* Teléfono Mockup Vertical 9:16 */}
                <div 
                  onClick={() => togglePlay(vid.id)}
                  className="relative w-full aspect-[9/16] rounded-[36px] bg-black border-4 border-[#1E293B] shadow-[8px_8px_0px_#000000] group-hover:shadow-[10px_10px_0px_#000000] overflow-hidden cursor-pointer transition-all duration-300 select-none"
                >
                  {/* Dynamic Island / Notch del teléfono */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/90 rounded-full z-30 pointer-events-none flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 mr-2" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50" />
                  </div>

                  {/* Video Element */}
                  <video
                    ref={(el) => { videoRefs.current[vid.id] = el; }}
                    src={vid.videoSrc}
                    playsInline
                    loop
                    muted={isMuted}
                    className="w-full h-full object-cover"
                  />

                  {/* Botón Central Play / Pause */}
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 z-20 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-ugc-pink text-white border-2 border-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 ml-0.5 fill-white" />
                      </div>
                      <span className="font-chunky text-xs text-white drop-shadow mt-3 tracking-wide">
                        Toca para reproducir
                      </span>
                    </div>
                  )}

                  {/* Botón Flotante de Silenciar / Sonido */}
                  <button
                    onClick={(e) => toggleMute(vid.id, e)}
                    className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
                    title={isMuted ? 'Activar sonido' : 'Silenciar'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-ugc-yellow" />}
                  </button>

                  {/* Overlay Inferior con Hook del Video */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 z-20 pointer-events-none">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-ugc-yellow text-slate-900 font-mono text-[9px] font-bold">
                        {vid.views} vistas
                      </span>
                      <span className="text-[10px] text-white/90 font-mono font-bold flex items-center gap-1">
                        <Flame className="w-3 h-3 text-ugc-pink fill-ugc-pink" />
                        {vid.likes} likes
                      </span>
                    </div>
                    <p className="text-white text-xs font-medium leading-snug drop-shadow line-clamp-2">
                      {vid.hook}
                    </p>
                  </div>
                </div>

                {/* Título y Tags debajo del mockup */}
                <div className="w-full mt-3 text-center px-1">
                  <h4 className="font-chunky text-sm text-slate-900 leading-tight">
                    {vid.title}
                  </h4>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
                    {vid.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA final de la subpágina: Cotizar esta categoría en WhatsApp */}
        <div className="mt-12 max-w-xl mx-auto bg-white rounded-3xl border-3 border-black p-6 text-center shadow-[6px_6px_0px_#000000]">
          <span className="font-chunky text-lg text-slate-900 block mb-1">
            ¿Quieres videos de {category.name} para tu marca?
          </span>
          <p className="text-xs text-slate-600 font-medium mb-4">
            Podemos crear un video individual o un paquete estratégico con ganchos y guiones adaptados a tu tienda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/573023399168?text=${encodeURIComponent(`Hola Sofía, me interesa cotizar videos de la categoría de ${category.name} para mi marca.`)}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-ugc-yellow hover:bg-yellow-300 text-slate-900 font-chunky text-xs uppercase tracking-wider border-2 border-black shadow-sticker flex items-center gap-2 transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-ugc-pink" />
              <span>Cotizar {category.name} por WhatsApp</span>
            </a>
            <button
              onClick={() => setActiveCategoryKey(null)}
              className="px-4 py-2.5 rounded-full bg-[#FBF8EF] hover:bg-slate-100 text-slate-800 font-chunky text-xs border border-black transition-colors cursor-pointer"
            >
              Ver otras categorías
            </button>
          </div>
        </div>

      </section>
    );
  }

  // =========================================================================
  // VISTA PRINCIPAL: VIDEOS DESTACADOS + SELECTOR DE CATEGORÍAS (PÁG 8)
  // =========================================================================
  return (
    <section id="ugc-gallery" className="py-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      
      {/* 1. MUESTRA DE VIDEOS DESTACADOS EN LA PÁGINA PRINCIPAL */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-pink/15 border border-ugc-pink text-ugc-berry text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-2">
          <Film className="w-3 h-3 text-ugc-pink" />
          <span>GALERÍA DE VIDEOS UGC</span>
        </div>
        <h2 className="font-chunky text-3xl sm:text-5xl text-slate-900 tracking-tight">
          Videos <span className="text-ugc-pink drop-shadow-[2px_2px_0px_#B4D9F4]">Destacados</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mx-auto mt-2">
          Toca cualquier video para reproducir y escuchar el tono auténtico, dinámico y vendedor.
        </p>
      </div>

      {/* Grid de Mockups Destacados en Página Principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 justify-items-center mb-16">
        {FEATURED_VIDEOS.map((vid) => {
          const isPlaying = playingId === vid.id;
          const isMuted = isMutedMap[vid.id] ?? true;

          return (
            <div 
              key={vid.id}
              className="w-full max-w-[270px] flex flex-col items-center group"
            >
              <div 
                onClick={() => togglePlay(vid.id)}
                className="relative w-full aspect-[9/16] rounded-[34px] bg-black border-4 border-[#1E293B] shadow-[6px_6px_0px_#000000] group-hover:shadow-[9px_9px_0px_#000000] overflow-hidden cursor-pointer transition-all duration-300 select-none"
              >
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black/90 rounded-full z-30 pointer-events-none flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700 mr-1.5" />
                  <div className="w-1 h-1 rounded-full bg-blue-900/40" />
                </div>

                <video
                  ref={(el) => { videoRefs.current[vid.id] = el; }}
                  src={vid.videoSrc}
                  playsInline
                  loop
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />

                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 z-20 transition-opacity">
                    <div className="w-13 h-13 rounded-full bg-ugc-pink text-white border-2 border-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-white" />
                    </div>
                    <span className="font-chunky text-[11px] text-white drop-shadow mt-2 tracking-wide">
                      Reproducir
                    </span>
                  </div>
                )}

                <button
                  onClick={(e) => toggleMute(vid.id, e)}
                  className="absolute top-3.5 right-3.5 z-30 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
                  title={isMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-ugc-yellow" />}
                </button>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3.5 z-20 pointer-events-none">
                  <span className="px-2 py-0.5 rounded-full bg-ugc-yellow text-slate-900 font-mono text-[9px] font-bold inline-block mb-1">
                    {vid.views} vistas
                  </span>
                  <p className="text-white text-xs font-medium leading-snug drop-shadow line-clamp-2">
                    {vid.hook}
                  </p>
                </div>
              </div>

              <div className="w-full mt-2.5 text-center">
                <h4 className="font-chunky text-xs sm:text-sm text-slate-900 leading-tight">
                  {vid.title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. PANEL INTERACTIVO DE CATEGORÍAS (PÁGINA 8 DEL CANVA) */}
      <div id="ugc-video-categories" className="bg-white rounded-3xl border-3 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000]">
        
        <div className="text-center mb-6">
          <h3 className="font-editorialSerif italic font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Categoría de <span className="font-script text-ugc-pink not-italic text-4xl sm:text-6xl -ml-1">Videos</span>
          </h3>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-ugc-yellow border-2 border-black font-chunky text-xs text-slate-900 shadow-sticker mt-2">
            <span>Dale click a la categoría que te interese 👆</span>
          </div>
          <p className="text-xs text-slate-500 font-medium max-w-md mx-auto mt-2">
            Explora videos organizados por temática para ver cómo puedo destacar los productos de tu marca.
          </p>
        </div>

        {/* Botones de Categorías Grandes & Atractivos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {Object.values(CATEGORIES_DATA).map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategoryKey(cat.id);
                // Smooth scroll to top of section
                const el = document.getElementById('ugc-gallery');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl bg-[#FBF8EF] hover:bg-ugc-yellow/40 border-2 border-black flex flex-col items-center justify-between text-center shadow-sticker hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <span className="text-3xl sm:text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <span className="font-chunky text-sm text-slate-900 leading-tight block mb-1">
                {cat.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium leading-tight line-clamp-2">
                {cat.tagline}
              </span>
              <span className="mt-3 px-2.5 py-0.5 rounded-full bg-slate-900 text-white font-mono text-[9px] font-bold group-hover:bg-ugc-pink transition-colors">
                Ver videos →
              </span>
            </button>
          ))}
        </div>

      </div>

    </section>
  );
};
