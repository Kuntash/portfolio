module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            navy: {
                DEFAULT: '#0a192f',
                light: '#112240',
                lightest: '#233554',
                shadow: 'rgba(2,12,27,0.7)',
            },
            slate: {
                DEFAULT: '#8892b0',
                light: '#a8b2d1',
                lightest: '#ccd6f6',
            },
            white: {
                DEFAULT: '#e6f1ff',
            },
            green: {
                DEFAULT: '#64ffda',
                light: 'rgba(100, 255, 218, 0.1)',
            },
            transparent: {
                DEFAULT: 'transparent',
            },
        },
        extend: {
            // Custom animations keyframes
            keyframes: {
                loader: {
                    '0%': { transform: 'scale(0.5)', opacity: 0.1 },
                    '50%': { transform: 'scale(2) rotate(360deg)', opacity: 1 },
                    '100%': {
                        transform: 'scale(0.5) rotate(0deg)',
                        opacity: 0.1,
                    },
                },
            },

            // Custom animations
            animation: {
                loader: 'loader 2s ease-in-out infinite',
            },

            // Custom box shadows
            boxShadow: {
                customShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
            },

            // Custom border radius
            borderRadius: {
                card: '4px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

// Slate	 #8892b0
// Light Slate	 #a8b2d1
// Lightest Slate	 #ccd6f6
// White	#e6f1ff
// Green	#64ffda
