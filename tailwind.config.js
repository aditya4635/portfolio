
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          100: '#050505',
          200: '#0a0a0a',
          300: '#111111',
          500: '#1a1a1a',
          600: '#272727',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#F5F5F5',
          700: '#E5E5E5',
          600: '#C4C4C4',
          500: '#9A9A9A',
        },
        // Professional accent: emerald — trustworthy, dev-native (think GitHub, Linear)
        accent: {
          DEFAULT: '#10b981', // emerald-500
          light: '#34d399',   // emerald-400
          dark: '#059669',    // emerald-600
          muted: '#d1fae5',   // emerald-100
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        float: 'float 6s ease-in-out infinite',
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
