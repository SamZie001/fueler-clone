/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "Poppins",
      },
      colors: {
        primary: "#0d0543",
        secondary: {
          100: "#ddfeff",
          200: "#0be6ef",
          pink: "#eb24bf",
          lightPink: "#fdeefb",
        },
      },
      boxShadow: {
        inner:
          "inset 2px 2px 3px rgba(13, 5, 67, 0.3), inset -2px -2px 3px rgba(13, 5, 67, 0.3);",
      },
      width: {
        container: "1103px",
        smallContainer: "95%",
      },
    },
  },
  plugins: [],
};
