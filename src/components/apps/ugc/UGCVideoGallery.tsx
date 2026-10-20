import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Star,
  X,
  MessageCircle,
  ExternalLink,
  Film
} from 'lucide-react';
import type { VideoProject, VGCCategory } from '../../../types/ugc';

const CATEGORIES: VGCCategory[] = ['Todos', 'Estilo de Vida', 'Testimonios', 'Anuncios'];

const SAMPLE_PROJECTS: VideoProject[] = [
  {
    id: 'vid-1',
    title: 'Demostración de Producto & Rutina de Belleza',
    brand: 'Sofía Cruz · UGC',
    category: 'Estilo de Vida',
    views: '15.6K',
    likes: '1.4K',
    ctr: '5.8%',
    gradient: 'from-pink-400 via-rose-300 to-yellow-200',
    hook: '"No esperaba que este producto me cambiara la rutina tan rápido... miren el resultado"',
    aspectRatio: '9:16',
    tags: ['Belleza Real', 'Rutina Diaria', 'Alta Retención'],
    videoSrc: '/1.mp4',
  },
  {
    id: 'vid-2',
    title: 'Prueba Honesta de Producto & Reseña en Vivo',
    brand: 'Sofía Cruz · UGC',
    category: 'Testimonios',
    views: '10.4K',
    likes: '920',
    ctr: '4.6%',
    gradient: 'from-blue-300 via-sky-200 to-yellow-100',
    hook: '"Lo probé durante días para decirles la verdad antes de que lo compren"',
    aspectRatio: '9:16',
    tags: ['Opinión Sincera', 'Cero Pose', 'Confianza'],
    videoSrc: '/2.mp4',
  },
  {
    id: 'vid-3',
    title: 'Formato Viral para Anuncios de Marcas',
    brand: 'Sofía Cruz · UGC',
    category: 'Anuncios',
    views: '5.2K',
    likes: '480',
    ctr: '6.4%',
    gradient: 'from-yellow-200 via-pink-200 to-pink-400',
    hook: '"Los primeros 3 segundos que hacen que la gente no pase de largo y quiera comprar"',
    aspectRatio: '9:16',
    tags: ['Gancho Viral', 'Venta Directa', 'Reels & TikTok'],
    videoSrc: '/3.mp4',
  },
];

