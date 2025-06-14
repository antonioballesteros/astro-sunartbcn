/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: 'var(--brand)',
                    50: 'var(--brand-50)',
                    100: 'var(--brand-100)',
                    200: 'var(--brand-200)',
                    300: 'var(--brand-300)',
                    400: 'var(--brand-400)',
                    500: 'var(--brand-500)',
                    600: 'var(--brand-600)',
                    700: 'var(--brand-700)',
                    800: 'var(--brand-800)',
                    900: 'var(--brand-900)',
                    950: 'var(--brand-950)',
                },
            },
        },
    },
    plugins: [],
    // Agregar configuración explícita para safelist
    safelist: [
        'bg-brand',
        'bg-brand-50',
        'bg-brand-100',
        'bg-brand-200',
        'bg-brand-300',
        'bg-brand-400',
        'bg-brand-500',
        'bg-brand-600',
        'bg-brand-700',
        'bg-brand-800',
        'bg-brand-900',
        'bg-brand-950',
    ],
};
