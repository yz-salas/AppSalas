/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				bolddec: ['Rubik Mono One'],
				flory: ['Reenie Beanie'],
			},
			container: {
				center: true, // Asegura que siempre esté centrado
				padding: '10rem', // Padding adicional
			},
		},
	},
	plugins: [],
};
