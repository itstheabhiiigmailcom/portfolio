/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
      },
      fontStyle: {
        normal: 'normal',
      },
    },
  },
  plugins: [],
}
