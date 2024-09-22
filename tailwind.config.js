/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}","./dist/en/*.{html,js}"],
    theme: {
        fontSize: {
            sm: ['clamp(0.777rem, 0.719rem + 0.293vw, 1rem)', '1.3'], /* Body Small */
            base: ['clamp(0.875rem, 0.809rem + 0.329vw, 1.125rem)', '1.3'], /* Body Regular */
            lg: ['clamp(0.988rem, 0.914rem + 0.366vw, 1.266rem)', '1.3'], /* Header 6 */
            xl: ['clamp(1.106rem, 1.022rem + 0.419vw, 1.425rem)', '1.3'], /* Header 5 */
            '2xl': ['clamp(1.244rem, 1.15rem + 0.469vw, 1.6rem)', '1.3'], /* Header 4 */
            '3xl': ['clamp(1.4rem, 1.295rem + 0.526vw, 1.8rem)', '1.3'],  /* Header 3 */
            '4xl': ['clamp(1.575rem, 1.457rem + 0.592vw, 2.025rem)', '1.3'], /* Header 2 */
            '5xl': ['clamp(1.775rem, 1.642rem + 0.666vw, 2.281rem)', '1.3'], /* Header 1 */
        },
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

