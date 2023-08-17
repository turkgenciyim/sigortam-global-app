/** @type {import('tailwindcss').Config} */
import { screens } from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite alternate-reverse",
      },

      fontFamily: {
        "dm-sans": ["var(--font-dmSans)"],
        lato: ["var(--font-lato)"],
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-350px * 5))",
          },
        },
      },
      backgroundImage: {
        bg: "url('../public/sigortam-global.png')",
      },
    },
    screens: {
      xs: "425px",
      ...screens,
    },
  },
  plugins: [],
};
