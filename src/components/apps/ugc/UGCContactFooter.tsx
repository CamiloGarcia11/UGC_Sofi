import React from 'react';
import { MessageCircle, Mail, Sparkles, Code2, ExternalLink } from 'lucide-react';
import { InstagramIcon, TikTokIcon } from '../../common/BrandIcons';

export const UGCContactFooter: React.FC = () => {
  return (
    <footer id="ugc-contact" className="pt-12 pb-16 px-4 sm:px-6 md:px-8 bg-white border-t-2 border-black/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Banner "Trabajemos Juntos" */}
        <div className="bg-[#FAF4E6] rounded-3xl border-3 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] text-center mb-10">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-yellow border-2 border-black font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-ugc-pink" />
            <span>CONTACTO DIRECTO · 2026</span>
          </div>

          <h2 className="font-editorialSerif italic font-bold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-none mb-1">
            Trabajemos <span className="font-script text-ugc-pink not-italic text-5xl sm:text-7xl -ml-1">juntos</span>
          </h2>

          <p className="font-chunky text-base sm:text-xl text-slate-800 mt-2">
            Tu marca + mi creatividad: <span className="text-ugc-pink drop-shadow-[1px_1px_0px_#B4D9F4]">¡Contenido épico!</span>
          </p>

          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto mt-2 mb-6">
            Escríbeme para cotizar tu paquete de videos, revisar fechas de entrega o planear una campaña mensual.
          </p>

          {/* Botones de Canales Directos */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/573023399168?text=Hola%20Sof%C3%ADa,%20quiero%20cotizar%20un%20proyecto%20de%20contenido%20UGC"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-chunky text-xs uppercase tracking-wider border-2 border-black shadow-sticker flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp: 3023399168</span>
            </a>

            <a
              href="https://www.instagram.com/sofiacruz0?rpxt=eGo2ODZtbXU2dWM0"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-white hover:bg-ugc-pink hover:text-white text-slate-900 font-chunky text-xs border-2 border-black shadow-sticker flex items-center gap-2 transition-colors cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4 text-ugc-pink" />
              <span>@sofiacruz0</span>
            </a>

            <a
              href="https://www.tiktok.com/@sofiacruzve?_r=1&_t=ZS-9AisJbpLF0n"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-chunky text-xs border-2 border-black shadow-sticker flex items-center gap-2 transition-colors cursor-pointer"
            >
              <TikTokIcon className="w-4 h-4 text-ugc-yellow" />
              <span>@sofiacruzve</span>
            </a>

            <a
              href="mailto:anasofiacruzvega@gmail.com"
              className="px-4 py-2.5 rounded-full bg-ugc-yellow hover:bg-yellow-300 text-slate-900 font-chunky text-xs border-2 border-black shadow-sticker flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-ugc-pink" />
              <span>anasofiacruzvega@gmail.com</span>
            </a>
          </div>

        </div>

        {/* Mini Copyright & Web Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="font-chunky text-base text-ugc-pink">Sofía</span>
            <span className="font-script text-lg text-ugc-yellow -ml-1">Cruz</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-widest pl-2">
              · Portafolio UGC 2026
            </span>
          </div>

          <p className="text-[11px] text-slate-500">
            © 2026 Sofía Cruz UGC · Todos los derechos reservados.
          </p>

          <a
            href="https://visionwebcl.pages.dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-mono text-[10px] font-bold transition-transform hover:scale-105 shadow-sm group cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-ugc-yellow" />
            <span>Desarrollado por <strong className="text-ugc-pink group-hover:underline">Vision Web</strong></span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>
        </div>

      </div>
    </footer>
  );
};
