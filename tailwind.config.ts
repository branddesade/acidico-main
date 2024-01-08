import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acid: {
          50: '#19171b',
          100: '#d39235',
          
        },
        whito: {
          50: '#beb3a9',
        },
        redo: {
          50: '#821a1a',
        },
        blueo: {
          50: '#3b3f50',
        },
      }
    },
    
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
