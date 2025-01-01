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
