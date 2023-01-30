/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/hero-section.png')",
      }
    },
  },
  plugins: [],
}
