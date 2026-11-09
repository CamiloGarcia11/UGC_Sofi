import React, { useState } from 'react';
import { 
  Share2, 
  Heart, 
  MessageSquare, 
  Users, 
  Sparkles, 
  Play, 
  Maximize2, 
  X,
  CheckCircle2
} from 'lucide-react';
import { TikTokIcon, InstagramIcon } from '../../common/BrandIcons';
import { motion, AnimatePresence } from 'framer-motion';

export const UGCStats: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Las 4 imágenes de visualizaciones reales subidas por la clienta
  const videoShowcases = [
    {
      id: 'vid-buenavista',
      title: 'Plan Buena Vista',
      category: 'Turismo & Gastronomía',
      views: '136.1 mil',
      imageSrc: '/stats/video-buenavista-136k.jpg',
    },
    {
      id: 'vid-ahacer',
      title: 'Ruta en Moto',
      category: 'Vlog de Aventura',
      views: '44.6 mil',
      imageSrc: '/stats/video-ahacer-44k.jpg',
    },
    {
      id: 'vid-pamplona',
      title: 'Ruta Pamplona',
      category: 'Viajes & Destinos',
      views: '35.8 mil',
      imageSrc: '/stats/video-pamplona-35k.jpg',
    },
    {
      id: 'vid-pueblito',
      title: 'Pueblito Chitarero',
      category: 'Recorrido & Lugares',
      views: '32.3 mil',
      imageSrc: '/stats/video-pueblito-32k.jpg',
    },
  ];

  return (
    <section id="ugc-stats" className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      
      {/* Encabezado General de la Sección */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-ugc-yellow border border-black text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-1.5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-ugc-yellow" />
          <span>MÉTRICAS VERIFICADAS & CASOS DE ÉXITO</span>
        </div>
        <h2 className="font-chunky text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
          Alcance de <span className="text-ugc-pink drop-shadow-[2px_2px_0px_#B4D9F4]">Videos UGC</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mx-auto mt-1.5">
          Estadísticas reales de la cuenta junto a ejemplos de visualizaciones alcanzadas en videos de contenido orgánico y marcas.
        </p>
      </div>

      {/* Grid Principal: Cuadro de Estadísticas (Izquierda) + Cuadro de Visualizaciones de Videos (Derecha) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* ========================================================================= */}
        {/* COLUMNA 1 (IZQUIERDA): CUADRO DE ESTADÍSTICAS OFICIALES (TIKTOK / INSTAGRAM) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 bg-white rounded-3xl border-3 border-black p-5 sm:p-6 shadow-[8px_8px_0px_#000000] flex flex-col justify-between gap-4">
          
          <div className="space-y-4">
            
            {/* Header del Cuadro de Métricas */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b-2 border-slate-900/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                  ✦ AUDIENCIA AUDITADA 2026
                </span>
                <h3 className="font-chunky text-lg sm:text-xl text-slate-900 leading-tight">
                  Métricas TikTok & Instagram
                </h3>
              </div>

              {/* Botones para ver capturas oficiales de cada plataforma */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomedImage('/stats/tiktok-panel.jpg')}
                  className="px-2.5 py-1 rounded-full bg-slate-900 text-white font-chunky text-[10px] flex items-center gap-1 border border-black hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
                  title="Ver captura de pantalla original de TikTok"
                >
                  <Maximize2 className="w-2.5 h-2.5 text-ugc-yellow" />
                  <span>Captura TikTok</span>
                </button>

                <button
                  onClick={() => setZoomedImage('/stats/instagram-panel.jpg')}
                  className="px-2.5 py-1 rounded-full bg-ugc-pink text-white font-chunky text-[10px] flex items-center gap-1 border border-black hover:bg-pink-600 transition-colors cursor-pointer shadow-xs"
                  title="Ver captura de pantalla original de Instagram"
                >
                  <Maximize2 className="w-2.5 h-2.5" />
                  <span>Captura Instagram</span>
                </button>
              </div>
            </div>

            {/* SECCIÓN 1: TIKTOK (@sofiacruzve) */}
            <div className="space-y-2.5">
              
              {/* Encabezado TikTok */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center border border-black">
                    <TikTokIcon className="w-3 h-3 text-ugc-yellow" />
                  </div>
                  <span className="font-chunky text-xs sm:text-sm text-slate-900">
                    TikTok <span className="font-mono text-slate-500 text-xs font-normal">(@sofiacruzve)</span>
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 border border-black text-[9px] font-mono font-bold text-emerald-800">
                  ✦ 90.4% TRÁFICO "PARA TI"
                </span>
              </div>

              {/* Métrica Estrella: Visualizaciones de Video */}
              <div className="p-3 sm:p-4 rounded-2xl bg-slate-900 text-white border-2 border-black shadow-sm flex items-center justify-between gap-3">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-ugc-yellow font-bold block">
                    Visualizaciones Totales
                  </span>
                  <span className="font-chunky text-3xl sm:text-4xl text-ugc-yellow leading-none block">
                    295.8K
                  </span>
                  <span className="text-[10px] text-slate-300 font-sans mt-0.5 block">
                    Alcance orgánico de video
                  </span>
                </div>

                <div className="text-right border-l border-white/20 pl-3 shrink-0">
                  <span className="text-[9px] font-mono text-emerald-400 font-bold block">
                    ✦ Viralidad
                  </span>
                  <strong className="text-lg sm:text-xl font-chunky text-white block">
                    90.4% "Para ti"
                  </strong>
                  <span className="text-[9px] text-slate-400 block font-sans">
                    Nuevos espectadores
                  </span>
                </div>
              </div>

              {/* 4 Métricas de TikTok */}
              <div className="grid grid-cols-4 gap-2">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#fff0f6] border border-black text-center shadow-xs">
                  <Heart className="w-3 h-3 fill-ugc-pink text-ugc-pink mx-auto mb-0.5" />
                  <span className="font-chunky text-sm sm:text-base text-ugc-pink block leading-tight">
                    13.2K
                  </span>
                  <span className="text-[9px] font-bold text-slate-700 block">Me gusta</span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 border border-black text-center shadow-xs">
                  <Share2 className="w-3 h-3 text-emerald-600 mx-auto mb-0.5" />
                  <span className="font-chunky text-sm sm:text-base text-emerald-950 block leading-tight">
                    3.6K
                  </span>
                  <span className="text-[9px] font-bold text-slate-700 block">Compartidos</span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-ugc-blue/30 border border-black text-center shadow-xs">
                  <Users className="w-3 h-3 text-slate-900 mx-auto mb-0.5" />
                  <span className="font-chunky text-sm sm:text-base text-slate-900 block leading-tight">
                    3.5K
                  </span>
                  <span className="text-[9px] font-bold text-slate-700 block">Visitas Perfil</span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-ugc-yellow/30 border border-black text-center shadow-xs">
                  <MessageSquare className="w-3 h-3 text-slate-900 mx-auto mb-0.5" />
                  <span className="font-chunky text-sm sm:text-base text-slate-900 block leading-tight">
                    300
                  </span>
                  <span className="text-[9px] font-bold text-slate-700 block">Comentarios</span>
                </div>
              </div>

            </div>

            {/* SEPARADOR SUTIL ENTRE PLATAFORMAS */}
            <div className="w-full border-t border-dashed border-slate-300" />

            {/* SECCIÓN 2: INSTAGRAM (@sofiacruz0) */}
            <div className="space-y-2.5">
              
              {/* Encabezado Instagram */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-ugc-pink flex items-center justify-center border border-black text-white">
                    <InstagramIcon className="w-3 h-3" />
                  </div>
                  <span className="font-chunky text-xs sm:text-sm text-slate-900">
                    Instagram <span className="font-mono text-slate-500 text-xs font-normal">(@sofiacruz0)</span>
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-pink-100 border border-black text-[9px] font-mono font-bold text-pink-800">
                  ✦ +257.2% CRECIMIENTO AUDIENCIA
                </span>
              </div>

              {/* Métrica Estrella Instagram */}
              <div className="p-3 sm:p-4 rounded-2xl bg-[#FAF4E6] border-2 border-black shadow-sm flex items-center justify-between gap-3">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-ugc-berry font-bold block">
                    Rendimiento 90 Días
                  </span>
                  <span className="font-chunky text-3xl sm:text-4xl text-ugc-pink leading-none block">
                    33,716
                  </span>
                  <span className="text-[10px] text-slate-600 font-sans mt-0.5 block">
                    Reproducciones totales en la cuenta
                  </span>
                </div>

                <div className="text-right border-l border-black/15 pl-3 shrink-0">
                  <span className="text-[9px] font-mono text-emerald-700 font-bold block">
                    +257.2% Crecimiento
                  </span>
                  <strong className="text-lg sm:text-xl font-chunky text-slate-900 block">
                    4,776 Espectadores
                  </strong>
                  <span className="text-[9px] text-slate-500 block font-sans">
                    Cuentas únicas alcanzadas
                  </span>
                </div>
              </div>

              {/* Desglose por Formato en Instagram */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 sm:p-2.5 rounded-xl bg-ugc-pink/15 border border-black text-center shadow-xs">
                  <span className="text-[9px] font-mono font-bold text-ugc-pink uppercase block">
                    Historias
                  </span>
                  <span className="font-chunky text-base sm:text-lg text-ugc-pink block leading-tight mt-0.5">
                    22K
                  </span>
                  <span className="text-[9px] text-slate-500 block">Vistas</span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-ugc-blue/30 border border-black text-center shadow-xs">
                  <span className="text-[9px] font-mono font-bold text-sky-800 uppercase block">
                    Publicaciones
                  </span>
                  <span className="font-chunky text-base sm:text-lg text-slate-900 block leading-tight mt-0.5">
                    7.5K
                  </span>
                  <span className="text-[9px] text-slate-500 block">Vistas</span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-ugc-yellow/30 border border-black text-center shadow-xs">
                  <span className="text-[9px] font-mono font-bold text-amber-800 uppercase block">
                    Reels
                  </span>
                  <span className="font-chunky text-base sm:text-lg text-slate-900 block leading-tight mt-0.5">
                    4K
                  </span>
                  <span className="text-[9px] text-slate-500 block">Reproducciones</span>
                </div>
              </div>

            </div>

          </div>

          {/* Pie del Cuadro de Estadísticas */}
          <div className="pt-3 border-t-2 border-slate-900/10 flex items-center justify-between text-xs text-slate-600 font-sans">
            <span className="flex items-center gap-1.5 font-bold text-emerald-800 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Estadísticas nativas del perfil de Sofía Cruz</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Datos auditados 2026
            </span>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* COLUMNA 2 (DERECHA): IMÁGENES DE LAS VISUALIZACIONES DE VIDEOS REALES */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 bg-white rounded-3xl border-3 border-black p-5 sm:p-7 shadow-[8px_8px_0px_#000000] flex flex-col justify-between">
          
          <div>
            {/* Header del Cuadro de Videos */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-slate-900/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-ugc-pink font-bold block">
                  VIDEOS CON ALTO IMPACTO
                </span>
                <h3 className="font-chunky text-lg sm:text-xl text-slate-900 leading-tight">
                  Visualizaciones por Video
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-ugc-yellow border border-black font-mono text-[10px] font-bold text-slate-900 shadow-xs">
                4 Muestras
              </span>
            </div>

            {/* Grid 2x2 de las 4 Muestras de Videos con sus Visualizaciones Reales */}
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
              {videoShowcases.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setZoomedImage(vid.imageSrc)}
                  className="flex flex-col items-center group cursor-pointer"
                  title="Toca para ver la imagen en grande"
                >
                  {/* Tarjeta de Miniatura del Video */}
                  <div className="relative w-full aspect-[9/12] sm:aspect-[9/12.5] rounded-2xl overflow-hidden border-2 border-black bg-slate-950 shadow-[3px_3px_0px_#000000] group-hover:-translate-y-1 group-hover:shadow-[5px_5px_0px_#000000] transition-all">
                    
                    {/* Imagen real subida por la clienta */}
                    <img
                      src={vid.imageSrc}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay inferior con el ícono de reproducción y visualizaciones */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-2 text-center pointer-events-none">
                      <div className="inline-flex items-center gap-1 text-white font-chunky text-xs sm:text-sm drop-shadow-[1px_1px_2px_#000]">
                        <Play className="w-3 h-3 fill-white" />
                        <span>{vid.views}</span>
                      </div>
                    </div>

                    {/* Botón flotante para ver en grande */}
                    <div className="absolute top-2 right-2 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3" />
                    </div>

                  </div>

                  {/* Título pequeño debajo */}
                  <span className="font-chunky text-xs text-slate-900 mt-1.5 text-center leading-tight truncate w-full">
                    {vid.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 text-center truncate w-full">
                    {vid.category}
                  </span>

                </div>
              ))}
            </div>
          </div>

          {/* Subtítulo interactivo debajo */}
          <div className="pt-3 mt-4 border-t-2 border-slate-900/10 text-center">
            <span className="text-[11px] font-mono text-slate-500 font-medium flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-ugc-pink" />
              <span>Toca cualquier imagen para ampliar en alta resolución</span>
            </span>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL LIGHTBOX: VER CAPTURAS O VIDEOS EN ALTA RESOLUCIÓN */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative max-w-sm sm:max-w-md max-h-[90vh] bg-white rounded-3xl border-4 border-black shadow-[10px_10px_0px_#000] p-3 flex flex-col items-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-ugc-pink text-white border-2 border-black hover:bg-pink-600 transition-colors cursor-pointer shadow-sm"
                aria-label="Cerrar vista previa"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full max-h-[80vh] overflow-y-auto rounded-2xl border-2 border-black/20">
                <img
                  src={zoomedImage}
                  alt="Captura de estadísticas verificadas"
                  className="w-full h-auto object-contain select-none"
                />
              </div>

              <div className="w-full flex items-center justify-between pt-3 px-1 text-xs text-slate-700">
                <span className="font-chunky text-xs text-slate-900">
                  ✨ Verificado Oficial · Sofía Cruz UGC
                </span>
                <button
                  onClick={() => setZoomedImage(null)}
                  className="px-3 py-1 rounded-full bg-ugc-yellow border border-black font-chunky text-[11px] text-slate-900 cursor-pointer"
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
