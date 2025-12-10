/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          neoGreen: "#9DFF3A",
          neoGray: "#999999",
          neoWhite: "#E5E5E5",
          darkBorder: "#1A1A1A",
          darkBg: "#000000",
          gradient1: "#4D4D4D", // for borders like the pill & Watch video
        },
        borderColor: {
          gradient1: "#4D4D4D",
        },
        fontFamily: {
          alexandria: ["Alexandria", "sans-serif"],
          inter: ["Inter", "sans-serif"],
        },
        spacing: {
          120: "120px",
        },
        borderRadius: {
          pill: "40px",
        },
      },
    },
    plugins: [],
  };
  