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
        darkGray: "#2E2E2E",
        gray: "#6d6d6d",
        white: "#f6f6f6",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}