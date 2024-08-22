import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Combat',
					items: [
						// Each item here is one entry in the navigation menu.
						{ slug: 'Combat', slug: 'combat/antibot' },
						{ slug: 'Combat', slug: 'combat/autogapple' },
					],
				},
				{
					label: 'Fun',
					items: [
						// Each item here is one entry in the navigation menu.
						{ slug: 'Fun', slug: 'fun/autojumpandrun' },
						{ slug: 'Fun', slug: 'fun/autoreport' },
						{ slug: 'Fun', slug: 'fun/deathcommand' },
					],
				},
			],
		}),
	],
});
