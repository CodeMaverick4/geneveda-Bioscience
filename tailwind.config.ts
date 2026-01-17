import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: 'oklch(98.2% .018 155.826)',
                    100: 'oklch(96.2% .044 156.743)',
                    200: 'oklch(92.5% .084 155.995)',
                    500: 'oklch(72.3% .219 149.579)',
                    600: 'oklch(62% .219 149.579)', // Darker variant for hover
                },
            },
            fontFamily: {
                sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
            },
            animation: {
                scroll: 'scroll 40s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
