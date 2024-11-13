/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#008542",
        secondary: "#d9a925",
        accent: "#3B5897",
      },
      fontFamily: {
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};