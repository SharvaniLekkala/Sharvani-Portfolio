/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        onyx: {
          DEFAULT: '#0A0A0A',
          light: '#171717',
          dark: '#000000',
        },
        optic: {
          green: '#10B981', // Vibrant court green
          yellow: '#FBBF24', // Subtle shuttle cork/accent
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'shuttle-hang': 'shuttleHang 3s cubic-bezier(0.25, 1, 0.5, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        shuttleHang: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '40%': { transform: 'translateY(-15px) scale(1.02)' }, // The "hang time"
          '50%': { transform: 'translateY(5px) scale(0.98)' }, // The "snap"
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
};
