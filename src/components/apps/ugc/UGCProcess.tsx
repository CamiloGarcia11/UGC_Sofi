import React from 'react';
import { 
  FileText, 
  Video, 
  Scissors, 
  Rocket, 
  CheckCircle2, 
  Clock,
  Sparkles
} from 'lucide-react';

export const UGCProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Conocemos tu Producto',
      duration: 'Día 1',
      icon: FileText,
      cardColor: 'bg-ugc-yellow/60',
      description: 'Hablamos de tu marca, qué problema soluciona tu producto y por qué la gente lo necesita. Definimos las frases iniciales que enganchan y el llamado final a comprar.',
      checklist: [
        'Preguntas rápidas y sencillas sobre tu producto',
        '3 ideas distintas para mostrarlo y venderlo',
        'Aprobación de los guiones antes de grabar'
      ]
    },
    {
      number: '02',
      title: 'Grabación Real & Estética',
      duration: 'Día 2-3',
      icon: Video,
      cardColor: 'bg-ugc-blue/50',
      description: 'Recibo tu producto en casa y grabo en espacios luminosos y bonitos. Registro cómo se usa, detalles en primer plano, texturas y reacciones auténticas.',
      checklist: [
        'Grabación en máxima calidad (iPhone 15 Pro Max)',
        'Voz clara y limpia con micrófono inalámbrico',
        'Espacios reales con luz natural y estética cuidada'
      ]
    },
    {
      number: '03',
      title: 'Edición Ágil & Entretenida',
      duration: 'Día 3-4',
      icon: Scissors,
      cardColor: 'bg-pink-100',
      description: 'Edito el video con ritmo dinámico sin momentos aburridos. Añado subtítulos grandes y fáciles de leer en el celular, efectos de sonido y la música más viral.',
      checklist: [
        'Subtítulos llamativos palabra por palabra',
        'Acercamientos y efectos que mantienen la vista fija',
        'Sonido optimizado para escucharse perfecto en el móvil'
      ]
    },
    {
      number: '04',
      title: 'Entrega Lista para Publicar',
      duration: 'Día 4-5',
      icon: Rocket,
      cardColor: 'bg-[#FEF49B]',
      description: 'Te entrego los archivos en una carpeta de Google Drive ordenada: videos finales verticales para celular, comienzos alternativos para probar cuál vende más y tomas extra.',
      checklist: [
        'Videos en alta definición sin marcas de agua',
        'Varios inicios para probar el que mejor funcione',
        '1 ronda de ajustes y cambios incluida'
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 bg-white text-slate-900 border-t-2 border-b-2 border-slate-900/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-blue border-2 border-black shadow-[2px_2px_0px_#000] text-slate-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-ugc-pink" />
            <span>Fácil, Rápido y Sin Enredos</span>
          </div>
          
          <h2 className="font-chunky text-3xl sm:text-4xl text-ugc-pink tracking-tight drop-shadow-[1px_1px_0px_#B4D9F4]">
            Proceso de Creación Paso a Paso
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Desde la primera idea hasta el video final listo para publicar en tus redes o en anuncios en menos de 5 días.
          </p>
        </div>

        {/* Timeline Grid (Scrapbook Stickers aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className={`relative rounded-[32px] ${step.cardColor} border-2 border-black p-6 flex flex-col justify-between shadow-sticker hover:shadow-[6px_6px_0px_#000] transition-all duration-300 group hover:-translate-y-1`}
              >
                {/* Simulated Tape Sticker on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/70 border border-black/30 backdrop-blur-sm transform -rotate-2" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-chunky text-3xl text-ugc-pink/80 group-hover:text-ugc-pink transition-colors">
                      {step.number}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white border border-black text-slate-800 shadow-sm">
                      <Clock className="w-3 h-3 text-ugc-pink" />
                      {step.duration}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-ugc-pink shadow-[2px_2px_0px_#000] mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-chunky text-lg text-slate-900 mb-2 group-hover:text-ugc-pink transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-700 leading-relaxed mb-4 font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="pt-3 border-t-2 border-black/10 space-y-1.5">
                  {step.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-1.5 text-[11px] text-slate-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ugc-pink shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-[28px] bg-[#FBF8EF] border-2 border-black shadow-sticker flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-chunky text-base text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <span className="text-ugc-pink">★</span>
              Garantía de Satisfacción & Comunicación 100% Fluida
            </h4>
            <p className="text-xs text-slate-600 font-medium">
              Mantengo comunicación directa por WhatsApp con cada marca durante cada etapa para que nunca tengas dudas sobre tus fechas de entrega.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-4 py-2 rounded-full bg-ugc-yellow text-slate-900 border-2 border-black font-bold text-xs uppercase shadow-sm">
              Entrega Garantizada en 72h
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
