module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}', 
        './components/**/*.{js,ts,jsx,tsx}',
        "./node_modules/flowbite/**/*.js"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
    mode: 'jit',

    }