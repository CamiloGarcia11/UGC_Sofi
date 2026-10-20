/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ugc: {
          blue: '#B4D9F4',     // Sky Blue Pastel
          pink: '#E33B87',     // Hot Magenta Pink
          yellow: '#FEF49B',   // Sunshine Butter Yellow
          cream: '#FBF8EF',    // Soft Off-White
          berry: '#8B1E51',    // Deep berry accent
          slate: '#7E9FB9',    // Dusty blue accent
          sand: '#C5BF7C',     // Muted olive/sand gold
        },
        cm: {
          blue: '#B4D9F4',       // Sky Blue Pastel
          chocolate: '#3C2722',  // Dark Chocolate Espresso
          burgundy: '#891731',   // Deep Crimson Wine Burgundy
          cream: '#F8F5E6',      // Warm Vanilla Cream
          yellow: '#FEF49B',     // Accent Butter Yellow
          slate: '#7E9FB9',      // Accent Dusty Blue
        },
      },
      fontFamily: {
        chunky: ['DynaPuff', 'cursive', 'sans-serif'],
        script: ['Galada', 'cursive', 'sans-serif'],
        editorialSerif: ['Noto Serif Display', 'Fraunces', 'Georgia', 'serif'],
        tanDisplay: ['Fraunces', 'Noto Serif Display', 'serif'],
        pixel: ['Silkscreen', 'VT323', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sticker': '4px 4px 0px #000000',
        'sticker-pink': '4px 4px 0px #8B1E51',
        'sticker-burgundy': '4px 4px 0px #3C2722',
        'sticker-blue': '4px 4px 0px #4B799E',
        'editorial': '6px 6px 0px #3C2722',
        'soft-card': '0 8px 30px rgba(137, 23, 49, 0.08)',
      }
    },
  },
  plugins: [],
}
