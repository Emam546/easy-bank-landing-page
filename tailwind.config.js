/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors:{
            "dark-Blue":"hsl(233, 26%, 24%)",
            "primary":"hsl(136, 65%, 51%)",
            "secondary":"hsl(192, 70%, 51%)",
            white:{
                1:"hsl(0, 0%, 100%)",
                2:"hsl(0, 0%, 98%)",
                3:"hsl(220, 16%, 96%)"
            },
            grey:"hsl(233, 8%, 62%)"
        },
        extend: {},
    },
    plugins: [],
};
