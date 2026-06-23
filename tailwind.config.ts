import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { ink: '#0c0c0e', panel: '#141416', lime: '#ff4d00' }, boxShadow: { glow: '0 0 40px rgba(255,77,0,.18)' } } }, plugins: [] } satisfies Config;
