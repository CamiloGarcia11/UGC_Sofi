import React, { useState, useRef } from 'react';
import { 
  Compass, 
  CalendarDays, 
  PenTool, 
  MessageSquareCheck, 
  Sparkles, 
  LineChart, 
  Search, 
  Layers, 
  Send, 
  BarChart, 
  CheckCircle2, 
  Shield, 
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CMService } from '../../../types/cm';

const CM_SERVICES: CMService[] = [
  {
    id: 'srv-strategy',
    icon: 'Compass',
    title: 'Estrategia Digital & Posicionamiento',
    description: 'Definimos de qué hablaremos, qué le gusta a tu público y qué hace tu competencia para que tu marca se destaque y genere confianza.',
    deliverables: [
      'Perfil de tu cliente ideal (quién es, qué le gusta y qué necesita)',
      'Revisión de 5 marcas competidoras para saber qué les funciona mejor',
      'Definición de los 4 temas principales de los que hablaremos cada mes',
      'Estilo y tono de comunicación que representará a tu marca'
    ]
  },
  {
    id: 'srv-calendar',
    icon: 'CalendarDays',
    title: 'Plan y Calendario Mensual',
    description: 'Organizamos todas tus publicaciones con semanas de anticipación para que tus redes nunca se queden vacías ni improvisemos a última hora.',
    deliverables: [
      'Calendario visual donde verás tus publicaciones con días de anticipación',
      'Guiones e ideas claras para que sepas qué se va a decir y mostrar',
      'Publicación en los días y horas donde tu público está más activo',
      'Aprobación previa contigo antes de publicar cualquier contenido'
    ]
  },
  {
    id: 'srv-copywriting',
    icon: 'PenTool',
    title: 'Textos que Enganchan & Venden',
    description: 'Redacción de textos atractivos que atrapan la atención de la gente, resuelven sus dudas y los invitan a comprar.',
    deliverables: [
      'Descripciones que enganchan a la gente para leer hasta el final y comentar',
      'Frases de inicio atractivas e invitaciones claras a comprar o escribir',
      'Palabras de búsqueda para que la gente encuentre tu cuenta con facilidad',
      'Historias entretenidas que hacen que tu marca se sienta humana y cercana'
    ]
  },
  {
    id: 'srv-community',
    icon: 'MessageSquareCheck',
    title: 'Atención de Mensajes & Comunidad',
    description: 'Respondemos rápido a las dudas de las personas que te escriben, cuidamos la reputación de tu negocio y enviamos a los compradores a tu WhatsApp.',
    deliverables: [
      'Respuestas en menos de 1 hora para no dejar enfriar a ningún cliente',
      'Cuidado diario de comentarios para mantener una imagen impecable',
      'Envío de las personas interesadas directamente a tu WhatsApp de ventas',
      'Interacción con otras cuentas para atraer nuevos seguidores al perfil'
    ]
  },
  {
    id: 'srv-profile',
    icon: 'Sparkles',
    title: 'Mejora Completa de tu Perfil',
    description: 'Organizamos tu foto, descripción y botones para que cualquier persona que entre a tu perfil entienda en 3 segundos qué vendes y cómo comprarte.',
    deliverables: [
      'Texto de presentación claro que explica qué vendes y por qué elegirte',
      'Portadas de historias destacadas (precios, envíos, opiniones y catálogo)',
      'Botón directo en tu perfil para que la gente entre a tu tienda o chat',
      'Foto de perfil profesional y nombre de usuario fácil de recordar'
    ]
  },
  {
    id: 'srv-analytics',
    icon: 'LineChart',
    title: 'Reportes Claros de Resultados',
    description: 'Números fáciles de entender, sin palabras raras ni enredos. Te mostramos cuánta gente nueva llegó y cuántos clientes te escribieron.',
    deliverables: [
      'Reporte mensual en PDF fácil de leer y entender',
      'Resumen de cuántas personas vieron tu cuenta y cuántas te escribieron',
      'Llamada mensual de 30 minutos para revisar avances y nuevas metas',
      'Consejos y mejoras para seguir creciendo el siguiente mes'
    ]
  }
];

