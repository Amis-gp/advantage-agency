/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./fonts/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        geologica: ['Geologica', 'Inter', 'sans-serif'],
        'clash-grotesk': ['var(--font-clash-grotesk)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        red: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FDB5B5',
          300: '#FB8887',
          400: '#F65B5A',
          500: '#D12923',
          600: '#B01F1A',
          700: '#8F1512',
          800: '#6E0C0A',
          900: '#4D0302',
        },
        green: {
          50: '#F0FDF4',
          100: '#DCFCE7', 
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#219653',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D'
        },
        yellow: "#FFCD2B",
        yellow: {
          50: '#FFFDF5',
          100: '#FFF8E1',
          200: '#FFEFB8',
          300: '#FFE58F',
          400: '#FFDB66',
          500: '#FFCD2B',
          600: '#FFB800',
          700: '#CC9300',
          800: '#996E00',
          900: '#664900',
      },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'bounce-x': 'bounce-x 1s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
        'fadeIn': 'fadeIn 1s ease forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        bounceX: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(30%)' },
        },
        'bounceX-small': {
          '0%, 100%': { transform: 'translateX(-5%)' },
          '50%': { transform: 'translateX(5%)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { 
            'box-shadow': '0 0 15px rgba(79, 70, 229, 0.3)' 
          },
          '50%': { 
            'box-shadow': '0 0 30px rgba(79, 70, 229, 0.6)' 
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '10%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
};
