/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#226B35",
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        text: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
