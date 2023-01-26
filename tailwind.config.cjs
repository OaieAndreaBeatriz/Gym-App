/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "gray-20": "#E8F1EE",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#7B8C58",
        "primary-100": "#BAD8D8",
        "primary-300": "#EBD3C5",
        "primary-500": "#E4B489",
        "secondary-400": "FFCD58",
        "secondary-500": "#BFD6B2",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF61A 0%, #FFC837 100%)",
        "mobile-home": "url('./src/assets/CoverGirl1.png')"
      }),
      fontFamily: {
        dmsans: ["DN Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        hustletext: "url('./src/assets/hustle gym.png')",
        heart: "url('./src/assets/heart.png')",
        plantdesign: "url('./src/assets/leaves+colors1.png')",
        eyeopen: "url('./src/assets/eye open.png')",
      },
      screens:  {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
    }
  },
  plugins: []
};
