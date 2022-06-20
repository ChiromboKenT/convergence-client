/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#5cdb95",
        primaryLight: "#8ee4af",
        primaryDark: "#379683",
        secondary: "#05396b",
        light: "#edf5e1",
      },
    },
  },
  plugins: [],
};
