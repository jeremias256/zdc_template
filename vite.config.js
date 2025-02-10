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
			assets: resolve(__dirname, 'src/assets'),
			auth: resolve(__dirname, 'src/features/auth'),
			components: resolve(__dirname, 'src/components'),
			pages: resolve(__dirname, 'src/features/pages'),
			fb: resolve(__dirname, 'src/firebase'),
			//probar
			api: resolve(__dirname, 'src/api'),
			router: resolve(__dirname, 'src/routes'),
			hooks: resolve(__dirname, 'src/hooks'),
			store: resolve(__dirname, 'src/store'),
			env: resolve(__dirname, 'src/Env'),
		},
	},
});
