import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        baker: {
          background: '#faf7f2',
          primary: '#8b5e3c',
          dark: '#2d241d',
          accent: '#d9b382',
          text: '#4b3a2f',
          cream: '#fffaf3',
          line: '#eadfce',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 70px rgba(45, 36, 29, 0.11)',
        image: '0 28px 90px rgba(45, 36, 29, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
