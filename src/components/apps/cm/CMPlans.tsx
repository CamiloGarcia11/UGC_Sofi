import React, { useState, useRef } from 'react';
import { 
  Check, 
  Calendar, 
  Sparkles, 
  MessageCircle, 
  Building,
  Download,
  Eye,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { CMPlan } from '../../../types/cm';

const CM_PLANS: CMPlan[] = [
  {
    id: 'plan-basico',
    name: 'Plan Básico',
    tier: 'Gestión 1 Red Social',
    badge: 'INICIO ESTRATÉGICO',
    priceEstimate: '$450.000 COP',
    frequency: '/ mes',
    summary: 'Gestión estratégica de 1 red social, diseño de publicaciones y redacción de copys comerciales para mantener tu cuenta activa y profesional.',
    features: [
      'Gestión estratégica de 1 red social (Instagram o TikTok)',
      'Parrilla mensual de 10 a 12 piezas de contenido',
      'Diseño gráfico profesional de publicaciones',
      'Redacción de copys comerciales orientados a tu público',
      'Calendario mensual entregado para tu previa aprobación',
      'Atención y seguimiento personalizado'
    ]
  },
  {
    id: 'plan-estandar',
    name: 'Plan Estándar',
    tier: 'Gestión 1 a 2 Redes Sociales',
    badge: '★ EL MÁS RECOMENDADO ★',
    recommended: true,
    priceEstimate: '$700.000 COP',
    frequency: '/ mes',
    summary: 'Gestión completa de 1 a 2 redes sociales con parrilla ampliada, programación anticipada y atención de comunidad.',
    features: [
      'Gestión de 1 a 2 redes sociales activas',
      'Parrilla completa de 15 a 18 piezas mensuales',
      'Diseño visual, videos y textos comerciales',
      'Programación anticipada en mejores horarios',
      'Respuesta básica a mensajes directos y comentarios (L-V)',
      'Revisión mensual de métricas y crecimiento'
    ]
  },
  {
    id: 'plan-completo',
    name: 'Plan Completo',
    tier: 'Gestión Integral + Visita Presencial',
    badge: 'SERVICIO INTEGRAL CON PRODUCCIÓN',
    priceEstimate: '$850.000 COP',
    frequency: '/ mes',
    summary: 'Gestión integral de 2 redes sociales, parrilla mensual ampliada y 1 visita presencial al mes para grabación y dirección de video en sitio (Cúcuta).',
    features: [
      'Gestión integral de 2 redes sociales',
      'Parrilla mensual de 15 a 20 piezas de contenido',
      '1 Visita presencial al mes para grabación y dirección en sitio',
      'Producción de material audiovisual in situ',
      'Gestión de comunidad y respuesta a clientes (L-V)',
      'Aprobación de calendario previo y reporte mensual'
    ]
  }
];

export const CMPlans: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-estandar');
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingCompany, setBookingCompany] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');
  const [showBookingSuccess, setShowBookingSuccess] = useState<boolean>(false);
  const plansScrollRef = useRef<HTMLDivElement>(null);

  const scrollPlans = (direction: 'left' | 'right') => {
    if (plansScrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      plansScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: CMPlan) => {
    setSelectedPlanId(plan.id);

    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#891731', '#B4D9F4', '#3C2722', '#F8F5E6']
    });

    const msg = encodeURIComponent(
      `¡Hola Sofía Cruz! Me interesa solicitar una propuesta formal para el ${plan.name} (${plan.priceEstimate}/mes) para mi empresa.`
    );
    window.open(`https://wa.me/573023399168?text=${msg}`, '_blank');
  };

  const handleDownloadMediaKit = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#891731', '#B4D9F4', '#FEF49B', '#3C2722']
    });

    const link = document.createElement('a');
    link.href = '/media-kit-community-manager-2026.pdf';
    link.download = 'Media_Kit_Community_Manager_Sofia_Cruz_2026.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingCompany) return;

    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#891731', '#B4D9F4', '#3C2722', '#F8F5E6']
    });

    setShowBookingSuccess(true);
  };

  return (
    <section id="cm-plans" className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 bg-[#F8F5E6] text-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cm-blue border-2 border-cm-chocolate shadow-[2px_2px_0px_#3C2722] text-cm-chocolate text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-cm-burgundy" />
            <span>Tarifas Oficiales 2026 · Precios en Pesos Colombianos (COP)</span>
          </div>
          
          <h2 className="font-editorialSerif text-3xl sm:text-4xl md:text-5xl text-cm-chocolate tracking-tight">
            Planes de Manejo de Redes
          </h2>
        </div>

        {/* Plans Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {CM_PLANS.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedPlanId(p.id);
                  const el = document.getElementById(`cm-plan-${p.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }}
                className={`px-3.5 py-1.5 rounded-xl font-editorialSerif font-bold text-xs uppercase tracking-wider border-2 border-cm-chocolate transition-all cursor-pointer ${
                  selectedPlanId === p.id
                    ? 'bg-cm-burgundy text-white shadow-sticker-burgundy -translate-y-0.5'
                    : 'bg-white text-cm-chocolate hover:bg-cm-blue shadow-sm'
                }`}
              >
                <span>{p.name}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-600 font-mono hidden sm:inline">
              ← Desliza planes →
            </span>
            <button
              onClick={() => scrollPlans('left')}
              className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-cm-yellow text-cm-chocolate border-2 border-cm-chocolate shadow-[2px_2px_0px_#3C2722] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Plan anterior"
              aria-label="Plan anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollPlans('right')}
              className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-cm-yellow text-cm-chocolate border-2 border-cm-chocolate shadow-[2px_2px_0px_#3C2722] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Plan siguiente"
              aria-label="Plan siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Plans Horizontal Carousel Track */}
        <div 
          ref={plansScrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-3 px-1 no-scrollbar scroll-smooth mb-2"
        >
          {CM_PLANS.map((plan) => {
            const isRec = plan.recommended;
            const isSelected = selectedPlanId === plan.id;

            return (
              <div
                id={`cm-plan-${plan.id}`}
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`shrink-0 w-[285px] sm:w-[330px] md:w-[350px] snap-center relative rounded-[32px] p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer border-2 border-cm-chocolate ${
                  isSelected ? 'ring-2 ring-cm-burgundy' : ''
                } ${
                  isRec
                    ? 'bg-white shadow-[6px_6px_0px_#891731] ring-4 ring-cm-burgundy/20'
                    : isSelected
                    ? 'bg-white shadow-[6px_6px_0px_#3C2722]'
                    : 'bg-[#fffdf9] hover:bg-white shadow-sticker-burgundy'
                }`}
              >
                {/* Floating Recommended Tag */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cm-burgundy text-white text-[10px] font-editorialSerif font-bold tracking-wider uppercase border-2 border-cm-chocolate shadow-sm flex items-center gap-1 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-cm-yellow" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cm-burgundy font-bold block">
                      {plan.tier}
                    </span>
                    <h3 className="font-editorialSerif text-xl sm:text-2xl font-bold text-cm-chocolate mt-0.5">{plan.name}</h3>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">
                    {plan.summary}
                  </p>

                  {/* Price Banner */}
                  <div className="mb-4 p-3.5 rounded-2xl bg-cm-blue/30 border-2 border-cm-chocolate">
                    <span className="text-[10px] text-slate-600 font-mono uppercase block mb-0.5 font-bold">Honorarios Mensuales:</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-editorialSerif text-2xl sm:text-3xl font-extrabold text-cm-burgundy">{plan.priceEstimate}</span>
                      <span className="text-xs text-slate-600 font-mono">{plan.frequency}</span>
                    </div>
                    <span className="text-[10px] text-emerald-800 block mt-1 font-bold font-mono">
                      ✓ Aprobación previa de calendario & soporte directo
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-bold text-slate-800 font-mono uppercase tracking-wider block">
                      Alcance del Servicio:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-cm-burgundy/15 text-cm-burgundy flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectPlan(plan);
                  }}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer border-2 border-cm-chocolate ${
                    isRec
                      ? 'bg-cm-burgundy hover:bg-[#6e1227] text-white shadow-sticker-burgundy'
                      : 'bg-cm-blue hover:bg-sky-300 text-cm-chocolate shadow-sticker-burgundy'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Solicitar Propuesta para {plan.name}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Media Kit PDF Banner for Community Manager */}
        <div className="mb-14 p-6 rounded-[32px] bg-white border-2 border-cm-chocolate shadow-editorial flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cm-yellow border border-cm-chocolate text-[10px] font-mono font-bold uppercase tracking-wider text-cm-chocolate">
              <FileText className="w-3 h-3 text-cm-burgundy" />
              <span>Documento Oficial en PDF</span>
            </div>
            <h4 className="font-editorialSerif text-xl sm:text-2xl text-cm-chocolate font-bold">
              Media Kit & Tarifario de Community Manager 2026
            </h4>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="/media-kit-community-manager-2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-cm-blue hover:bg-sky-200 border-2 border-cm-chocolate text-cm-chocolate font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-transform active:translate-x-0.5 active:translate-y-0.5"
            >
              <Eye className="w-3.5 h-3.5 text-cm-burgundy" />
              <span>Ver Online</span>
            </a>
            <button
              onClick={handleDownloadMediaKit}
              className="px-5 py-2.5 rounded-xl bg-cm-burgundy hover:bg-[#6e1227] border-2 border-cm-chocolate text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sticker-burgundy transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4 text-cm-yellow" />
              <span>Descargar PDF</span>
            </button>
          </div>
        </div>

        {/* Términos y Condiciones del Servicio */}
        <div id="cm-terms" className="mb-16 rounded-[28px] bg-[#FFF9ED] border-2 border-cm-chocolate p-6 sm:p-8 text-xs text-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-cm-chocolate/15">
            <FileText className="w-4 h-4 text-cm-burgundy" />
            <span className="font-editorialSerif text-base text-cm-chocolate font-bold uppercase tracking-wide">
              Términos y Condiciones del Servicio de Community Manager
            </span>
          </div>

          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs no-scrollbar pb-1">
            <div className="shrink-0 w-[240px] sm:w-auto p-3.5 bg-white rounded-2xl border border-cm-chocolate/20">
              <strong className="text-cm-chocolate block mb-1">📅 Aprobación de Contenido:</strong>
              Se entrega un calendario de publicaciones al inicio de cada periodo para revisión y aprobación en un plazo máximo de 48 horas.
            </div>

            <div className="shrink-0 w-[240px] sm:w-auto p-3.5 bg-white rounded-2xl border border-cm-chocolate/20">
              <strong className="text-cm-chocolate block mb-1">📍 Visitas Presenciales (Cúcuta):</strong>
              Si se requiere desplazamiento presencial al local o sitio de trabajo para producción de video, cada visita adicional tiene un valor de <strong>$60.000 COP</strong>.
            </div>

            <div className="shrink-0 w-[240px] sm:w-auto p-3.5 bg-white rounded-2xl border border-cm-chocolate/20">
              <strong className="text-cm-chocolate block mb-1">⏰ Horarios de Atención:</strong>
              La gestión de comunidad y respuesta a mensajes se realiza de lunes a viernes en horario de oficina acordado.
            </div>

            <div className="shrink-0 w-[240px] sm:w-auto p-3.5 bg-white rounded-2xl border border-cm-chocolate/20">
              <strong className="text-cm-chocolate block mb-1">📣 Publicidad Paga:</strong>
              Los presupuestos, configuración o gestión de pauta publicitaria en plataformas de anuncios se cobran por separado.
            </div>

            <div className="shrink-0 w-[240px] sm:w-auto p-3.5 bg-white rounded-2xl border border-cm-chocolate/20 md:col-span-2 lg:col-span-2">
              <strong className="text-cm-chocolate block mb-1">💳 Forma de Pago:</strong>
              50% de anticipo al iniciar el periodo de trabajo y 50% restante a mitad de mes o contra entrega acordada.
            </div>
          </div>
        </div>

        {/* Schedule Consultation Booking Form Section */}
        <div id="cm-schedule" className="rounded-[36px] bg-white border-2 border-cm-chocolate p-6 sm:p-10 shadow-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3 py-1 rounded-full bg-cm-blue text-cm-chocolate text-xs font-bold border border-cm-chocolate">
                Sesión de Diagnóstico 1 a 1
              </span>
              <h3 className="font-editorialSerif text-2xl sm:text-3xl font-extrabold text-cm-chocolate tracking-tight">
                Agenda una Asesoría Gratuita de 25 Minutos
              </h3>

              <div className="space-y-2 pt-2 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cm-burgundy" />
                  <span>Revisión de tu perfil, tus textos y por qué no te están escribiendo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cm-burgundy" />
                  <span>Comparativa con tus principales competidores</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cm-burgundy" />
                  <span>Recomendación honesta del plan que más te conviene</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-6">
              {showBookingSuccess ? (
                <div className="p-8 rounded-[28px] bg-cm-blue/30 border-2 border-cm-chocolate text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cm-burgundy text-white flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-editorialSerif text-xl font-bold text-cm-chocolate">¡Solicitud Recibida con Éxito!</h4>
                  <p className="text-xs text-slate-700 font-medium">
                    Gracias, <strong>{bookingName}</strong>. Sofía Cruz se pondrá en contacto contigo hoy mismo para coordinar la sesión estratégica de tu marca <strong>{bookingCompany}</strong>.
                  </p>
                  <button
                    onClick={() => setShowBookingSuccess(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-white border border-cm-chocolate text-xs font-bold text-cm-chocolate hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Agendar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleScheduleSubmit} className="space-y-3 p-6 rounded-[28px] bg-[#F8F5E6] border-2 border-cm-chocolate shadow-sm">
                  <div>
                    <label className="text-[11px] font-mono text-cm-chocolate uppercase tracking-wider block mb-1 font-bold">
                      Nombre & Cargo:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Mendoza · Director de Marketing"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-cm-chocolate/40 text-xs text-slate-900 focus:outline-none focus:border-cm-burgundy font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-cm-chocolate uppercase tracking-wider block mb-1 font-bold">
                      Empresa / Marca & Perfil (Instagram / LinkedIn):
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. NovaHealth · @novahealth.app"
                      value={bookingCompany}
                      onChange={(e) => setBookingCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-cm-chocolate/40 text-xs text-slate-900 focus:outline-none focus:border-cm-burgundy font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-cm-chocolate uppercase tracking-wider block mb-1 font-bold">
                      Preferencia de Horario (Opcional):
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Mañanas (10:00 AM - 12:00 PM)"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-cm-chocolate/40 text-xs text-slate-900 focus:outline-none focus:border-cm-burgundy font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-cm-burgundy hover:bg-[#6e1227] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sticker-burgundy transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer mt-4 border-2 border-cm-chocolate"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirmar Solicitud de Auditoría</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
