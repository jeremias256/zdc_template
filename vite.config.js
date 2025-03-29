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
			components: resolve(__dirname, 'src/components'),
			pages: resolve(__dirname, 'src/features/pages'),
			fb: resolve(__dirname, 'src/firebase'),
			auth: resolve(__dirname, 'src/features/auth'),
			customer: resolve(__dirname, 'src/features/customer'),
			router: resolve(__dirname, 'src/routes'),
			store: resolve(__dirname, 'src/store'),
			//probar
			api: resolve(__dirname, 'src/api'),
			env: resolve(__dirname, 'src/Env'),
		},
	},
});
