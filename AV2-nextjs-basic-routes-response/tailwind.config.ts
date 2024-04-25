import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      ...colors,
      primary: colors.blue,
      secondary: colors.green,
      textPrimary: colors.white,
      dark: {
        primary: colors.gray[800],
        secondary: colors.gray[700],
        textPrimary: colors.gray[300],
      },
      light: {
        primary: colors.blue[500],
        secondary: colors.green[500],
        textPrimary: colors.white,
      },
      
    },
  },
  plugins: [],
};
export default config;
