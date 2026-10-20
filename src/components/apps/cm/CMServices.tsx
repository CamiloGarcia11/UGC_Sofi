import React from 'react';
import { 
  Compass, 
  CalendarDays, 
  PenTool, 
  MessageSquareCheck, 
  Sparkles, 
  LineChart, 
  CheckCircle2,
  Star
} from 'lucide-react';
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

export const CMServices: React.FC = () => {
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
    <section id="cm-services" className="py-16 px-4 sm:px-8 md:px-12 bg-white text-slate-900 border-t-2 border-b-2 border-cm-chocolate/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cm-blue border-2 border-cm-chocolate shadow-[2px_2px_0px_#3C2722] text-cm-chocolate text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-cm-burgundy fill-cm-burgundy" />
            <span>Portafolio de Soluciones Estratégicas</span>
          </div>
          
          <h2 className="font-editorialSerif text-3xl sm:text-4xl text-cm-chocolate tracking-tight">
            Servicios Integrales de Social Media Management
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Cada servicio está diseñado para aliviar la carga operativa de tu empresa mientras aceleramos tu autoridad y adquisición orgánica.
          </p>
        </div>

        {/* Services 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CM_SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="rounded-[28px] bg-[#F8F5E6] border-2 border-cm-chocolate p-6 flex flex-col justify-between shadow-sticker-burgundy hover:shadow-editorial transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-cm-chocolate flex items-center justify-center text-cm-burgundy mb-5 shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-editorialSerif text-xl font-bold text-cm-chocolate mb-2 group-hover:text-cm-burgundy transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-700 leading-relaxed mb-5 font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-cm-chocolate/10 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-cm-burgundy block font-bold">
                    Entregables Clave:
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cm-burgundy shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
