import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        softblue: 'var(--color-soft-blue)'
      },
    },
  },
  plugins: [],
} satisfies Config;
