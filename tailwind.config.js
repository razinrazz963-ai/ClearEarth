/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0f2042',
            light: '#1b3260',
            dark: '#081329',
            950: '#060d1d',
            900: '#0f2042',
            800: '#162d5d',
            700: '#1e3c7b',
            600: '#274e9f',
            100: '#e6ebf5',
            50: '#f0f4fa',
          },
          green: {
            DEFAULT: '#1ea84b',
            hover: '#18923f',
            dark: '#126d30',
            light: '#2cd061',
            50: '#f0fbf3',
            100: '#dcf7e3',
            200: '#bcf0cc',
            500: '#1ea84b',
            600: '#18923f',
            700: '#126d30',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(15, 32, 66, 0.08), 0 4px 6px -2px rgba(15, 32, 66, 0.04)',
        'card-hover': '0 20px 35px -10px rgba(15, 32, 66, 0.15), 0 10px 10px -5px rgba(30, 168, 75, 0.08)',
        'glow-green': '0 0 25px rgba(30, 168, 75, 0.35)',
        'glow-navy': '0 0 30px rgba(15, 32, 66, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
