import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#EB4434",
        "primary-bue": "#326299",
        "primary-ice-color": "#CEE9ED",
        "primary-green": "#1FC510",
      },
      fontFamily: {
        onest: ["Onest Variable", "sans-serif"],
        titan: ["Titan One", "cursive"],
        buenard: ["Buenard", "serif"],
        gothic: ["Didact Gothic", "sans-serif"],
        centuryGothic: ['Century', 'serif'],
        zenMaru: ['Zen Maru Gothic', 'sans-serif'],
        montaga: 'Montaga , serif'
      },
    },
  },
  plugins: [],
};
export default config;
