/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
      },
      colors: {
        ink: "#14110e",
        gold: "#e0b072",
        canvas: "var(--canvas)",
        raised: "var(--raised)",
        fg: "var(--fg)",
        soft: "var(--soft)",
        mist: "var(--mist)",
        line: "var(--line)",
        card: "var(--card)",
        social: "var(--social)",
        nav: "var(--nav)",
        brass: "rgb(var(--brass-rgb) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
