/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            primary: "#B6D6F4",
            secondary: "#D2F5FF",
            accent: "#10364D",
            secondary_backgroud: "#EFFBFF",
        }

    },
  },
  plugins: [],
};
