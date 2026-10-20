import React from 'react';
import { 
  Search, 
  Layers, 
  Send, 
  BarChart, 
  CheckCircle2, 
  Shield, 
  Clock 
} from 'lucide-react';

export const CMMethodology: React.FC = () => {
  const phases = [
    {
      phase: '01',
      title: 'Revisión & Diagnóstico Completo',
      timeframe: 'Semana 1',
      icon: Search,
      description: 'Revisamos qué tiene tu cuenta hoy, quiénes te siguen, cómo se responden los mensajes y qué están haciendo las marcas que compiten contigo.',
      deliverable: 'Informe con mejoras rápidas para aplicar desde el primer día'
    },
    {
      phase: '02',
      title: 'Plan de Contenidos & Estilo',
      timeframe: 'Semana 2',
      icon: Layers,
      description: 'Elegimos los temas principales de los que hablaremos, la forma en que se comunicará tu marca y preparamos el calendario de publicaciones del primer mes.',
      deliverable: 'Calendario completo del primer mes aprobado contigo'
    },
    {
      phase: '03',
      title: 'Publicación & Atención Diaria',
      timeframe: 'Semana 3 en adelante',
      icon: Send,
      description: 'Publicamos en los mejores horarios, redactamos textos llamativos que venden y respondemos comentarios y mensajes para atender a tus clientes.',
      deliverable: 'Tus redes activas y clientes atendidos 7 días a la semana'
    },
    {
      phase: '04',
      title: 'Resultados & Mejoras Continuas',
      timeframe: 'Mensual continuo',
      icon: BarChart,
      description: 'Revisamos cuántas personas nuevas llegaron, qué publicaciones gustaron más y qué ajustes haremos para seguir vendiendo más el siguiente mes.',
      deliverable: 'Reporte mensual en PDF fácil de leer + llamada de 30 min'
    }
  ];

  return (
    <section id="cm-methodology" className="py-20 px-4 sm:px-8 md:px-12 bg-white text-slate-900 border-t-2 border-b-2 border-cm-chocolate/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cm-blue border-2 border-cm-chocolate shadow-[2px_2px_0px_#3C2722] text-cm-chocolate text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-cm-burgundy" />
            <span>Paso a Paso Transparente</span>
          </div>
          
          <h2 className="font-editorialSerif text-3xl sm:text-4xl text-cm-chocolate tracking-tight">
            Cómo Trabajamos con tu Marca
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Una estructura clara de 4 pasos para que siempre sepas qué se está haciendo en tus redes, sin improvisaciones y con comunicación constante.
          </p>
        </div>

        {/* Phase Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="relative rounded-[30px] bg-[#F8F5E6] border-2 border-cm-chocolate p-6 flex flex-col justify-between shadow-sticker-burgundy hover:shadow-editorial transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorialSerif text-3xl font-bold text-cm-burgundy/80 group-hover:text-cm-burgundy transition-colors">
                      {p.phase}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white border border-cm-chocolate text-slate-800 shadow-sm">
                      <Clock className="w-3 h-3 text-cm-burgundy" />
                      {p.timeframe}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-cm-chocolate flex items-center justify-center text-cm-burgundy shadow-sm mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-editorialSerif text-lg font-bold text-cm-chocolate mb-2 group-hover:text-cm-burgundy transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-700 leading-relaxed mb-4 font-medium">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t-2 border-cm-chocolate/10">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-cm-burgundy block font-bold mb-1">
                    Entregable de Fase:
                  </span>
                  <div className="flex items-start gap-1.5 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cm-burgundy shrink-0 mt-0.5" />
                    <span>{p.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
