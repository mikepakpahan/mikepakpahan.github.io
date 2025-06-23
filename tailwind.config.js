/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F0F2F5",
        secondary: "#6B6E70",
        tertiary: "#6A5ACD",
        "black-100": "#333333",
        "black-200": "#1A1A1A",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg-light.png')",
      },
    },
  },
  plugins: [],
};
