import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                jost: ["Jost", "sans-serif"],
            },
            colors: {
                peach: "#E7816B",
                black: "#1D1C1E",
                white: "#FFFFFF",
                lightPeach: "#FFAD9B",
                darkGrey: "#333136",
                lightGrey: "#F1F3F5",
                lightPink: "#FDF3F0",
            },
        },
    },
    plugins: [],
};
export default config;
