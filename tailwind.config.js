// tailwind.config.js
module.exports = {
    content: ["./*.html"], // Ensure this includes your HTML files
    theme: {
        extend: {
            fontFamily: {
                harmonia: ['Harmonia Sans', 'sans-serif'],
            },
            width: {
                '800': '800px',  // Add a custom width
            }
        },
    },
    plugins: [],
};
