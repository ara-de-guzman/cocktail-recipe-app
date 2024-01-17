/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'cell': '450px',
      // => @media (min-width: 450px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      sm: ['1rem', '20px'],
      base: ['1.5rem', '24px'],
      md: ['1.7rem', '24px'],
      lg: ['2rem', '28px'],
      xl: ['2.5rem', '32px'],
    },
   
  },
  plugins: [],
}

