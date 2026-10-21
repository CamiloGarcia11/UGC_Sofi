import React, { useState, useRef } from 'react';
import { 
  Smile, 
  Users, 
  Camera, 
  Zap, 
  FileText, 
  Video, 
  Scissors, 
  Rocket, 
  CheckCircle2, 
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type WorkflowTab = 'process' | 'benefits';

export const UGCWorkflow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<WorkflowTab>('process');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -310 : 310;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
    <section id="ugc-workflow" className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 bg-[#FBF8EF] relative overflow-hidden text-slate-900 border-t-2 border-slate-900/10">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="p-4 sm:p-6 rounded-[28px] bg-gradient-to-tr from-[#FEF49B] via-[#FBF8EF] to-[#B4D9F4] border-2 border-black shadow-sticker inline-block w-full">
            <div className="flex items-center justify-center gap-2 text-ugc-pink font-bold text-xs sm:text-sm tracking-wider uppercase">
              <span>★</span>
              <span>ASÍ ES</span>
              <span>★</span>
            </div>

            <h2 className="font-chunky text-2xl sm:text-3xl md:text-4xl text-ugc-pink tracking-tight uppercase leading-none mt-1 drop-shadow-[1px_2px_0px_#B4D9F4]">
              TRABAJAR CONMIGO
            </h2>

            <div className="font-script text-xl sm:text-2xl text-ugc-pink mt-0.5">
              (paso a paso)
            </div>
          </div>

          <p className="text-slate-600 text-xs sm:text-[13px] font-medium max-w-md mx-auto pt-1 leading-relaxed">
            Combino psicología del consumidor, edición rítmica y narrativa persuasiva para lograr conversiones reales en menos de 5 días.
          </p>
        </div>

        {/* Interactive Segmented Switcher & Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('process')}
              className={`px-3.5 sm:px-4 py-2 rounded-2xl font-chunky text-xs uppercase tracking-wider border-2 border-black transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'process'
                  ? 'bg-ugc-pink text-white shadow-sticker -translate-y-0.5'
                  : 'bg-white text-slate-800 hover:bg-ugc-yellow shadow-sm'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>4 Pasos (Día 1 a 5)</span>
            </button>

            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-3.5 sm:px-4 py-2 rounded-2xl font-chunky text-xs uppercase tracking-wider border-2 border-black transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'benefits'
                  ? 'bg-ugc-pink text-white shadow-sticker -translate-y-0.5'
                  : 'bg-white text-slate-800 hover:bg-ugc-yellow shadow-sm'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>4 Beneficios Clave</span>
            </button>
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-600 font-mono hidden sm:inline">
              ← Desliza horizontal →
            </span>
            <button
              onClick={() => scrollTrack('left')}
              className="p-2 rounded-full bg-white hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Anterior"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTrack('right')}
              className="p-2 rounded-full bg-white hover:bg-ugc-yellow text-slate-900 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Siguiente"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Views */}
        <AnimatePresence mode="wait">
          {activeTab === 'process' ? (
            <motion.div
              key="tab-process"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {/* Horizontal Scroll Track for Steps */}
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-1 px-1 no-scrollbar scroll-smooth"
              >
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={idx}
                      className={`shrink-0 w-[270px] sm:w-[295px] snap-center relative rounded-3xl ${step.cardColor} border-2 border-black p-4 sm:p-5 flex flex-col justify-between shadow-sticker hover:shadow-[5px_5px_0px_#000] transition-all group`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-chunky text-xl sm:text-2xl text-slate-900">
                            {step.number}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-black text-slate-800 shadow-sm">
                            <Clock className="w-3 h-3 text-ugc-pink" />
                            {step.duration}
                          </span>
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-white border-2 border-black flex items-center justify-center text-ugc-pink shadow-sm mb-2.5">
                          <Icon className="w-5 h-5" />
                        </div>

                        <h3 className="font-chunky text-base text-slate-900 mb-1.5">
                          {step.title}
                        </h3>

                        <p className="text-xs text-slate-700 leading-relaxed mb-3 font-medium">
                          {step.description}
                        </p>
                      </div>

                      <div className="space-y-1 pt-2 border-t border-black/10">
                        {step.checklist.map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-800 font-medium leading-tight">
                            <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-ugc-pink animate-ping" />
                <span>Desliza para ver los 4 pasos del proceso (Día 1 al 5)</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tab-benefits"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Horizontal Scroll Track for Benefits */}
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-1 px-1 no-scrollbar scroll-smooth"
              >
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className={`shrink-0 w-[275px] sm:w-[310px] snap-center relative p-5 sm:p-6 rounded-3xl ${benefit.bgColor} border-2 border-black shadow-sticker hover:shadow-[5px_5px_0px_#000] transition-all flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-11 h-11 rounded-xl bg-white border-2 border-black flex items-center justify-center text-ugc-pink shadow-sm">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white border border-black text-slate-800 shadow-sm">
                            {benefit.badge}
                          </span>
                        </div>

                        <h3 className="font-chunky text-lg text-slate-900 mb-0.5">
                          {benefit.title}
                        </h3>
                        <p className="text-xs text-ugc-pink font-bold mb-2">
                          {benefit.subtitle}
                        </p>
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-ugc-pink animate-ping" />
                <span>Desliza para ver los 4 beneficios clave de trabajar con Sofía</span>
              </div>

              {/* UGC vs Traditional Comparison Mini Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-black shadow-sticker flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center md:text-left">
                  <span className="text-[10px] font-mono font-bold text-ugc-pink uppercase tracking-wider block">
                    PUBLICIDAD TRADICIONAL VS UGC
                  </span>
                  <h4 className="font-chunky text-sm sm:text-base text-slate-900">
                    ¿Por qué el contenido de Sofía convierte más?
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    La gente ya no cree en comerciales perfectos. Prefiere ver personas reales usando productos reales.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-center p-2.5 rounded-xl bg-red-50 border border-red-200">
                    <span className="text-[10px] font-mono font-bold text-red-600 block">Comercial Típico</span>
                    <span className="text-xs font-bold text-slate-700">1.2% Conversión</span>
                  </div>
                  <div className="text-center p-2.5 rounded-xl bg-emerald-50 border-2 border-emerald-500 shadow-sm">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 block">UGC de Sofía</span>
                    <span className="text-xs font-bold text-emerald-900">4.8x Más Ventas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
