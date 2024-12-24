/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        kanit:["Kanit","sans-serif"]
      },
      colors: {
        'primary': '#1E3D59',
        'secondary': '#FF6B6B',
        'accent': '#FFD54F',
        'text-dark': '#2D3047',
        'light': '#F7F9FC',
        'background': '#FFFFFF'
      },
    },
  },
  plugins: [],
};
