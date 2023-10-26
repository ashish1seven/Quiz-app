/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'lets-start':'ready 6s ease forwards'
      },
       keyframes: {
        ready: {
           '0%': { transform: 'scale(0)' },
           '25%': { transform: 'scale(1)' },
           '26%': { transform: 'scale(0)' },
           '50%': { transform: 'scale(1)' },
           '51%': { transform: 'scale(0)' },
           '75%': { transform: 'scale(1)' },
           '76%': { transform: 'scale(0)' },
           '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

