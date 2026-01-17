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
                    DEFAULT: '#00a86b', // Jade Green
                    50: '#e0f7ec',
                    100: '#b3edd1',
                    200: '#80e0b3',
                    300: '#4dd294',
                    400: '#26c57d',
                    500: '#00a86b',
                    600: '#008a57',
                    700: '#006b43',
                    800: '#004d30',
                    900: '#00301e',
                },
                accent: {
                    DEFAULT: '#39ff14', // Neon Green Glow
                    glow: '#39ff14',
                },
                dark: {
                    DEFAULT: '#001a0e', // Deepest Green/Black
                    surface: '#002616', // Slightly lighter background
                    emerald: '#004d2c',
                },
                light: {
                    DEFAULT: '#d0f0c0', // Highlights
                }
            },
            fontFamily: {
                sans: ["var(--font-ibm-plex-sans)", "system-ui", "sans-serif"],
                heading: ["var(--font-orbitron)", "sans-serif"],
                display: ["var(--font-rajdhani)", "sans-serif"],
                mono: ["var(--font-space-mono)", "monospace"],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'scroll': 'scroll 40s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px #39ff14' },
                    '50%': { opacity: '0.8', boxShadow: '0 0 10px #39ff14' },
                },
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
