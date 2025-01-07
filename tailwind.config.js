/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				bolddec: ['Rubik Mono One'],
				flory: ['Reenie Beanie'],
				'ibm-plex': ['IBM Plex Mono', 'monospace'],
			},
			fontWeight: {
				fine: 100, // Aquí definimos un alias para el peso "100"
				thick: 700,
			},
			container: {
				center: true, // Asegura que siempre esté centrado
				padding: '10rem', // Padding adicional
			},
		},
	},
	plugins: [],
};
