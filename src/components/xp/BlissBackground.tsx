import React from 'react';
import { Monitor, Heart, Sparkles, Code2, ExternalLink } from 'lucide-react';

export const BlissBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* 1. Bliss Sky & Hillscape (Pure SVG Landscape) */}
      <svg
        className="absolute inset-0 w-full h-full object-cover"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky Gradient */}
          <linearGradient id="blissSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#196fe6" />
            <stop offset="35%" stopColor="#4395fc" />
            <stop offset="65%" stopColor="#7dbcfd" />
            <stop offset="85%" stopColor="#b4dcff" />
            <stop offset="100%" stopColor="#d8edff" />
          </linearGradient>

          {/* Far Hills Gradient */}
          <linearGradient id="farHill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ea827" />
            <stop offset="60%" stopColor="#3d8f1e" />
            <stop offset="100%" stopColor="#2b6b12" />
          </linearGradient>

          {/* Mid Hill Gradient */}
          <linearGradient id="midHill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#75ce2d" />
            <stop offset="30%" stopColor="#63b524" />
            <stop offset="70%" stopColor="#489416" />
            <stop offset="100%" stopColor="#387710" />
          </linearGradient>

          {/* Front Vibrant Hill Gradient */}
          <linearGradient id="frontHill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8be238" />
            <stop offset="25%" stopColor="#76cc2c" />
            <stop offset="60%" stopColor="#55a51a" />
            <stop offset="100%" stopColor="#3d8311" />
          </linearGradient>

          {/* Cloud Radial Gradients */}
          <radialGradient id="cloudGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sky Background */}
        <rect width="1920" height="1080" fill="url(#blissSky)" />

        {/* Fluffy Bliss Clouds */}
        <g opacity="0.88">
          <ellipse cx="420" cy="220" rx="220" ry="60" fill="url(#cloudGlow)" />
          <ellipse cx="500" cy="200" rx="160" ry="70" fill="url(#cloudGlow)" />
          <ellipse cx="360" cy="230" rx="140" ry="50" fill="url(#cloudGlow)" />

          <ellipse cx="1400" cy="180" rx="280" ry="65" fill="url(#cloudGlow)" />
          <ellipse cx="1520" cy="160" rx="190" ry="75" fill="url(#cloudGlow)" />
          <ellipse cx="1280" cy="190" rx="160" ry="55" fill="url(#cloudGlow)" />

          <ellipse cx="980" cy="310" rx="180" ry="40" fill="url(#cloudGlow)" opacity="0.7" />
        </g>

        {/* Far Background Hill */}
        <path
          d="M-50,680 Q450,520 950,630 T1980,560 L1980,1080 L-50,1080 Z"
          fill="url(#farHill)"
        />

        {/* Mid Rolling Hill */}
        <path
          d="M-50,750 Q520,580 1150,690 Q1550,770 1980,620 L1980,1080 L-50,1080 Z"
          fill="url(#midHill)"
        />

        {/* Front Iconic Bliss Wave Hill */}
        <path
          d="M-50,820 Q320,670 780,710 Q1220,750 1620,660 Q1820,620 1980,640 L1980,1080 L-50,1080 Z"
          fill="url(#frontHill)"
        />
      </svg>

      {/* 2. UGC Brand Stickers & CRT Display Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* Top-Left Brand Title Badge */}
        <div className="absolute top-12 left-8 md:left-14 pointer-events-auto transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="relative inline-block">
            <div className="absolute top-1.5 left-1.5 w-full h-full bg-black rounded-xl" />
            <div className="relative px-4 py-2 bg-ugc-pink border-2 border-black rounded-xl text-white shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-ugc-yellow rounded-full border border-black animate-ping" />
                <h1 className="font-chunky text-sm md:text-base tracking-wide uppercase text-white drop-shadow-[1px_1px_0px_#000]">
                  // PORTAFOLIO CREATIVO
                </h1>
              </div>
            </div>
          </div>

          <div className="relative mt-2 -ml-2 inline-block">
            <div className="px-3 py-1 bg-ugc-yellow border-2 border-black text-slate-900 font-sans text-xs font-bold uppercase transform rotate-2 rounded-lg shadow-sticker">
              ✨ Sofía Cruz · Creadora UGC & CM
            </div>
          </div>
        </div>

        {/* CRT Retro Monitor Frame with UGC Brand Identity & Avatar */}
        <div className="hidden lg:block absolute bottom-28 right-16 pointer-events-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="w-80 bg-[#FBF8EF] p-3.5 rounded-2xl border-4 border-black shadow-[8px_8px_0px_#000000]">
            
            {/* Monitor Top Bevel */}
            <div className="flex items-center justify-between pb-2 px-1 text-xs">
              <span className="flex items-center gap-1.5 font-chunky text-slate-900 tracking-wide">
                <Monitor className="w-4 h-4 text-ugc-pink" />
                <span>ESTUDIO CREATIVO</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-[10px] font-bold text-slate-500 uppercase">LIVE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-ugc-pink border border-black animate-pulse" />
              </div>
            </div>

            {/* Inner CRT Screen in UGC Styling */}
            <div className="relative rounded-xl overflow-hidden bg-white border-3 border-black p-4 shadow-inner">
              {/* Subtle CRT Scanline overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)',
                }}
              />

              {/* Decorative brand sparkles inside screen */}
              <div className="absolute top-2 left-2 text-ugc-yellow text-base font-bold select-none pointer-events-none">
                ✦
              </div>
              <div className="absolute top-2 right-2 text-ugc-pink text-base font-bold select-none pointer-events-none">
                ✦
              </div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-2.5">
                {/* Avatar with UGC brand borders & real portrait */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-ugc-yellow p-1 border-2 border-black shadow-[2px_2px_0px_#000] overflow-hidden">
                    <img 
                      src="/sofia-presentacion.png" 
                      alt="Sofía Cruz" 
                      className="w-full h-full rounded-full object-cover object-[center_43%]"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-2 px-2 py-0.5 rounded-full bg-ugc-pink text-white font-chunky text-[10px] border border-black shadow-[1px_1px_0px_#000]">
                    ★ UGC
                  </span>
                </div>

                {/* Name & Subtitle in UGC Typography */}
                <div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-chunky text-2xl text-ugc-pink tracking-tight drop-shadow-[1px_2px_0px_#B4D9F4]">
                      Sofía
                    </span>
                    <span className="font-script text-2xl text-ugc-berry transform -rotate-6 inline-block">
                      Cruz
                    </span>
                  </div>
                  <p className="text-[11px] font-sans font-bold text-slate-700 tracking-wide mt-0.5">
                    UGC Creator & Community Manager
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-ugc-yellow border border-black text-[10px] font-sans font-bold text-slate-900 shadow-[1px_1px_0px_#000] flex items-center gap-1">
                    ✨ #Reels9:16
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-ugc-blue border border-black text-[10px] font-sans font-bold text-slate-900 shadow-[1px_1px_0px_#000] flex items-center gap-1">
                    💖 #Estrategia
                  </span>
                </div>
              </div>
            </div>

            {/* Monitor Stand Bottom Buttons */}
            <div className="flex items-center justify-between pt-2.5 px-2">
              <div className="flex gap-1.5 items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-ugc-pink border border-black shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-ugc-yellow border border-black shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-ugc-blue border border-black shadow-sm" />
              </div>
              <span className="text-[10px] font-sans text-slate-600 font-bold tracking-wider">
                Sofía Cruz · 2026
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Floating Stickers on the Grass */}
        <div className="hidden md:flex absolute bottom-20 left-1/3 items-center gap-3 pointer-events-auto">
          <div className="px-3.5 py-1.5 bg-ugc-cream border-2 border-black rounded-full shadow-sticker font-sans text-xs font-bold text-slate-900 flex items-center gap-1.5 transform -rotate-3 hover:scale-105 transition-transform">
            <Heart className="w-3.5 h-3.5 text-ugc-pink fill-ugc-pink" />
            <span>100% Contenido Auténtico</span>
          </div>

          <div className="px-3.5 py-1.5 bg-ugc-blue text-slate-900 border-2 border-black rounded-md shadow-sticker font-chunky text-xs font-bold flex items-center gap-1.5 transform rotate-2 hover:scale-105 transition-transform">
            <Sparkles className="w-3.5 h-3.5 text-ugc-pink" />
            <span>Portafolio 2026</span>
          </div>

          <a
            href="https://visionwebcl.pages.dev"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 bg-white hover:bg-slate-50 border-2 border-black rounded-md shadow-sticker font-mono text-xs font-bold text-slate-900 flex items-center gap-1.5 transform -rotate-1 hover:scale-105 transition-transform cursor-pointer"
            title="Sitio web desarrollado por Vision Web"
          >
            <Code2 className="w-3.5 h-3.5 text-ugc-pink" />
            <span>Desarrollado por <strong className="text-ugc-pink">Vision Web</strong></span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

      </div>
    </div>
  );
};
