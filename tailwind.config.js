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
        'clash-grotesk': ['var(--font-clash-grotesk)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        red: "#D12923",
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
        gray: "#D3D3D3",
        red: {
          50: '#fef2f2',
          100: '#fee2e2', 
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d'
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
      }
    },
  },
  plugins: [],
};
