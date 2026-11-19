/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bc4',
          hover: '#006aa8',
          dark: '#005080',
          light: '#e0f2fe'
        },
        brand: {
          blue: '#007bc4',
          darkBlue: '#006aa8',
          sky: '#90e0ef',
          skyHover: '#76d4e6',
          dark: '#242424',
          muted: '#777777',
          border: '#e8e8e8',
          cardBg: '#ffffff',
          lightBg: '#f8f9fa'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Jost', 'Lato', 'sans-serif'],
        nav: ['Lato', 'Jost', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 25px rgba(0, 0, 0, 0.1)',
        'dropdown': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'header': '0 2px 5px rgba(0, 0, 0, 0.06)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-out',
        fadeInUp: 'fadeInUp 0.3s ease-out',
        scaleUp: 'scaleUp 0.25s ease-out',
        slideLeft: 'slideLeft 0.3s ease-out',
        slideRight: 'slideRight 0.3s ease-out',
        slideInRight: 'slideInRight 0.35s cubic-bezier(0.16,1,0.3,1)',
        pulse: 'pulse 1.5s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
