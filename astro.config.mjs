import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import { SITE } from './src/config.mjs';
import { remarkReadingTime } from './src/utils/frontmatter.ts';
import react from '@astrojs/react';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
	// Astro uses this full URL to generate your sitemap and canonical URLs in your final build
	site: SITE.origin,
	base: SITE.basePathname,
	trailingSlash: SITE.trailingSlash ? 'always' : 'never',
	output: 'static',
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		mdx() /* Disable this integration if you don't use Google Analytics (or other external script). */,
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		react(),
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
		extendDefaultPlugins: true,
	},
	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
	},
});
