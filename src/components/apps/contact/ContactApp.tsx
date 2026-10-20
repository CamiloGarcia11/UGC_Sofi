import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Check, 
  Download, 
  Eye,
  Send,
  MapPin,
  Clock,
  Sparkles,
  Heart,
  Code2,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import sofiaPresentationImg from '../../../assets/sofia-presentacion.png';
import { InstagramIcon, TikTokIcon } from '../../common/BrandIcons';

export const ContactApp: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [formSent, setFormSent] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [service, setService] = useState<string>('UGC Creator (Reels / TikTok)');
  const [message, setMessage] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('anasofiacruzvega@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadMediaKit = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E33B87', '#FEF49B', '#B4D9F4', '#8B1E51']
    });

    const link = document.createElement('a');
    link.href = '/media-kit-sofia-cruz-2026.pdf';
    link.download = 'Media_Kit_Tarifas_Sofia_Cruz_2026.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCMMediaKit = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#891731', '#FAF5EA', '#B4D9F4', '#3C2722']
    });

    const link = document.createElement('a');
    link.href = '/media-kit-community-manager-2026.pdf';
    link.download = 'Media_Kit_Community_Manager_Sofia_Cruz_2026.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.5 },
      colors: ['#E33B87', '#FEF49B', '#B4D9F4']
    });

    setFormSent(true);
  };

  return (
    <div className="p-5 sm:p-7 bg-[#FBF8EF] text-slate-900 min-h-full space-y-6 font-sans selection:bg-ugc-pink selection:text-white">
      
      {/* 1. BRAND PROFILE HEADER (UGC IDENTITY) */}
      <div className="relative bg-white rounded-3xl border-3 border-black shadow-sticker p-5 sm:p-6 overflow-hidden">
        
        {/* Top Washi Tape */}
        <div className="absolute -top-3 left-8 z-10">
          <div className="px-4 py-0.5 bg-ugc-yellow/95 border border-black text-[9px] font-mono uppercase tracking-widest font-bold shadow-sm transform -rotate-1 text-slate-900">
            // SOFÍA CRUZ · CONTACTO DIRECTO
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left pt-1">
          
          {/* Creator Real Avatar with UGC Colors */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-ugc-yellow p-1 border-2 border-black shadow-[3px_3px_0px_#000] overflow-hidden">
              <img
                src={sofiaPresentationImg}
                alt="Sofía Cruz"
                className="w-full h-full rounded-full object-cover object-[center_42%]"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-ugc-pink text-white font-chunky text-[9px] border border-black shadow-sm">
              ★ DISPONIBLE
            </span>
          </div>

          {/* Name & Bio */}
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-1.5">
              <span className="font-chunky text-2xl sm:text-3xl text-ugc-pink tracking-tight drop-shadow-[1px_2px_0px_#B4D9F4]">
                Sofía
              </span>
              <span className="font-script text-2xl sm:text-3xl text-ugc-yellow -ml-0.5 drop-shadow-[1px_1px_0px_#E33B87]">
                Cruz
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-ugc-blue border border-black text-[10px] font-bold text-slate-900 ml-1">
                UGC & CM
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed max-w-lg">
              Creadora de Contenido UGC & Estratega de Redes Sociales. Conectando marcas con audiencias reales a través de formatos auténticos.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-600 pt-1 font-sans">
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-ugc-pink" /> Remoto / Global (Worldwide)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-700 font-bold">
                <Clock className="w-3.5 h-3.5" /> Agenda Abierta Q1-Q2 2026
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. SPECIALTIES TAGS (PASTEL PILLS) */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-chunky uppercase tracking-wider text-slate-800">
          <Sparkles className="w-3.5 h-3.5 text-ugc-pink" />
          <span>Especialidades de Producción:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { label: '🎬 Videos Verticales en Máxima Calidad', color: 'bg-ugc-yellow' },
            { label: '✨ Inicios que Atrapan la Atención', color: 'bg-ugc-blue' },
            { label: '📸 Sesiones de Fotos de Producto', color: 'bg-[#fff0f6]' },
            { label: '📈 Manejo de Redes Sociales (CM)', color: 'bg-ugc-yellow' },
            { label: '🛍️ Historias y Opiniones Reales', color: 'bg-ugc-blue' },
            { label: '💌 Videos Listos para Anuncios', color: 'bg-[#fff0f6]' },
          ].map((tag) => (
            <span
              key={tag.label}
              className={`px-3 py-1 rounded-full border-2 border-black text-xs font-bold text-slate-900 shadow-sm ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* 3. MEDIA KITS DOWNLOAD BANNER (UGC & COMMUNITY MANAGER) */}
      <div className="space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-chunky uppercase tracking-wider text-slate-800">
          <Heart className="w-3 h-3 fill-ugc-pink" />
          <span>Media Kits Oficiales 2026 (Descarga Directa):</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* UGC Media Kit Card */}
          <div className="p-4 rounded-2xl bg-white border-3 border-black shadow-sticker flex flex-col justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-ugc-yellow border border-black text-[9px] font-mono font-bold text-slate-900">
                <span>🎬</span> CREADORA UGC
              </div>
              <h4 className="font-chunky text-sm sm:text-base text-slate-900 leading-tight">
                Media Kit UGC & Tarifario 2026
              </h4>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Videos verticales orgánicos y pauta (Reels/TikTok) desde $80.000 COP hasta combos de $250.000 COP.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
              <a
                href="/media-kit-sofia-cruz-2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-50 border-2 border-black text-slate-900 font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm transition-transform active:translate-x-0.5 active:translate-y-0.5"
              >
                <Eye className="w-3.5 h-3.5 text-ugc-pink" />
                <span>Ver Online</span>
              </a>
              <button
                onClick={handleDownloadMediaKit}
                className="flex-1 py-2 px-3 rounded-xl bg-ugc-yellow hover:bg-yellow-300 border-2 border-black text-slate-900 font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-sticker transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-ugc-pink" />
                <span>Descargar</span>
              </button>
            </div>
          </div>

          {/* CM Media Kit Card */}
          <div className="p-4 rounded-2xl bg-white border-3 border-black shadow-sticker flex flex-col justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FAF5EA] border border-black text-[9px] font-mono font-bold text-[#891731]">
                <span>📈</span> COMMUNITY MANAGER
              </div>
              <h4 className="font-chunky text-sm sm:text-base text-slate-900 leading-tight">
                Media Kit Community Manager 2026
              </h4>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Planes mensuales (Básico $450K, Estándar $700K y Completo $850K COP) + visitas presenciales en Cúcuta.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
              <a
                href="/media-kit-community-manager-2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-50 border-2 border-black text-slate-900 font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm transition-transform active:translate-x-0.5 active:translate-y-0.5"
              >
                <Eye className="w-3.5 h-3.5 text-[#891731]" />
                <span>Ver Online</span>
              </a>
              <button
                onClick={handleDownloadCMMediaKit}
                className="flex-1 py-2 px-3 rounded-xl bg-[#891731] hover:bg-[#6b1226] border-2 border-black text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-sticker transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#FAF5EA]" />
                <span>Descargar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. DIRECT QUICK CHANNELS (WHATSAPP, INSTAGRAM, TIKTOK & EMAIL) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        
        {/* WhatsApp Channel */}
        <a
          href="https://wa.me/573023399168?text=Hola%20Sof%C3%ADa,%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto%20de%20contenido%20UGC"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-2xl bg-white border-3 border-black shadow-sticker hover:bg-emerald-50 transition-colors flex items-center gap-3.5 group"
        >
          <div className="w-11 h-11 rounded-xl bg-[#25D366] border-2 border-black flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div className="truncate">
            <span className="font-chunky text-sm text-slate-900 block leading-tight">
              WhatsApp Directo
            </span>
            <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 mt-0.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              +57 302 339 9168
            </span>
          </div>
        </a>

        {/* Instagram Channel */}
        <a
          href="https://www.instagram.com/sofiacruz0?rpxt=eGo2ODZtbXU2dWM0"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-2xl bg-white border-3 border-black shadow-sticker hover:bg-pink-50 transition-colors flex items-center gap-3.5 group"
        >
          <div className="w-11 h-11 rounded-xl bg-ugc-pink border-2 border-black flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <InstagramIcon className="w-6 h-6" />
          </div>
          <div className="truncate">
            <span className="font-chunky text-sm text-slate-900 block leading-tight">
              Instagram Oficial
            </span>
            <span className="text-xs text-ugc-pink font-mono font-bold truncate block mt-0.5">
              @sofiacruz0
            </span>
          </div>
        </a>

        {/* TikTok Channel */}
        <a
          href="https://www.tiktok.com/@sofiacruzve?_r=1&_t=ZS-9AisJbpLF0n"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-2xl bg-white border-3 border-black shadow-sticker hover:bg-slate-100 transition-colors flex items-center gap-3.5 group"
        >
          <div className="w-11 h-11 rounded-xl bg-slate-900 border-2 border-black flex items-center justify-center text-ugc-yellow shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <TikTokIcon className="w-6 h-6" />
          </div>
          <div className="truncate">
            <span className="font-chunky text-sm text-slate-900 block leading-tight">
              TikTok Oficial
            </span>
            <span className="text-xs text-slate-800 font-mono font-bold truncate block mt-0.5">
              @sofiacruzve
            </span>
          </div>
        </a>

        {/* Copy Email Channel */}
        <button
          onClick={handleCopyEmail}
          className="p-4 rounded-2xl bg-white border-3 border-black shadow-sticker hover:bg-sky-50 transition-colors flex items-center gap-3.5 text-left cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-ugc-blue border-2 border-black flex items-center justify-center text-slate-900 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Mail className="w-6 h-6 text-slate-900" />
          </div>
          <div className="truncate">
            <span className="font-chunky text-sm text-slate-900 block leading-tight">
              {copiedEmail ? '¡Correo Copiado!' : 'Correo Electrónico'}
            </span>
            <span className="text-xs text-ugc-pink font-mono font-bold truncate block mt-0.5">
              anasofiacruzvega@gmail.com
            </span>
          </div>
        </button>

      </div>

      {/* 5. QUICK QUOTE & MESSAGE FORM */}
      <div className="bg-white rounded-3xl border-3 border-black shadow-sticker p-5 sm:p-6">
        
        <div className="mb-4 space-y-1">
          <h4 className="font-chunky text-lg text-slate-900 flex items-center gap-2">
            <span>💌</span>
            <span>Cotizar Proyecto o Enviar Mensaje</span>
          </h4>
          <p className="text-xs text-slate-600 font-medium">
            Completa los datos y te responderé con propuesta personalizada en menos de 24 horas.
          </p>
        </div>

        {formSent ? (
          <div className="p-6 rounded-2xl bg-[#FBF8EF] border-2 border-black text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-black flex items-center justify-center mx-auto text-emerald-600">
              <Check className="w-6 h-6" />
            </div>
            <h5 className="font-chunky text-base text-slate-900">¡Mensaje Enviado con Éxito!</h5>
            <p className="text-xs text-slate-600 max-w-sm mx-auto font-medium">
              Gracias {name}. He recibido tu solicitud y te contactaré a <strong className="text-ugc-pink">{email}</strong> en breve.
            </p>
            <button
              onClick={() => { setFormSent(false); setMessage(''); }}
              className="mt-2 px-4 py-1.5 rounded-full bg-ugc-yellow border-2 border-black font-chunky text-xs text-slate-900"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Tu Nombre o Marca:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Aura Skin Lab / Sofía"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-ugc-pink shadow-sm placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Tu Correo de Contacto:
                </label>
                <input
                  type="email"
                  required
                  placeholder="contacto@tumarca.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-ugc-pink shadow-sm placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Tipo de Servicio Requerido:
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-ugc-pink shadow-sm"
              >
                <option value="UGC Creator (Reels / TikTok)">🎬 Paquete de Videos UGC (Reels / TikTok)</option>
                <option value="Fotografía UGC & Lifestyle">📸 Fotografía UGC & Styling de Producto</option>
                <option value="Gestión Integral Community Manager">📈 Gestión de Redes Sociales (Community Manager)</option>
                <option value="Combo 360° UGC + Community Manager">✨ Combo 360°: Creación UGC + Gestión de Cuenta</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Detalles del Proyecto:
              </label>
              <textarea
                rows={3}
                required
                placeholder="Cuéntame brevemente sobre tu marca, el número de piezas deseadas y las fechas estimadas..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-ugc-pink shadow-sm placeholder:text-slate-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-ugc-pink hover:bg-ugc-berry text-white font-chunky text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-sticker transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Solicitud Directa</span>
            </button>
          </form>
        )}

      </div>

      {/* Mini Trust Footer & Credit */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-3 pb-1 text-[11px] text-slate-500 font-medium gap-2 border-t border-black/10 mt-2">
        <span>⚡ Respuesta garantizada en menos de 24 horas · Sofía Cruz 2026</span>
        <a
          href="https://visionwebcl.pages.dev"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-50 border border-black/30 text-slate-900 font-mono text-[10px] font-bold shadow-sm transition-transform hover:scale-105 cursor-pointer"
        >
          <Code2 className="w-3 h-3 text-ugc-pink" />
          <span>Desarrollado por <strong className="text-ugc-pink">Vision Web</strong></span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
        </a>
      </div>

    </div>
  );
};
