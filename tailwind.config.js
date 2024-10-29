/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
        googleRed: '#DD4B39',
        facebookBlu: '#3B5998'
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
}

