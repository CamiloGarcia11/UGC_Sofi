import React from 'react';
import { Sparkles, Star } from 'lucide-react';

interface BrandPlaceholder {
  id: string;
  name: string;
  category: string;
  bgColor: string;
  textColor: string;
  imgSrc?: string;
}

const PLACEHOLDER_BRANDS: BrandPlaceholder[] = [
  { id: 'b1', name: 'Belleza & Glow', category: 'Cosméticos', bgColor: 'bg-ugc-pink/20', textColor: 'text-ugc-berry' },
  { id: 'b2', name: 'Moda Urbana', category: 'Boutique', bgColor: 'bg-ugc-yellow/30', textColor: 'text-amber-900' },
  { id: 'b3', name: 'Skincare Natural', category: 'Cuidado Facial', bgColor: 'bg-ugc-blue/30', textColor: 'text-sky-900' },
  { id: 'b4', name: 'Joyas & Accesorios', category: 'Joyería', bgColor: 'bg-purple-100', textColor: 'text-purple-900' },
  { id: 'b5', name: 'Gourmet & Café', category: 'Gastronomía', bgColor: 'bg-orange-100', textColor: 'text-orange-950' },
  { id: 'b6', name: 'Cuidado Capilar', category: 'Cabello', bgColor: 'bg-emerald-100', textColor: 'text-emerald-950' },
  { id: 'b7', name: 'Lifestyle & Tech', category: 'Tecnología', bgColor: 'bg-slate-100', textColor: 'text-slate-900' },
  { id: 'b8', name: 'Calzado & Bolsos', category: 'Accesorios', bgColor: 'bg-pink-100', textColor: 'text-pink-900' },
  { id: 'b9', name: 'Marcas Aliadas', category: 'Colaboraciones', bgColor: 'bg-yellow-100', textColor: 'text-amber-950' },
];

export const UGCBrands: React.FC = () => {
  return (
    <section id="ugc-brands" className="py-10 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* Encabezado */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ugc-yellow/40 border border-black text-slate-900 text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-2 shadow-xs">
          <Star className="w-3 h-3 text-ugc-pink fill-ugc-pink" />
          <span>PORTAFOLIO COMERCIAL</span>
        </div>
        <h2 className="font-chunky text-3xl sm:text-5xl text-slate-900 tracking-tight">
          Marcas <span className="text-ugc-pink drop-shadow-[2px_2px_0px_#B4D9F4]">con las que he trabajado</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto mt-2">
          Colaboraciones, creación de contenido publicitario y reseñas auténticas para marcas de moda, belleza y estilo de vida.
        </p>
      </div>

      {/* Grid Circular de Marcas (Inspirado en el Canva, limpio y listo para fotos) */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 justify-items-center">
        {PLACEHOLDER_BRANDS.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col items-center group cursor-pointer"
            title={`${brand.name} · ${brand.category}`}
          >
            {/* Círculo estilo sticker con borde retro */}
            <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-3 border-black ${brand.bgColor} flex flex-col items-center justify-center p-2 text-center shadow-[4px_4px_0px_#000000] group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_#000000] transition-all select-none overflow-hidden relative`}>
              {brand.imgSrc ? (
                <img 
                  src={brand.imgSrc} 
                  alt={brand.name} 
                  className="w-full h-full object-contain rounded-full" 
                />
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-ugc-pink mb-0.5 opacity-80" />
                  <span className={`font-chunky text-[10px] sm:text-[11px] leading-tight ${brand.textColor}`}>
                    {brand.name}
                  </span>
                </>
              )}
            </div>

            {/* Categoría pequeña debajo */}
            <span className="font-mono text-[9px] font-bold text-slate-500 mt-1.5 uppercase tracking-wider text-center">
              {brand.category}
            </span>
          </div>
        ))}
      </div>

      {/* Nota sutil al pie */}
      <div className="text-center mt-6">
        <span className="inline-block text-[11px] font-mono text-slate-400 font-medium bg-white/70 px-4 py-1 rounded-full border border-slate-200">
          ✦ Espacios listos para nuevas marcas y colaboraciones 2026 ✦
        </span>
      </div>
    </section>
  );
};
