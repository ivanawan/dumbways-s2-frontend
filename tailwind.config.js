module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/css/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('tailwindcss-debug-screens'),],
}
