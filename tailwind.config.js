/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        container: {
            padding: "15px",
            center: true,
            width: "100%",
            screens: {
                xs: "480px",
                sm: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },
        screens: {
            xs: { min: "200px", max: "480px" },
            sm: { min: "481px", max: "768px" },

            lg: { min: "769px", max: "1024px" },

            xl: { min: "1024px", max: "1440px" },
            "2xl": { min: "1441px" },
        },
    },
    plugins: [],
}
