/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: {
          light: "#fd4a65",
          default: "#FF2847",
          dark: "#aa1d32",
        },
        secondary: {
          light: "#22D3EE",
          default: "#06B6D4",
          dark: "#0E7490",
        },
        neutral: {
          light: "#F3F4F6",
          default: "#9CA3AF",
          dark: "#1F2937",
        },
        typo: {
          primary: "#FFFFFF",
          secondary: "#C0C0C0",
          extra: "#dddddd",
        },
        danger: "#F55353",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/assets/images/hero-bg.jpg')",
        initialGradient: "linear-gradient(0deg, #0A2723 0%, #000 100%)",
        middleGradient: "linear-gradient(180deg, #0A2723 0%, #0A2723 100%)",
        finalGradient: "linear-gradient(180deg, #0A2723 0%, #000 100%)",
        contactGradient: "linear-gradient(180deg, #000 0%, #0A2723 100%)",
        headerGradient:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.20) 0%, rgba(38, 38, 38, 0.20) 100%)",
      },
      dividerGradient:
        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,0) 100%)",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
