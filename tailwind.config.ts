import type { Config } from "tailwindcss";

export default {
  darkMode: "class", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color using CSS variable
        foreground: "var(--foreground)", // Custom foreground color using CSS variable
      },
      animation: {
        pulse: "pulse 5s infinite",
        gradient: "gradient 6s ease infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.3" },
          "50%": { transform: "scale(1.1)", opacity: "0.5" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
