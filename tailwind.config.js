/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "xs": "426px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "darkBlue": "hsl(209, 23%, 22%)",
        "veryDarkBlue_DarkModeBg": "hsl(207, 26%, 17%)",
        "veryDarkBlue_LightModeText": "hsl(200, 15%, 8%)",
        "darkGray": "hsl(0, 0%, 52%)",
        "veryLightGray": "hsl(0, 0%, 98%)",
        "white": "hsl(0, 0%, 100%)",
      },
    },
    dropShadow: {
      "gray": "0 0 0.625rem hsla(00, 0%, 52%, 20%)",
    },
  },
  plugins: [],
  darkMode: "selector",
}

