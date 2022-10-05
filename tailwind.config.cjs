/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya", "serif"],
        notosans: ["Noto Sans", "sans-serif"],
        tiro: ["Tiro Gurmukhi", "serif"],
      },
      colors: {
        lightprime: "#faedcd",
        lightsec: "#d4a373",
        lightter: "#ffcb69",
        darkprime: "#343a40",
        darksec: "#cdb4db",
      },
    },
  },
  plugins: [],
};
