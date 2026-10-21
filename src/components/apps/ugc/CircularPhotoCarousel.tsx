import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  X, 
  Sparkles,
  Camera,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import photoFlash from '../../../assets/gallery/sofia-portrait-flash.jpg';
import photoGarden from '../../../assets/gallery/sofia-nature-garden.jpg';
import photoNight from '../../../assets/gallery/sofia-night-outfit.jpg';
import photoMirror from '../../../assets/gallery/sofia-aesthetic-mirror.jpg';
import photoCafe from '../../../assets/gallery/sofia-cafe-lifestyle.jpg';
import photoRainbow from '../../../assets/gallery/sofia-mountain-rainbow.jpg';
import photoGoldenHour from '../../../assets/gallery/sofia-golden-hour.jpg';
import photoTerrace from '../../../assets/gallery/sofia-terrace-view.jpg';

// ============================================================================
// 📸 1. ESTRUCTURA DE DATOS - FOTOS OFICIALES DE SOFÍA CRUZ (ALTA CALIDAD)
// ============================================================================
export interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  tag: string;
  description?: string;
  objectPosition?: string;
}

export const CLIENT_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    src: photoFlash,
    title: "Retrato Flash & Maquillaje Glow",
    tag: "Belleza & Skincare",
    description: "Fotografía de retrato con iluminación flash nítida y piel iluminada para marcas de belleza, cuidado facial y accesorios.",
    objectPosition: "center 32%",
  },
  {
    id: 2,
    src: photoGarden,
    title: "Paseo & Estilo Casual",
    tag: "Moda & Streetwear",
    description: "Fotografía al aire libre en entornos naturales y túneles florales, ideal para marcas de ropa casual, hoodies y calzado.",
    objectPosition: "center 38%",
  },
  {
    id: 3,
    src: photoRainbow,
    title: "Aventura, Montaña & Arcoíris",
    tag: "Viajes & Lifestyle",
    description: "Contenido espontáneo de viajes en paisajes montañosos con arcoíris de fondo, conectando con marcas de turismo y moda outdoor.",
    objectPosition: "center 60%",
  },
  {
    id: 4,
    src: photoNight,
    title: "Look de Noche & Accesorios",
    tag: "Moda & Tendencias",
    description: "Lookbook nocturno destacando vestidos en tendencia, bolsos de diseñador y estética urbana con iluminación de calle.",
    objectPosition: "center 26%",
  },
  {
    id: 5,
    src: photoGoldenHour,
    title: "Golden Hour & Piel Radiante",
    tag: "Skincare & Luz Natural",
    description: "Retrato bajo la luz dorada del atardecer resaltando frescura, piel saludable y joyería fina para marcas de belleza.",
    objectPosition: "center 28%",
  },
  {
    id: 6,
    src: photoMirror,
    title: "Espacios & Estética Aesthetic",
    tag: "Diseño & Estilo",
    description: "Sesión en interiores con diseño arquitectónico y luz cálida para marcas de cuidado personal, diseño y lifestyle.",
    objectPosition: "center 28%",
  },
  {
    id: 7,
    src: photoTerrace,
    title: "Terraza, Montañas & Relax",
    tag: "Estilo de Vida & Viajes",
    description: "Momento de tranquilidad y vistas panorámicas a la montaña desde terraza rústica, transmitiendo libertad y frescura.",
    objectPosition: "center 38%",
  },
  {
    id: 8,
    src: photoCafe,
    title: "Café, Gastronomía & Bienestar",
    tag: "Estilo de Vida & Café",
    description: "Contenido orgánico de estilo de vida en cafeterías y restaurantes, transmitiendo calma, disfrute y momentos cotidianos.",
    objectPosition: "center 35%",
  },
];

// Helper to normalize angle in [-180, 180]
function normalizeAngle(angle: number): number {
  let a = angle % 360;
  if (a > 180) a -= 360;
  if (a < -180) a += 360;
  return a;
}

