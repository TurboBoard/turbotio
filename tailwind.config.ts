import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.tsx', './forms/**/*.tsx', './inputs/**/*.tsx', './svgs/*.tsx'],
    theme: {
        extend: {
            backgroundImage: {
                turbo: "url('/img/header.jpg')",
            },
            colors: {
                byzantium: '#660099',
                dark: '#171717', // Neutral 900
                light: '#fafafa', // Neutral 50
                silver: '#a3a3a3', // Neutral 400 (Alt text)
                stone: '#262626', // Neutral 800 (Alt dark BG)
                pink: '#FF3399',
                teal: '#0cc',
                warning: '#F43F5E',
            },
            fontFamily: {
                mona: ['var(--font-mona)'],
                racing: ['var(--font-racing)'],
            },
        },
        spacing: {
            0: '0px',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '5px',
            5: '8px',
            6: '13px',
            7: '21px',
            8: '34px',
            9: '55px',
            10: '89px',
            11: '144px',
            12: '233px',
            13: '377px',
            14: '610px',
            15: '987px',
        },
    },
    plugins: [],
};
export default config;
