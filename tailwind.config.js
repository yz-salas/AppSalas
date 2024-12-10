/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				letter: ['IBM Plex Mono", monospace'],
			},
			container: {
				center: true, // Asegura que siempre esté centrado
				padding: '2rem', // Padding adicional
			},
		},
	},
	plugins: [],
};
