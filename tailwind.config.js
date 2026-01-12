/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: '#00FFA3', // Neon Crypto Green
                    red: '#FF2A51',   // Neon Crypto Red
                    black: '#050505',
                    dark: '#0a0a0a',
                    gray: '#1a1a1a',
                }
            },
            fontFamily: {
                heading: ['Archivo Black', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'dot-pattern': 'radial-gradient(circle, #333 1px, transparent 1px)',
            },
            backgroundSize: {
                'dot': '20px 20px',
            },
            boxShadow: {
                'offset-green': '4px 4px 0px 0px #00FFA3',
                'offset-red': '4px 4px 0px 0px #FF2A51',
            }
        },
    },
    plugins: [],
}
