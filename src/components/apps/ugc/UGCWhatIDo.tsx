import React from 'react';
import { Sparkles, Video, Target, HeartHandshake, Scissors } from 'lucide-react';

export const UGCWhatIDo: React.FC = () => {
  return (
    <section id="ugc-what-i-do" className="py-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      {/* Header de Sección */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-pink/15 border border-ugc-pink text-ugc-berry text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-2">
          <Sparkles className="w-3 h-3 text-ugc-pink" />
          <span>SERVICIOS & FORMATOS</span>
        </div>
        <h2 className="font-chunky text-3xl sm:text-5xl text-slate-900 tracking-tight">
          Lo Que <span className="text-ugc-pink drop-shadow-[2px_2px_0px_#B4D9F4]">Hago</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mx-auto mt-2">
          Estrategias y contenido orgánico pensado para captar miradas y generar confianza en redes sociales.
        </p>
      </div>

      {/* Grid de 4 Bloques (Estructura idéntica al Canva, concisa y sin saturar) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        
        {/* Bloque 1: Producción de Contenido */}
        <div className="bg-white rounded-3xl border-3 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-ugc-pink text-white flex items-center justify-center border-2 border-black shadow-sm shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-chunky text-lg sm:text-xl text-slate-900 leading-tight">
                Producción de Contenido
              </h3>
              <span className="text-[11px] font-mono font-bold text-ugc-pink">
                Formatos dinámicos y orgánicos
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">
            Grabación en alta calidad con iluminación natural o de estudio, mostrando el uso real y beneficios de tu producto.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Videos estilo reseña', 'Unboxings', 'Tutoriales & Demos', 'GRWM - Rutinas'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full bg-[#FBF8EF] border border-black font-chunky text-[11px] text-slate-800 shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bloque 2: Estrategia de Contenido */}
        <div className="bg-white rounded-3xl border-3 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-ugc-yellow text-slate-900 flex items-center justify-center border-2 border-black shadow-sm shrink-0">
              <Target className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <h3 className="font-chunky text-lg sm:text-xl text-slate-900 leading-tight">
                Estrategia de Contenido
              </h3>
              <span className="text-[11px] font-mono font-bold text-amber-700">
                Ganchos y retención visual
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">
            Diseño de captions atractivos, ganchos de apertura en los primeros 3 segundos y llamados a la acción claros alineados con la identidad de tu marca.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Ganchos virales (Hooks)', 'Captions persuasivos', 'Estructura de retención', 'Llamados a la acción (CTA)'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full bg-ugc-yellow/30 border border-black font-chunky text-[11px] text-slate-900 shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bloque 3: Contenido Personalizado */}
        <div className="bg-white rounded-3xl border-3 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-ugc-blue text-slate-900 flex items-center justify-center border-2 border-black shadow-sm shrink-0">
              <HeartHandshake className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <h3 className="font-chunky text-lg sm:text-xl text-slate-900 leading-tight">
                Contenido Personalizado
              </h3>
              <span className="text-[11px] font-mono font-bold text-sky-800">
                Cero acartonado · Conexión humana
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">
            Videos basados en tendencias actuales de TikTok e Instagram. Testimonios y opiniones sinceras que derriban la resistencia del consumidor y generan confianza.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Tendencias TikTok & Reels', 'Testimonios reales', 'Recomendación sincera', 'Lenguaje cercano'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full bg-ugc-blue/30 border border-black font-chunky text-[11px] text-slate-900 shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bloque 4: Edición y Entregables */}
        <div className="bg-white rounded-3xl border-3 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-[#fff0f6] text-ugc-pink flex items-center justify-center border-2 border-black shadow-sm shrink-0">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-chunky text-lg sm:text-xl text-slate-900 leading-tight">
                Edición y Entregables
              </h3>
              <span className="text-[11px] font-mono font-bold text-ugc-pink">
                Listos para pautar o publicar
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">
            Postproducción profesional con cortes ágiles, audio masterizado, subtítulos legibles y formatos verticales optimizados para celular.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Formato vertical 9:16', 'Subtítulos y transiciones', 'Estética limpia y estética', 'Audio nítido & música'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full bg-ugc-pink/10 border border-black font-chunky text-[11px] text-slate-900 shadow-xs"
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
