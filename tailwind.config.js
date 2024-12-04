const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      sansbold: ["Open Sans Bold", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#FEC00A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  // prefix: "tw-",
};