export const CircularPhotoCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive carousel dimensions
  const [cardWidth, setCardWidth] = useState(250);
  const [cardHeight, setCardHeight] = useState(375);
  const [radius, setRadius] = useState(440);

  // Rotation states
  const [rotation, setRotation] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  // References for physics and animation loop
  const currentRotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const dragStartRotationRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const hasMovedRef = useRef(false);

  const totalItems = CLIENT_PHOTOS.length;
  const angleStep = 360 / totalItems;

  // Adapt size based on container / window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(170);
        setCardHeight(260);
        setRadius(290);
      } else if (width < 1024) {
        setCardWidth(210);
        setCardHeight(320);
        setRadius(370);
      } else {
        setCardWidth(250);
        setCardHeight(380);
        setRadius(440);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Silky 60fps Physics & Lerp Animation Loop (React Bits Style)
  useEffect(() => {
    let animId: number;

    const animateLoop = () => {
      if (isDraggingRef.current) {
        // Direct tracking while dragging
        currentRotationRef.current = targetRotationRef.current;
        setRotation(currentRotationRef.current);
      } else {
        // Auto-play drift if enabled and not hovered
        if (isAutoPlay && !isHovered) {
          targetRotationRef.current -= 0.08; // Gentle continuous rotation
        }

        // Smooth Lerp easing towards target
        const delta = targetRotationRef.current - currentRotationRef.current;
        currentRotationRef.current += delta * 0.085;

        // Micro-optimization: only update state if visible change
        if (Math.abs(delta) > 0.005 || (isAutoPlay && !isHovered)) {
          setRotation(currentRotationRef.current);
        }
      }

      animId = requestAnimationFrame(animateLoop);
    };

    animId = requestAnimationFrame(animateLoop);
    return () => cancelAnimationFrame(animId);
  }, [isAutoPlay, isHovered]);

  // Pointer drag events
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    pointerStartXRef.current = e.clientX;
    dragStartRotationRef.current = currentRotationRef.current;
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;

    // Capture pointer
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // Ignore if not supported
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - pointerStartXRef.current;
    if (Math.abs(deltaX) > 4) {
      hasMovedRef.current = true;
    }

    // Calculate instantaneous velocity
    const now = performance.now();
    const dt = now - lastPointerTimeRef.current;
    if (dt > 8) {
      const dx = e.clientX - lastPointerXRef.current;
      velocityRef.current = dx / dt; // pixels per ms
      lastPointerXRef.current = e.clientX;
      lastPointerTimeRef.current = now;
    }

    // Drag sensitivity
    const sensitivity = 0.35;
    targetRotationRef.current = dragStartRotationRef.current + deltaX * sensitivity;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    // Apply inertia from velocity
    const momentum = velocityRef.current * 45; // momentum factor
    const projectedRotation = targetRotationRef.current + momentum;

    // Snap to nearest photo item
    const snapped = Math.round(projectedRotation / angleStep) * angleStep;
    targetRotationRef.current = snapped;
  };

  // Step controls
  const handlePrev = useCallback(() => {
    const current = Math.round(targetRotationRef.current / angleStep) * angleStep;
    targetRotationRef.current = current + angleStep;
  }, [angleStep]);

  const handleNext = useCallback(() => {
    const current = Math.round(targetRotationRef.current / angleStep) * angleStep;
    targetRotationRef.current = current - angleStep;
  }, [angleStep]);

  // Center a specific card when clicked
  const handleCardClick = (index: number) => {
    if (hasMovedRef.current) return; // Prevent click trigger on drag release

    const itemAngle = index * angleStep;
    const currentRel = normalizeAngle(itemAngle + currentRotationRef.current);
    
    // If it's already centered, open lightbox modal!
    if (Math.abs(currentRel) < 10) {
      setActivePhoto(CLIENT_PHOTOS[index]);
    } else {
      // Smoothly rotate this card to center
      targetRotationRef.current -= currentRel;
    }
  };

  const handleModalPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = CLIENT_PHOTOS.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + CLIENT_PHOTOS.length) % CLIENT_PHOTOS.length;
    setActivePhoto(CLIENT_PHOTOS[prevIndex]);
  };

  const handleModalNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = CLIENT_PHOTOS.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % CLIENT_PHOTOS.length;
    setActivePhoto(CLIENT_PHOTOS[nextIndex]);
  };

  // Calculate which item is currently closest to center (active focus)
  const currentNormalized = normalizeAngle(-rotation);
  const activeIndex = Math.round(
    (currentNormalized < 0 ? currentNormalized + 360 : currentNormalized) / angleStep
  ) % totalItems;

  const currentFocusItem = CLIENT_PHOTOS[activeIndex] || CLIENT_PHOTOS[0];

  return (
    <section 
      id="ugc-photo-carousel" 
      className="relative py-16 px-4 bg-[#FBF8EF] text-slate-900 overflow-hidden font-sans border-b-2 border-slate-900/10"
    >
      {/* Decorative Doodles & Stickers in UGC Colors */}
      <div className="absolute top-8 left-8 text-ugc-yellow text-4xl select-none pointer-events-none opacity-80">
        ✦
      </div>
      <div className="absolute top-24 right-10 text-ugc-pink text-3xl select-none pointer-events-none opacity-70">
        ✦
      </div>
      <div className="absolute bottom-12 left-12 text-ugc-blue text-5xl select-none pointer-events-none opacity-60">
        ✦
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-ugc-yellow border-2 border-black text-slate-900 text-xs font-bold uppercase tracking-wider shadow-sticker">
            <Camera className="w-3.5 h-3.5 text-ugc-pink" />
            <span>FOTOGRAFÍA & SESIONES UGC</span>
          </div>

          <h2 className="font-chunky text-3xl sm:text-4xl md:text-5xl text-ugc-pink tracking-tight drop-shadow-[2px_3px_0px_#B4D9F4]">
            ✨ Galería Visual & Sesiones de Fotos
          </h2>
        </div>

        {/* 🎡 3D Circular Carousel Container (React Bits Physics) */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none py-6"
          style={{
            perspective: '1200px',
            height: `${cardHeight + 110}px`,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Circular 3D Cylinder Stage */}
          <div
            className="relative w-full h-full flex items-center justify-center pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`,
            }}
          >
            {CLIENT_PHOTOS.map((item, index) => {
              const itemAngle = index * angleStep;
              const relativeAngle = normalizeAngle(itemAngle + rotation);
              const absAngle = Math.abs(relativeAngle);
              const isFacingFront = absAngle < 90;
              const isCurrentActive = index === activeIndex;

              // Smooth depth & scale calculation
              const scale = isCurrentActive ? 1.05 : 0.92;
              const opacity = isFacingFront ? 1 : Math.max(0.25, 1 - (absAngle - 90) / 90);

              return (
                <div
                  key={item.id}
                  className="absolute cursor-pointer pointer-events-auto rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scale})`,
                    transformStyle: 'preserve-3d',
                    opacity,
                    zIndex: isCurrentActive ? 50 : Math.round(100 - absAngle),
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Card Shell in UGC Brand Aesthetic */}
                  <div className={`relative w-full h-full rounded-2xl overflow-hidden border-3 border-black bg-white transition-shadow duration-300 ${
                    isCurrentActive 
                      ? 'shadow-[6px_6px_0px_#E33B87] ring-4 ring-ugc-yellow' 
                      : 'shadow-sticker hover:shadow-[5px_5px_0px_#B4D9F4]'
                  }`}>
                    {/* Card Photo Image */}
                    <div className="relative w-full h-full overflow-hidden bg-slate-100">
                      <img
                        src={item.src}
                        alt="Fotografía de Sofía Cruz"
                        className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: item.objectPosition || 'center' }}
                        loading="eager"
                        decoding="async"
                      />

                      {/* Active Center Badge */}
                      {isCurrentActive && (
                        <div className="absolute top-2.5 right-2.5 animate-bounce">
                          <span className="px-2.5 py-0.5 rounded-full bg-ugc-pink border border-black text-[9px] font-chunky text-white shadow-sm flex items-center gap-0.5">
                            ★ EN FOCO
                          </span>
                        </div>
                      )}

                      {/* Subtle Hover Action Hint */}
                      <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-white/95 border-2 border-black font-chunky text-xs text-slate-900 shadow-sticker flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-ugc-pink" />
                          <span>Ampliar foto</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🎛️ Bottom Carousel Controls (Prev / Next, Auto-Play Toggle & Status) */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-xl gap-4 mt-2 px-2">
          
          {/* Active Info Indicator */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-ugc-pink animate-pulse" />
            <p className="font-chunky text-xs text-slate-800">
              Sofía Cruz · Foto {activeIndex + 1} de {totalItems}
            </p>
          </div>

          {/* Buttons Navigation */}
          <div className="flex items-center gap-2">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Foto anterior"
              className="p-2 rounded-full bg-white border-2 border-black shadow-sticker hover:bg-ugc-yellow active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-slate-900"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Play/Pause Auto-drift Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              aria-label={isAutoPlay ? "Pausar auto-rotación" : "Iniciar auto-rotación"}
              className={`px-3 py-1.5 rounded-full border-2 border-black shadow-sticker font-sans text-xs font-bold flex items-center gap-1.5 transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
                isAutoPlay ? 'bg-ugc-blue text-slate-900' : 'bg-white text-slate-600'
              }`}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-ugc-pink" />
                  <span>Auto 360°</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-slate-800" />
                  <span>Pausado</span>
                </>
              )}
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Siguiente foto"
              className="p-2 rounded-full bg-white border-2 border-black shadow-sticker hover:bg-ugc-yellow active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-slate-900"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Expand / Lightbox Button */}
            <button
              onClick={() => setActivePhoto(currentFocusItem)}
              aria-label="Ver foto en tamaño completo"
              className="p-2 rounded-full bg-ugc-pink text-white border-2 border-black shadow-sticker hover:bg-pink-600 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all ml-1"
              title="Ampliar foto activa"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mini Dots Bar */}
        <div className="flex items-center gap-1.5 mt-4">
          {CLIENT_PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const targetAngle = -i * angleStep;
                const diff = normalizeAngle(targetAngle - currentRotationRef.current);
                targetRotationRef.current = currentRotationRef.current + diff;
              }}
              aria-label={`Ir a foto ${i + 1}`}
              className={`transition-all rounded-full ${
                i === activeIndex 
                  ? 'w-6 h-2 bg-ugc-pink border border-black' 
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>

      {/* 🖼️ LIGHTBOX MODAL - AMPLIACIÓN DE FOTO (ANIMATED OVERLAY) */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative max-w-lg w-full bg-[#FBF8EF] rounded-2xl border-4 border-black shadow-[10px_10px_0px_#000000] overflow-hidden p-4 sm:p-5 text-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Cerrar vista previa"
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-ugc-pink text-white border-2 border-black hover:bg-pink-600 transition-colors shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Clean Modal Header */}
              <div className="flex items-center justify-between gap-2 mb-3 pr-10">
                <span className="font-chunky text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-ugc-pink" />
                  <span>Sofía Cruz · Fotografía Oficial</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-ugc-yellow border border-black font-mono text-[10px] font-bold text-slate-900">
                  {CLIENT_PHOTOS.findIndex(p => p.id === activePhoto.id) + 1} / {CLIENT_PHOTOS.length}
                </span>
              </div>

              {/* Image Preview with 100% Native Quality & Navigation Arrows */}
              <div className="relative rounded-xl overflow-hidden border-2 border-black bg-slate-950 flex items-center justify-center aspect-[3/4] max-h-[62vh] group">
                <img
                  src={activePhoto.src}
                  alt="Fotografía en alta resolución de Sofía Cruz"
                  className="w-full h-full object-contain select-none"
                  loading="eager"
                  decoding="sync"
                />

                {/* Left navigation arrow */}
                <button
                  onClick={handleModalPrev}
                  aria-label="Foto anterior"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-slate-900 border-2 border-black shadow-sticker transition-transform hover:scale-110 active:scale-95 cursor-pointer z-20"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Right navigation arrow */}
                <button
                  onClick={handleModalNext}
                  aria-label="Foto siguiente"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-slate-900 border-2 border-black shadow-sticker transition-transform hover:scale-110 active:scale-95 cursor-pointer z-20"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* High Resolution Badge */}
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/75 border border-white/20 text-[9px] font-mono text-white/90">
                  Alta Definición (HD)
                </span>
              </div>

              {/* Modal Footer */}
              <div className="mt-3.5 flex items-center justify-between pt-2 border-t border-slate-900/10">
                <span className="text-[11px] text-slate-500 font-sans flex items-center gap-1 font-semibold">
                  <Heart className="w-3 h-3 text-ugc-pink fill-ugc-pink" />
                  <span>Contenido auténtico para marcas</span>
                </span>

                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-3.5 py-1 rounded-full bg-ugc-yellow border-2 border-black font-chunky text-xs text-slate-900 hover:bg-yellow-300 transition-colors shadow-sm cursor-pointer"
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
