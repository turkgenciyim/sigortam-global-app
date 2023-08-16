/** @type {import('tailwindcss').Config} */
import {screens } from "tailwindcss/defaultTheme"
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["var(--font-dmSans)"],
        lato: ["var(--font-lato)"],
      },
    },
    screens : {
      "xs" : "425px",
        ...screens
    }
  },
  plugins: [],
};