export const UGCVideoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<VGCCategory>('Todos');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [mutedMap, setMutedMap] = useState<Record<string, boolean>>({
    'vid-1': true,
    'vid-2': true,
    'vid-3': true,
  });
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [videoErrors, setVideoErrors] = useState<Record<string, boolean>>({});
  const [activeModalProject, setActiveModalProject] = useState<VideoProject | null>(null);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const filteredProjects = selectedCategory === 'Todos'
    ? SAMPLE_PROJECTS
    : SAMPLE_PROJECTS.filter(p => p.category === selectedCategory);

  // Toggle play/pause for a specific video card
  const togglePlay = (id: string) => {
    const currentVideo = videoRefs.current[id];
    if (!currentVideo) return;

    if (playingVideoId === id) {
      currentVideo.pause();
      setPlayingVideoId(null);
    } else {
      // Pause any other playing video
      Object.entries(videoRefs.current).forEach(([otherId, videoEl]) => {
        if (otherId !== id && videoEl && !videoEl.paused) {
          videoEl.pause();
        }
      });

      currentVideo.play().then(() => {
        setPlayingVideoId(id);
      }).catch((err) => {
        console.warn('Auto-play blocked or format error:', err);
      });
    }
  };

  // Toggle audio mute for a specific video
  const toggleMute = (id: string) => {
    const currentVideo = videoRefs.current[id];
    if (!currentVideo) return;

    const newMuted = !currentVideo.muted;
    currentVideo.muted = newMuted;
    setMutedMap(prev => ({ ...prev, [id]: newMuted }));
  };

  // When modal opens/closes, handle playback
  useEffect(() => {
    if (activeModalProject) {
      // Pause inline videos
      Object.values(videoRefs.current).forEach(videoEl => {
        if (videoEl && !videoEl.paused) videoEl.pause();
      });
      setPlayingVideoId(null);

      // Play modal video unmuted by default
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = 0;
        modalVideoRef.current.muted = false;
        modalVideoRef.current.play().catch(() => {});
      }
    }
  }, [activeModalProject]);

  return (
    <section id="ugc-gallery" className="py-16 px-4 sm:px-8 md:px-12 bg-white text-slate-900 border-t-2 border-b-2 border-slate-900/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-yellow border-2 border-black shadow-[2px_2px_0px_#000] text-slate-900 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-ugc-pink fill-ugc-pink" />
            <span>Formatos Verticales 9:16</span>
          </div>
          
          <h2 className="font-chunky text-3xl sm:text-4xl text-ugc-pink tracking-tight drop-shadow-[1px_1px_0px_#B4D9F4]">
            Galería de Videos Reales
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto font-medium">
            Toca cualquier video para reproducir. El video se aprecia completo, limpio y sin obstrucciones.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border-2 border-black ${
                  isSelected
                    ? 'bg-ugc-pink text-white shadow-sticker scale-105'
                    : 'bg-[#FBF8EF] hover:bg-ugc-yellow text-slate-800 shadow-[2px_2px_0px_#000]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Video Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isPlaying = playingVideoId === project.id;
              const isMuted = mutedMap[project.id] ?? true;
              const progress = progressMap[project.id] || 0;
              const hasError = videoErrors[project.id];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[32px] bg-[#FBF8EF] border-2 border-black p-3.5 shadow-sticker hover:shadow-[6px_6px_0px_#000] transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Smartphone Frame Simulator - 100% CLEAN VIDEO WITHOUT OBSTRUCTIVE OVERLAYS */}
                  <div 
                    onClick={() => togglePlay(project.id)}
                    className="relative aspect-[9/16] w-full rounded-[22px] overflow-hidden bg-black border-2 border-black shadow-inner flex flex-col justify-between select-none cursor-pointer"
                  >
                    {/* Native HTML5 Video Element (Full brightness, edge-to-edge) */}
                    {!hasError ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[project.id] = el;
                        }}
                        src={project.videoSrc}
                        playsInline
                        loop
                        muted={isMuted}
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                        onTimeUpdate={(e) => {
                          const v = e.currentTarget;
                          if (v.duration) {
                            setProgressMap(prev => ({
                              ...prev,
                              [project.id]: (v.currentTime / v.duration) * 100
                            }));
                          }
                        }}
                        onPlay={() => setPlayingVideoId(project.id)}
                        onPause={() => {
                          if (playingVideoId === project.id) {
                            setPlayingVideoId(null);
                          }
                        }}
                        onError={() => {
                          setVideoErrors(prev => ({ ...prev, [project.id]: true }));
                        }}
                      />
                    ) : (
                      /* Fallback in case browser lacks MOV/HEVC decoder */
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center p-6 text-center text-slate-900`}>
                        <Film className="w-12 h-12 text-ugc-pink mb-2" />
                        <p className="font-chunky text-sm mb-1">{project.title}</p>
                        <p className="text-[11px] text-slate-700 mb-3">Video oficial disponible en alta resolución</p>
                        <a
                          href={project.videoSrc}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1.5 rounded-full bg-white border-2 border-black text-xs font-bold shadow-sticker flex items-center gap-1.5 hover:bg-ugc-yellow"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Abrir Video</span>
                        </a>
                      </div>
                    )}

                    {/* Subtle Top Controls (Discreet translucent badges that don't block the video) */}
                    <div className="relative z-10 flex items-center justify-between p-3 pointer-events-auto">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-ugc-pink'}`} />
                        <span>Video 0{idx + 1}</span>
                      </span>

                      <div className="flex items-center gap-1.5">
                        {/* Audio Mute/Unmute Discreet Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMute(project.id);
                          }}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/25 backdrop-blur-md transition-transform hover:scale-110 shadow-sm cursor-pointer"
                          title={isMuted ? 'Activar sonido' : 'Silenciar'}
                          aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                        >
                          {isMuted ? (
                            <VolumeX className="w-3.5 h-3.5 text-slate-300" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5 text-ugc-yellow" />
                          )}
                        </button>

                        {/* Fullscreen / Modal Theater Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModalProject(project);
                          }}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/25 backdrop-blur-md transition-transform hover:scale-110 shadow-sm cursor-pointer"
                          title="Ampliar video"
                          aria-label="Ampliar video"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Center: Play Button (Only visible when paused, completely disappears while playing) */}
                    <div className="relative z-10 flex items-center justify-center my-auto pointer-events-none">
                      {!isPlaying && (
                        <div className="w-14 h-14 rounded-full bg-white/95 text-slate-900 border-2 border-black shadow-sticker flex items-center justify-center pointer-events-auto transition-transform hover:scale-110">
                          <Play className="w-6 h-6 fill-ugc-pink text-ugc-pink ml-0.5" />
                        </div>
                      )}
                    </div>

                    {/* Bottom: Minimal 3px Progress Bar (No text or boxes covering the video) */}
                    <div className="relative z-10 w-full h-1 bg-black/30 backdrop-blur-xs">
                      <div 
                        className="h-full bg-ugc-pink transition-all duration-150"
                        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                      />
                    </div>

                  </div>

                  {/* Card Footer (Information placed OUTSIDE the video so it never blocks the content) */}
                  <div className="pt-3.5 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-ugc-yellow border border-black text-[10px] font-bold text-slate-900 shadow-sm">
                        {project.category}
                      </span>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-[11px] font-mono text-ugc-pink font-bold flex items-center gap-1 hover:underline cursor-pointer shrink-0"
                      >
                        <span>Pantalla Completa</span>
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>

                    <h3 className="font-chunky text-sm sm:text-base text-slate-900 group-hover:text-ugc-pink transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-white border border-slate-300 text-[10px] font-bold text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* WhatsApp CTA Button */}
                    <a
                      href={`https://wa.me/573023399168?text=${encodeURIComponent(
                        `Hola Sofía! Vi tu video en la web (${project.title}) y me gustaría cotizar un formato similar para mi marca.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full mt-2 py-2 px-3 rounded-xl bg-white hover:bg-ugc-pink hover:text-white border-2 border-black text-slate-900 font-chunky text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-ugc-pink group-hover:text-white" />
                      <span>Cotizar este Video</span>
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* 🎬 MODAL LIGHTBOX / TEATRO PARA VER EL VIDEO EN MÁXIMA CALIDAD */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative max-w-sm sm:max-w-md w-full bg-[#FAF5EA] rounded-3xl border-3 border-black shadow-[10px_10px_0px_#000] p-4 sm:p-5 flex flex-col items-center overflow-hidden text-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-ugc-pink text-white border-2 border-black hover:bg-rose-500 transition-colors shadow-sm cursor-pointer"
                aria-label="Cerrar reproductor"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Video Header */}
              <div className="w-full flex items-center gap-2 mb-3 pr-10">
                <span className="w-2.5 h-2.5 rounded-full bg-ugc-pink animate-pulse" />
                <h4 className="font-chunky text-sm sm:text-base text-slate-900 line-clamp-1">
                  {activeModalProject.title}
                </h4>
              </div>

              {/* Theater Video Player (9:16 Aspect Ratio) */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-black border-2 border-black shadow-inner aspect-[9/16] max-h-[68vh] flex items-center justify-center">
                <video
                  ref={modalVideoRef}
                  src={activeModalProject.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* CTA in Modal Footer */}
              <div className="w-full pt-3 mt-3 border-t-2 border-slate-900/10 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <div className="text-center sm:text-left">
                  <span className="font-chunky text-xs text-slate-900 block">
                    ¿Quieres un video como este?
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Guion, grabación en alta calidad y edición completa
                  </span>
                </div>

                <a
                  href={`https://wa.me/573023399168?text=${encodeURIComponent(
                    `Hola Sofía! Me encantó el video de "${activeModalProject.title}" y me gustaría cotizar un formato similar para mi marca.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-ugc-pink text-white font-chunky text-xs uppercase tracking-wider border-2 border-black shadow-sticker hover:bg-rose-500 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar por WhatsApp</span>
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
