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
                        { slug: 'intro/packets'},
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
                                { slug: 'combat/killaura' },
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
                                { slug: 'misc/autodisable' },
                                { slug: 'misc/autoleave' },
                                { slug: 'misc/autoplay' },
                                { slug: 'misc/autoregister' },
                                { slug: 'misc/beveragenotify' },
                                { slug: 'misc/clientsettings' },
                                { slug: 'misc/clientspoofer' },
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