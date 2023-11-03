/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aldrich: 'Aldrich'
      },
      colors: {
        gblue: '#4285F4'
      }
    },
  },
  plugins: [],
}