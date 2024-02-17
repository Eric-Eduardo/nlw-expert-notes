/** @type {import('tailwindcss').Config} */
export default {
    content: [ // determina quais arquivo irão conter o tailwind
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: { // Aqui podemos colocar propriedades/extensões do tailwind
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            }

        },
    },
    plugins: [],
}