const CM_PHASES = [
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
    deliverable: 'Tus redes activas y clientes atendidos de lunes a viernes'
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

export const CMStrategyHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'methodology'>('services');
  const strategyScrollRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: 'left' | 'right') => {
    if (strategyScrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      strategyScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'CalendarDays': return CalendarDays;
      case 'PenTool': return PenTool;
      case 'MessageSquareCheck': return MessageSquareCheck;
      case 'Sparkles': return Sparkles;
      case 'LineChart': return LineChart;
      default: return Compass;
    }
  };

  return (
    <section id="cm-strategy-hub" className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 bg-white text-slate-900 border-t-2 border-b-2 border-cm-chocolate/10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cm-blue border-2 border-cm-chocolate shadow-[2px_2px_0px_#3C2722] text-cm-chocolate text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-cm-burgundy" />
            <span>GESTIÓN PROFESIONAL & RESULTADOS REALES</span>
          </div>
          
          <h2 className="font-editorialSerif text-3xl sm:text-4xl text-cm-chocolate tracking-tight">
            Servicios & Metodología Estratégica
          </h2>
          <p className="text-slate-600 text-xs sm:text-[13px] font-medium max-w-md mx-auto leading-relaxed">
            Una estructura clara para que tus redes sociales crezcan con coherencia, orden y atracción constante de clientes.
          </p>
        </div>

        {/* Interactive Segmented Switcher & Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-3.5 sm:px-4 py-2 rounded-2xl font-editorialSerif font-bold text-xs uppercase tracking-wider border-2 border-cm-chocolate transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-cm-burgundy text-white shadow-sticker-burgundy -translate-y-0.5'
                  : 'bg-[#FAF5EA] text-cm-chocolate hover:bg-cm-blue shadow-sm'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>6 Servicios Estratégicos</span>
            </button>

            <button
              onClick={() => setActiveTab('methodology')}
              className={`px-3.5 sm:px-4 py-2 rounded-2xl font-editorialSerif font-bold text-xs uppercase tracking-wider border-2 border-cm-chocolate transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'methodology'
                  ? 'bg-cm-burgundy text-white shadow-sticker-burgundy -translate-y-0.5'
                  : 'bg-[#FAF5EA] text-cm-chocolate hover:bg-cm-blue shadow-sm'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Metodología en 4 Fases</span>
            </button>
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-600 font-mono hidden sm:inline">
              ← Desliza horizontal →
            </span>
            <button
              onClick={() => scrollTrack('left')}
              className="p-2 rounded-full bg-white hover:bg-cm-yellow text-cm-chocolate border-2 border-cm-chocolate shadow-[2px_2px_0px_#3C2722] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Anterior"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTrack('right')}
              className="p-2 rounded-full bg-white hover:bg-cm-yellow text-cm-chocolate border-2 border-cm-chocolate shadow-[2px_2px_0px_#3C2722] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Siguiente"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab 1: 6 Strategic Services (Horizontal Slider Track) */}
        <AnimatePresence mode="wait">
          {activeTab === 'services' ? (
            <motion.div
              key="cm-services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div 
                ref={strategyScrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-1 px-1 no-scrollbar scroll-smooth"
              >
                {CM_SERVICES.map((service) => {
                  const Icon = getIcon(service.icon);
                  return (
                    <div 
                      key={service.id}
                      className="shrink-0 w-[275px] sm:w-[310px] md:w-[330px] snap-center relative rounded-[26px] bg-[#FAF5EA] border-2 border-cm-chocolate p-4 sm:p-5 flex flex-col justify-between shadow-sticker-burgundy hover:shadow-editorial transition-all duration-300 group"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-white border-2 border-cm-chocolate flex items-center justify-center text-cm-burgundy shadow-sm mb-3">
                          <Icon className="w-5 h-5" />
                        </div>

                        <h3 className="font-editorialSerif text-base sm:text-lg font-bold text-cm-chocolate mb-1.5 group-hover:text-cm-burgundy transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-xs text-slate-700 leading-relaxed mb-3 font-medium">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-cm-chocolate/15 space-y-1">
                        <span className="text-[10px] font-mono font-bold text-cm-burgundy uppercase tracking-wider block">
                          Entregables clave:
                        </span>
                        {service.deliverables.map((item, i) => (
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
                <span className="w-1.5 h-1.5 rounded-full bg-cm-burgundy animate-ping" />
                <span>Desliza para explorar los 6 servicios estratégicos de Community Manager</span>
              </div>
            </motion.div>
          ) : (
            /* Tab 2: 4 Methodology Phases (Horizontal Slider Track) */
            <motion.div
              key="cm-methodology"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div 
                ref={strategyScrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-1 px-1 no-scrollbar scroll-smooth"
              >
                {CM_PHASES.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className="shrink-0 w-[270px] sm:w-[295px] md:w-[310px] snap-center relative rounded-[26px] bg-[#FAF5EA] border-2 border-cm-chocolate p-4 sm:p-5 flex flex-col justify-between shadow-sticker-burgundy hover:shadow-editorial transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-editorialSerif text-2xl font-bold text-cm-burgundy">
                            {p.phase}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-cm-chocolate text-slate-800 shadow-sm">
                            <Clock className="w-3 h-3 text-cm-burgundy" />
                            {p.timeframe}
                          </span>
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-white border-2 border-cm-chocolate flex items-center justify-center text-cm-burgundy shadow-sm mb-2.5">
                          <Icon className="w-5 h-5" />
                        </div>

                        <h3 className="font-editorialSerif text-base font-bold text-cm-chocolate mb-1.5 group-hover:text-cm-burgundy transition-colors">
                          {p.title}
                        </h3>

                        <p className="text-xs text-slate-700 leading-relaxed mb-3 font-medium">
                          {p.description}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-cm-chocolate/15">
                        <span className="text-[10px] font-mono font-bold text-cm-burgundy uppercase tracking-wider block mb-0.5">
                          Entregable:
                        </span>
                        <p className="text-[11px] font-bold text-slate-900 leading-tight">
                          {p.deliverable}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cm-burgundy animate-ping" />
                <span>Desliza para ver las 4 fases de la metodología de trabajo</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
