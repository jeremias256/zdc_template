import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	resolve: {
		alias: {
			api: resolve(__dirname, 'src/api'),
			assets: resolve(__dirname, 'src/assets'),
			pages: resolve(__dirname, 'src/pages'),
			router: resolve(__dirname, 'src/routes'),
			hooks: resolve(__dirname, 'src/hooks'),
			store: resolve(__dirname, 'src/store'),
			componentsUI: resolve(__dirname, 'src/components'),
			env: resolve(__dirname, 'src/Env'),
		},
	},
});
