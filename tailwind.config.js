/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        cardShadow: "0 0 20px -10px rgba(0,0,0,0.5)",
        shadow1: "0px 0px 150px -45px rgba(255, 51, 0, 0.5)",
        shadow1h: "0px 0px 120px -55px rgba(255, 51, 0, 0.5)",
      },
      colors: {
        cardColor: "rgba(255, 255, 255, 0.13)",
        textColor1: "rgba(255, 255, 255, 0.4)",
        textColor2: "rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
