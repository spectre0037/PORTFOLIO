/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matte: '#0A0A0A',
        charcoal: '#111111',
        slateSoft: '#1A1A1A',
        accentBlue: '#4F8CFF',
        accentPurple: '#7A5CFF',
        accentCyan: '#00D4FF',
      },
      boxShadow: {
        glow: '0 0 50px rgba(79, 140, 255, 0.35)',
        soft: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.08)' },
        },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};