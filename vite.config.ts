import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			manifest: { theme_color: '#426B29', background_color: '#ABDB8F' },
			pwaAssets: { image: 'static/logo.svg' }
		})
	]
});
