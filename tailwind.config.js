/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "rgba(246, 246, 246, 0.5)",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}