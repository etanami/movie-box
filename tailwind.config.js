/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('../../img/Poster.png')",
      },
      fontFamily: {
        body: ['DM Sans', 'sans-serif'],
        'movie-details': ['Poppins']
      },
    },
  },
  plugins: [],
}