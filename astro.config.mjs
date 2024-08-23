import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    integrations: [
        starlight({
            title: 'Augustus Wiki',
            tableOfContents: {
                minHeadingLevel: 1,
                maxHeadingLevel: 6,
            },
            sidebar: [
                {
                    label: 'Combat',
                    items: [
                        { slug: 'combat/antibot' },
                        { slug: 'combat/autogapple' },
                    ],
                },
                {
                    label: 'Fun',
                    items: [
                        { slug: 'fun/autojumpandrun' },
                        { slug: 'fun/autoreport' },
                        { slug: 'fun/deathcommand' },
                        { slug: 'fun/friendfinder' },
                        { slug: 'fun/killmessage' },
                        { slug: 'fun/lag' },
                    ],
                },
            ],
        }),
    ],
})