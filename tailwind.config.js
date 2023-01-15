/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* primary: "#226B35", */
        /* primary: "#0984e3", */
        /* primary: "#74b9ff", */
        primary: "#013328",
        black: "#100c0d",
        text: "#e3dcd2",
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        text: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
