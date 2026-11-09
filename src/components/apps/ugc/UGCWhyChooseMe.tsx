import React from 'react';
import { Heart } from 'lucide-react';

export const UGCWhyChooseMe: React.FC = () => {
  return (
    <section id="ugc-why-me" className="py-10 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl border-3 border-black shadow-[8px_8px_0px_#000000] p-6 sm:p-8">
        
        {/* Encabezado */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-pink/20 border border-black text-slate-900 text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-2">
            <Heart className="w-3.5 h-3.5 text-ugc-pink fill-ugc-pink" />
            <span>PROPUESTA DE VALOR</span>
          </div>
          <h2 className="font-editorialSerif italic font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            ¿Por qué elegirme <span className="font-script text-ugc-pink not-italic text-4xl sm:text-6xl -ml-1">como creadora UGC?</span>
          </h2>
        </div>

        {/* 4 Tags / Pilares superiores */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#FAF4E6] border-2 border-black font-chunky text-xs text-slate-900 shadow-xs">
            🌸 Estilo auténtico & girly
          </span>
          <span className="px-3.5 py-1 rounded-full bg-ugc-yellow/30 border-2 border-black font-chunky text-xs text-slate-900 shadow-xs">
            ✨ Versatilidad de formatos
          </span>
          <span className="px-3.5 py-1 rounded-full bg-ugc-blue/30 border-2 border-black font-chunky text-xs text-slate-900 shadow-xs">
            🎨 Criterio visual & estético
          </span>
          <span className="px-3.5 py-1 rounded-full bg-pink-100 border-2 border-black font-chunky text-xs text-slate-900 shadow-xs">
            🎯 Enfoque estratégico en ventas
          </span>
        </div>

        {/* Texto conciso y persuasivo */}
        <div className="space-y-3.5 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto text-center">
          <p>
            Soy una creadora apasionada por transmitir emociones reales y conectar marcas con su audiencia de forma natural, sin poses forzadas.
          </p>
          <p>
            Mi enfoque une <strong>creatividad, tendencias de redes y ganchos estratégicos</strong> para generar videos que detengan el scroll, transmitan confianza inmediata y multipliquen las ventas de tu negocio.
          </p>
          <div className="pt-2">
            <strong className="font-chunky text-base sm:text-lg text-ugc-pink drop-shadow-[1px_1px_0px_#000]">
              Tu marca merece destacar, y juntas podemos lograrlo. ✨
            </strong>
          </div>
        </div>

      </div>
    </section>
  );
};
