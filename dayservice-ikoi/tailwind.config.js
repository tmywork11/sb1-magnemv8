/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.php',
    './template-parts/**/*.php',
    './assets/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#ebeef4',
          200: '#d2dae8',
          300: '#adbcd3',
          400: '#8194b9',
          500: '#5f739c',
          600: '#1B315B',  // メインカラー
          700: '#162849',
          800: '#111F37',
          900: '#0D1625',
          950: '#080D14',
        },
        secondary: {
          50: '#fdfbf3',
          100: '#fbf5e1',
          200: '#f5e9c0',
          300: '#efd894',
          400: '#e8c15f',  // アクセントカラー
          500: '#dba543',
          600: '#c38a33',
          700: '#a26b2d',
          800: '#85562c',
          900: '#6f4829',
          950: '#3d2514',
        },
        paper: {
          50: '#fefefe',
          100: '#faf9f6',  // 薄い和紙色
          200: '#f5f3ed',  // メインの和紙色
          300: '#ebe7dd',
          400: '#e0dbd0',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out'
      }
    },
  },
  plugins: [],
}