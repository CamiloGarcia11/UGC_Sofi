import React from 'react';
import { 
  Smile, 
  Users, 
  Camera, 
  Zap, 
  CheckCircle, 
  XCircle
} from 'lucide-react';

export const UGCBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Smile,
      title: 'Cero Guiones Aburridos',
      subtitle: 'Naturalidad que se siente como recomendación de una amiga',
      description: 'Hablo el lenguaje de las redes sociales de hoy. Sin modismos acartonados ni teleprompters rígidos. Cada palabra busca retener la atención segundo a segundo.',
      bgColor: 'bg-ugc-yellow/60',
      badge: 'Gancho Magnético',
    },
    {
      icon: Users,
      title: 'Conexión Humana & Confianza',
      subtitle: '9.8x más persuasivo que un comercial tradicional',
      description: 'El 84% de los consumidores confía más en recomendaciones de personas reales que en cualquier publicidad corporativa de marca. El UGC derriba las defensas del usuario.',
      bgColor: 'bg-ugc-blue/60',
      badge: 'Prueba Social Real',
    },
    {
      icon: Camera,
      title: 'Producción & Audio Pro',
      subtitle: 'Grabación 4K 60fps con audio cristalino',
      description: 'Estética limpia con iluminación profesional (softbox + ring light), micrófono lavalier inalámbrico de estudio y locaciones modernas (hogar, cocina, exterior urbano, oficina).',
      bgColor: 'bg-pink-100',
      badge: 'Calidad 4K UHD',
    },
    {
      icon: Zap,
      title: 'Listos para tus Anuncios en Redes',
      subtitle: 'Diseñados para que consigas más clientes gastando menos',
      description: 'Videos en formato vertical para celular, con subtítulos grandes que se leen en silencio y 2 inicios distintos para probar cuál te trae más ventas y mensajes.',
      bgColor: 'bg-[#fff5e6]',
      badge: 'Más Ventas con Menos Gasto',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 bg-[#FBF8EF] relative overflow-hidden text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* EXACT SECTION HEADER FROM THE USER IMAGE:
            ★ ASÍ ES ★
            TRABAJAR CONMIGO
            (paso a paso)
        */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-1">
          {/* Swirl Card Container for Title (Direct reproduction of bottom-right image) */}
          <div className="p-6 sm:p-8 rounded-[36px] bg-gradient-to-tr from-[#FEF49B] via-[#FBF8EF] to-[#B4D9F4] border-2 border-black shadow-sticker inline-block w-full max-w-lg mx-auto">
            
            {/* Top Stars & ASÍ ES */}
            <div className="flex items-center justify-center gap-2 text-ugc-pink font-bold text-base sm:text-lg tracking-wider uppercase">
              <span>★</span>
              <span>ASÍ ES</span>
              <span>★</span>
            </div>

            {/* TRABAJAR CONMIGO in bold chunky letters */}
            <h2 className="font-chunky text-3xl sm:text-4xl md:text-5xl text-ugc-pink tracking-tight uppercase leading-none mt-1 drop-shadow-[1px_2px_0px_#B4D9F4]">
              TRABAJAR CONMIGO
            </h2>

            {/* (paso a paso) in cursive script */}
            <div className="font-script text-2xl sm:text-3xl text-ugc-pink mt-1">
              (paso a paso)
            </div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm font-medium pt-3 max-w-md mx-auto">
            Combino psicología del consumidor, edición rítmica y narrativa persuasiva para lograr conversiones reales en tu tienda online o negocio.
          </p>
        </div>

        {/* Benefits 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className={`relative p-6 sm:p-8 rounded-[32px] ${benefit.bgColor} border-2 border-black shadow-sticker hover:shadow-[6px_6px_0px_#000] transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-ugc-pink shadow-[2px_2px_0px_#000] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white border border-black text-slate-800 shadow-sm">
                    {benefit.badge}
                  </span>
                </div>

                <h3 className="font-chunky text-xl text-slate-900 mb-1 group-hover:text-ugc-pink transition-colors">
                  {benefit.title}
                </h3>
                <h4 className="text-xs font-bold text-ugc-pink uppercase tracking-wider mb-2">
                  {benefit.subtitle}
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Showcase (Brand Palette) */}
        <div className="rounded-[32px] bg-white border-2 border-black p-6 sm:p-8 shadow-sticker">
          <h3 className="font-chunky text-xl sm:text-2xl text-slate-900 text-center mb-6">
            Comparativa: Anuncio Tradicional vs Contenido UGC de Sofía
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tradicional */}
            <div className="p-5 rounded-2xl bg-[#fff2f2] border-2 border-red-300 space-y-3">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Publicidad Tradicional de Estudio</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✕</span> Los usuarios deslizan al instante al notar que es publicidad.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✕</span> Costos de producción elevados con semanas de postproducción.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✕</span> Falta de empatía y desconexión con audiencias jóvenes.
                </li>
              </ul>
            </div>

            {/* UGC */}
            <div className="p-5 rounded-2xl bg-ugc-yellow/40 border-2 border-black space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-ugc-pink font-bold text-sm">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>Contenido UGC de Sofía Cruz</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-800">
                <li className="flex items-center gap-2">
                  <span className="text-ugc-pink font-bold">✓</span> Se camufla perfectamente con el feed orgánico de TikTok y Reels.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-ugc-pink font-bold">✓</span> Flujo ágil con entregas listas para testear en menos de 72 horas.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-ugc-pink font-bold">✓</span> Genera comentarios genuinos y preguntas de compra directas.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
