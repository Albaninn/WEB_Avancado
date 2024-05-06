import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-primary': '#D6DBDC',
        'dark-primary': '#000000',
        'light-textPrimary': '#000000',
        'dark-textPrimary': '#FFFFFF',
        'light-secondary': '#F0F0F0',
        'dark-secondary': '#202020',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    
  },
  plugins: [],
};
export default config;
