/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      screens: {
        'sm': '375px',
        // => @media (min-width: 576px) { ... }
  
        'md': '768px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    extend: {
      colors: {
        fmLightBlue: "#666ca3",
        fmDarkBlue: "#13183F",
        fmGray: "#83869A",
        fmPink: "#F74780",
        fmLightPink: "#FFA7C3",
      },
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
