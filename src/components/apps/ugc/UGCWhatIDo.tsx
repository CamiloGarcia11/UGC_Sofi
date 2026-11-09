import React from 'react';
import { Sparkles, Video, Scissors } from 'lucide-react';

export const UGCWhatIDo: React.FC = () => {
  return (
    <section id="ugc-what-i-do" className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* Header de Sección */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-pink/15 border border-ugc-pink text-ugc-berry text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-1.5">
          <Sparkles className="w-3 h-3 text-ugc-pink" />
          <span>SERVICIOS & FORMATOS</span>
        </div>
        <h2 className="font-chunky text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
          Lo Que <span className="text-ugc-pink drop-shadow-[2px_2px_0px_#B4D9F4]">Hago</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto mt-1.5">
          Estrategias y contenido orgánico pensado para captar miradas y generar confianza en redes sociales.
        </p>
      </div>

      {/* Grid de 2 Cuadros Compactos (Menos saturado y optimizado para móvil) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Cuadro 1: Producción & Estrategia */}
        <div className="bg-white rounded-3xl border-3 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-ugc-pink text-white flex items-center justify-center border-2 border-black shadow-sm shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-chunky text-lg sm:text-xl text-slate-900 leading-tight">
                Producción & Estrategia
              </h3>
              <span className="text-[11px] font-mono font-bold text-ugc-pink">
                Formatos dinámicos & ganchos virales
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">
            Grabación en alta calidad con iluminación cuidada y ganchos en los primeros 3 segundos, mostrando los beneficios reales de tu producto con captions persuasivos alineados a tu marca.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {[
              'Videos estilo reseña', 
              'Unboxings', 
              'Tutoriales & Demos', 
              'GRWM - Rutinas',
              'Ganchos virales (Hooks)',
              'Captions persuasivos'
            ].map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 rounded-full bg-[#FBF8EF] border border-black font-chunky text-[10px] sm:text-[11px] text-slate-800 shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Cuadro 2: Edición & Contenido Dinámico */}
        <div className="bg-white rounded-3xl border-3 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-ugc-yellow text-slate-900 flex items-center justify-center border-2 border-black shadow-sm shrink-0">
              <Scissors className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <h3 className="font-chunky text-lg sm:text-xl text-slate-900 leading-tight">
                Edición & Contenido Dinámico
              </h3>
              <span className="text-[11px] font-mono font-bold text-amber-800">
                Listos para pautar o publicar
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">
            Postproducción ágil en formato vertical 9:16 con subtítulos dinámicos, audio nítido y narración espontánea basada en tendencias actuales de TikTok e Instagram.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {[
              'Formato vertical 9:16', 
              'Subtítulos y transiciones', 
              'Audio nítido & música',
              'Tendencias TikTok & Reels',
              'Testimonios reales',
              'Estética limpia'
            ].map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 rounded-full bg-ugc-yellow/25 border border-black font-chunky text-[10px] sm:text-[11px] text-slate-900 shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
