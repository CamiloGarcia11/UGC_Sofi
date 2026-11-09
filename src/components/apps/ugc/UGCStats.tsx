import React from 'react';
import { Eye, TrendingUp, Users, Award, MessageSquare, Share2 } from 'lucide-react';
import { TikTokIcon } from '../../common/BrandIcons';

export const UGCStats: React.FC = () => {
  const metrics = [
    {
      icon: Eye,
      value: '158.8K',
      label: 'Vistas Totales',
      sub: 'Alcance acumulado TikTok',
      bgColor: 'bg-ugc-pink/15',
      textColor: 'text-ugc-pink',
    },
    {
      icon: TrendingUp,
      value: '15.6K',
      label: 'Pico Máximo',
      sub: 'Vistas en un solo video',
      bgColor: 'bg-ugc-yellow/30',
      textColor: 'text-slate-900',
    },
    {
      icon: Share2,
      value: '723',
      label: 'Compartidos',
      sub: 'Factor viral & recomendación',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-900',
    },
    {
      icon: Users,
      value: '2.7K',
      label: 'Visitas al Perfil',
      sub: 'Tráfico de alto interés',
      bgColor: 'bg-ugc-blue/30',
      textColor: 'text-slate-900',
    },
    {
      icon: Award,
      value: '5.8K',
      label: 'Me Gusta',
      sub: 'Reacciones orgánicas',
      bgColor: 'bg-[#fff0f6]',
      textColor: 'text-ugc-pink',
    },
    {
      icon: MessageSquare,
      value: '237',
      label: 'Comentarios',
      sub: 'Comunidad e interacción real',
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-950',
    },
  ];

  return (
    <section id="ugc-stats" className="py-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl border-3 border-black shadow-[8px_8px_0px_#000000] p-6 sm:p-8">
        
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b-2 border-slate-900/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-ugc-yellow border border-black text-[10px] font-mono font-bold uppercase mb-1.5">
              <TikTokIcon className="w-3.5 h-3.5 text-ugc-yellow" />
              <span>MÉTRICAS REALES COMPROBADAS (@sofiacruzve)</span>
            </div>
            <h2 className="font-chunky text-2xl sm:text-4xl text-slate-900">
              Alcance de <span className="text-ugc-pink drop-shadow-[1px_1px_0px_#B4D9F4]">Videos UGC</span>
            </h2>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-500 font-medium max-w-xs sm:text-right">
            Resultados orgánicos generados conectando marcas con audiencias reales.
          </p>
        </div>

        {/* 6 Rejillas de Métricas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`p-3.5 sm:p-4 rounded-2xl ${item.bgColor} border-2 border-black shadow-sm text-center flex flex-col items-center justify-between transition-transform hover:-translate-y-0.5`}
              >
                <div className="w-8 h-8 rounded-full bg-white border border-black flex items-center justify-center mb-1.5 shadow-xs">
                  <Icon className="w-4 h-4 text-slate-800" />
                </div>
                <span className={`font-chunky text-2xl sm:text-3xl block leading-tight ${item.textColor}`}>
                  {item.value}
                </span>
                <span className="text-xs font-bold text-slate-900 block mt-1 leading-tight">
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-500 font-sans block mt-0.5 leading-tight">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
