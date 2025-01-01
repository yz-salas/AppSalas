import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': '/src/assets', // Alias para acceder a la carpeta 'assets'
		},
	},
	base: './', // Reemplaza con el nombre de tu repositorio
	build: {
		outDir: 'dist',
	},
});
