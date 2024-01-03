/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#F7F7FA",
        secondaryBg: "#F9F9FF",
        cardBg: "#FAFAFA",
        mainBlue: {
          100: "#edf2fa",
          200: "#d7e3fc",
          300: "#ccdbfd",
          400: "#c1d3fe",
          500: "#abc4ff",
          600: "#2A94F4",
          700: "#00D6C4",
        },
        darkerBlue: {
          100: "#8e98f5",
          200: "#7971ea",
          300: "#ffffea",
          400: "#0E538C",
          500: "#3D63EA",
          600: "#0B4870",
        },
        primaryText: "#1A202C",
        secondaryText: "#4A5568",
        headerText: "#2D3748",
        cusGreen: "#99ffcd",
      },
      boxShadow: {
        cardShadow: "0 4px 30px 0 rgba(0,0,0,0.05)",
        activeCardShadow: "0 4px 30px 0 rgba(0,0,0,0.1)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
