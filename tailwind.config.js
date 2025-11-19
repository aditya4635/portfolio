/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          100: '#050505', // Deep Void
          200: '#0a0a0a',
          300: '#121212',
          500: '#1A1A1A',
          600: '#2A2A2A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#F3F4F6',
          700: '#E5E7EB',
          600: '#D1D5DB',
          500: '#9CA3AF',
        },
        violet: {
          500: '#7c3aed', // Neon Violet
        },
        cyan: {
          500: '#06b6d4', // Cyan
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
