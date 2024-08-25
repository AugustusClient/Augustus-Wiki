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
                    label: 'Basic',
                    items: [
                        { slug: 'intro/introduction'},
                        { slug: 'intro/introduction2'},
                    ],
                },
                {
                    label: 'Modules',
                    items: [
                        { slug: 'intro/moduleintro'},
                        {
                            label: 'Combat',
                            items: [
                                { slug: 'combat/antibot' },
                                { slug: 'combat/autogapple' },
                            ],
                        },
                        {
                            label: 'Legit',
                            items: [
                            ],
                        },
                        {
                            label: 'Latency',
                            items: [
                            ],
                        },  
                        {
                            label: 'Movement',
                            items: [
                            ],
                        },             
                        {
                            label: 'Player',
                            items: [
                            ],
                        },
                        {
                            label: 'Render',
                            items: [
                            ],
                        },
                        {
                            label: 'Misc',
                            items: [
                                { slug: 'misc/antiafk' },
                                { slug: 'misc/antiachievement' },
                                { slug: 'misc/aquamessenger' },
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
                                { slug: 'fun/mlg'},
                                { slug: 'fun/partyspammer'},
                                { slug: 'fun/shufflemode'},
                                { slug: 'fun/spammer'},
                                { slug: 'fun/spinbot'},
                            ],
                        },
                    ],
                },
            ],
        }),
    ],
})