import React from 'react';
import { Building2, Handshake, CheckCircle } from 'lucide-react';

export const UGCBusinessAlliances: React.FC = () => {
  return (
    <section id="ugc-alliances" className="py-10 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl border-3 border-black shadow-[8px_8px_0px_#000000] p-6 sm:p-8">
        
        {/* Encabezado */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-blue/30 border border-black text-slate-900 text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-2">
            <Building2 className="w-3.5 h-3.5 text-ugc-pink" />
            <span>ALIANZAS & CONTRATOS</span>
          </div>
          <h2 className="font-editorialSerif italic font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Alianzas Comerciales <span className="font-script text-ugc-yellow not-italic text-4xl sm:text-6xl -ml-1">y Empresariales</span>
          </h2>
        </div>

        {/* Contenido conciso y directo */}
        <div className="space-y-4 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#FBF8EF] border-2 border-black flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-ugc-yellow text-slate-900 flex items-center justify-center shrink-0 border border-black font-chunky text-xs mt-0.5">
              💡
            </div>
            <p>
              El <strong>valor base por video individual</strong> es ideal para marcas que buscan una pieza puntual de contenido tipo UGC, natural, fresca y cercana para sus redes sociales.
            </p>
          </div>

          <p>
            Sin embargo, las empresas, marcas consolidadas y centros comerciales suelen trabajar con <strong>campañas más amplias, contenidos más frecuentes o estrategias de largo plazo</strong>. En esos casos, diseño <strong>esquemas personalizados</strong> porque cada proyecto tiene dinámicas, metas y requerimientos únicos.
          </p>

          <p>
            Estoy abierta a recibir propuestas directamente de directores de marca, empresarios o agencias, para construir juntos un plan de colaboración a la medida que funcione y maximice el retorno de inversión.
          </p>

          {/* 3 puntos clave */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            <div className="p-3 rounded-xl bg-ugc-pink/10 border border-black/30 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-ugc-pink shrink-0" />
              <span className="text-[11px] font-bold text-slate-900">Estrategia & Constancia</span>
            </div>
            <div className="p-3 rounded-xl bg-ugc-yellow/20 border border-black/30 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="text-[11px] font-bold text-slate-900">Contenido Auténtico</span>
            </div>
            <div className="p-3 rounded-xl bg-ugc-blue/20 border border-black/30 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-sky-700 shrink-0" />
              <span className="text-[11px] font-bold text-slate-900">Resultados Reales</span>
            </div>
          </div>
        </div>

        {/* CTA Directo */}
        <div className="mt-6 pt-5 border-t-2 border-slate-900/10 text-center">
          <a
            href="https://wa.me/573023399168?text=Hola%20Sof%C3%ADa,%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20alianza%20comercial%20o%20empresarial%20para%20mi%20marca."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-chunky text-xs uppercase tracking-wider border-2 border-black shadow-sticker transition-transform active:scale-95 cursor-pointer"
          >
            <Handshake className="w-4 h-4 text-ugc-yellow" />
            <span>Presentar Propuesta o Alianza</span>
          </a>
        </div>

      </div>
    </section>
  );
};
