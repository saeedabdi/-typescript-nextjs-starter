const colors = require('tailwindcss/colors');

module.exports = {
    future: {
        purgeLayersByDefault: true,
        applyComplexClasses: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
        extend: {
            zIndex: {},
            keyframes: {
                opacity: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                spinner: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: ' rotate(360deg)',
                    },
                },
                fadeLeft: {
                    '0%': {
                        transform: 'translateX(-50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
                fadeRight: {
                    '0%': {
                        transform: 'translateX(50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
            },
            animation: {
                spinner: ' spinner 1s linear infinite',
                opacity: 'opacity 0.2s ease-in-out',
                fadeLeft: 'fadeLeft 1s ease-in-out',
                fadeRight: 'fadeRight 1s ease-in-out',
            },
            width: {
                'max-content': 'max-content',
            },
            maxWidth: {
                '8xl': '1920px',
            },
            spacing: {},
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                'secondary-2': 'var(--secondary-2)',
                'accent-0': 'var(--accent-0)',
                'accent-1': 'var(--accent-1)',
                'accent-2': 'var(--accent-2)',
                'accent-3': 'var(--accent-3)',
                'accent-4': 'var(--accent-4)',
                'accent-5': 'var(--accent-5)',
                'accent-6': 'var(--accent-6)',
                'accent-7': 'var(--accent-7)',
                'accent-8': 'var(--accent-8)',
                'accent-9': 'var(--accent-9)',
                green: 'var(--green)',
                'green-dark': 'var(--green-dark)',
                red: 'var(--red)',
                'red-2': 'var(--red-2)',
                'red-dark': 'var(--red-dark)',
                'orange': 'var(--orange)',
                'orange-dark': 'var(--orange-dark)',
                'red-light': 'var(--red-light)',
                yellow: 'var(--yellow)',
                'yellow-dark': 'var(--yellow-dark)',
                blue: 'var(--blue)',
                'blue-dark': 'var(--blue-dark)',
            },
            textColor: {
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
            },
            boxShadow: {
                'outline-2': '0 0 0 2px var(--accents-2)',
                magical:
                    'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
            },
            lineHeight: {
                'extra-loose': '2.2',
            },
            scale: {
                120: '1.2',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
