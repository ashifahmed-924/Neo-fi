/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        darkBg: "#000000",
        heroBlue: "#19085C",
        surfaceDark: "#0F0F0F",
        
        // Text & neutrals
        neoGray: "#999999",
        grayBorder: "#4D4D4D",
        mutedLabel: "#4D4D4D",
        grayLine: "#2E2E2E",
        neoWhite: "#E5E5E5",
        cardText: "#EDEDF2",
        
        // Brand / special
        neoGreen: "#9DFF3A",
        darkBorder: "#1A1A1A",
        faqDark: "#060606",
      },
      borderColor: {
        grayBorder: "#4D4D4D",
        grayLine: "#2E2E2E",
      },
      backgroundImage: {
        "gradient-overlay-left":
          "linear-gradient(83deg, #1B1B1B 4.91%, rgba(27, 27, 27, 0.00) 94.64%)",
        "gradient-overlay-right":
          "linear-gradient(263deg, #1B1B1B 4.91%, rgba(27, 27, 27, 0.00) 94.64%)",
        "gradient-text-white":
          "linear-gradient(0deg, #FFF 0%, #FFF 100%)",
      },
      backgroundColor: {
        "blue-glow-soft": "rgba(74, 90, 236, 0.06)",
        "blue-glow-strong": "rgba(74, 90, 236, 0.10)",
      },
      fontFamily: {
        alexandria: ["Alexandria", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        pill: "40px",
        card: "12px",
        section: "20px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "7rem",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
      spacing: {
        120: "120px",
      },
    },
  },
  plugins: [],
};
  