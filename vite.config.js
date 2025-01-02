import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': '/src/assets',
		},
	},
	base: process.env.NODE_ENV === 'production' ? '/AppSalas/' : '/',
	build: {
		outDir: 'dist',
	},	
});
