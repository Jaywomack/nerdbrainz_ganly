const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ["Raleway", "sans-serif"],
      },
      colors: {
        "custom-color-1": "#436FEF",
        "custom-color-2": "#24A8F6",
        "custom-color-3": "#03E5FE",
      },
      spacing: {
        "2/3": "66.666667%",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/static/images/meeting.jpeg')",
        "logo-white": "url('/static/images/logo_white.png')",
        "woman-over-logo": "url('/static/images/woman_with_logo_behind.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require(`@tailwindcss/typography`),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.7xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
