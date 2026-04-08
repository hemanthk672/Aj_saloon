/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
          dark: '#D97706',
        },
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold': '0 4px 20px -4px rgba(245, 158, 11, 0.35)',
        'card': '0 2px 16px -2px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #0F172A 0%, #1e3a5f 60%, #D97706 100%)',
      },
    },
  },
  plugins: [],
};
