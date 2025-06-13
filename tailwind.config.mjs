/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: 'oklch(0.55 0.18 150)', // Un tono verde medio
                    light: 'oklch(0.65 0.18 150)',    // Verde más claro
                    dark: 'oklch(0.45 0.18 150)',     // Verde más oscuro
                },
            },
        },
    },
    plugins: [],
};
