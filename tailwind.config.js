/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neonCyan: '#00ffff',
      },
      boxShadow: {
        neon: '0 0 15px #00ffff, 0 0 30px #00ffff, 0 0 45px #00ffff',
      },
    },
  },
  plugins: [],
};
