/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gta-neon': '#f472b6', 
        'gta-dark': '#101014',
        'gta-light': '#f8fafc',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(244, 114, 182, 0.5)',
        'neon-lg': '0 0 25px rgba(244, 114, 182, 0.8)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};