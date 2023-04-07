/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#448472",
        darker: "#274940",
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        text: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
