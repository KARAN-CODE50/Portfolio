import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-wave": "url('/bg-image 1.png')",
        "grid-wave-light": "url('/bg-light.svg')",
        "glass-border": "url('/border.svg')",
        "text-bg": "url('/textbg.svg')",
        "art-bg": "url('/art.jpg')",
        "paper-bg": "url('/paper.png')",
        "wave-pattern-bg": "url('/wave-pattern-bg.jpg')"
      },
      fontFamily: {
        nohemi: ['var(--font-nohemi)'],
        times: ['var(--font-times)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        'base-purple': '#6935F5',
        "bg-color": "#171717",
      }
    },
  },
  plugins: [],
};
export default config;
