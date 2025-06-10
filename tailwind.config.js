/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF2',
          100: '#C0D0E1',
          200: '#96B1CF',
          300: '#6B91BC',
          400: '#4A78AD',
          500: '#2A5F9E',
          600: '#23578F',
          700: '#194D7F',
          800: '#112B4A',
          900: '#091E3A',
        },
        secondary: {
          50: '#FBF8E9',
          100: '#F7EFC6',
          200: '#F2E59F',
          300: '#EDDA78',
          400: '#E9D25A',
          500: '#E5C93C',
          600: '#D4AF37',
          700: '#BE952E',
          800: '#A87C25',
          900: '#865214',
        },
        success: {
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          500: '#EF4444',
          600: '#DC2626',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F5F7FA',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};