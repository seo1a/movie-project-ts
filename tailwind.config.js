/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        customRegular: ['MyCustomFont_Regular', 'sans-serif'], // Regular 폰트
        customBold: ['MyCustomFont_Bold', 'sans-serif'], 
        customLogo: ['MyCustomFont_Logo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

