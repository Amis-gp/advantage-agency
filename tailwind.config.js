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
        green: "#219653", 
        yellow: "#FFCD2B",
        gray: "#D3D3D3",
        white: "#FBFBFB"
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
