import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://augustusclient.github.io/Augustus-Wiki/',
    base: '/Augustus-Wiki',
    integrations: [
        starlight({
            title: 'Augustus Wiki',
            tableOfContents: {
                minHeadingLevel: 1,
                maxHeadingLevel: 6,
            },
            sidebar: [
                { slug: 'intro/welcome'},
                {
                    label: 'Basic',
                    items: [
                        { slug: 'intro/packets'},
                        { slug: 'intro/goodtoknowthings'},
                        { slug: 'intro/commands'},
                        {
                            label: 'AntiCheats ',
                            items: [
                                { slug: 'intro/basicinfooverac'},
                                { slug: 'intro/transaction'},
                                {
                                    label: 'AntiCheat List ',
                                    items: [
                                        { slug: 'intro/aac'},
                                        { slug: 'intro/grim'},
                                        { slug: 'intro/intave'},
                                        { slug: 'intro/matrix'},
                                        { slug: 'intro/ncp'},
                                        { slug: 'intro/spartan'},
                                        { slug: 'intro/verus'},
                                        { slug: 'intro/vulcan'},
                                        { slug: 'intro/atomic'},
                                        { slug: 'intro/karhu'},
                                        { slug: 'intro/polar'},
                                        { slug: 'intro/erreta'},
                                    ],
                                },
                            ],
                        },
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
                                { slug: 'latency/lagrange' }
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
                                { slug: 'render/2ditems' },
                                { slug: 'render/ambiance' },
                                { slug: 'render/antiblind' },
                                { slug: 'render/antihurtcam' },
                                { slug: 'render/antiinvisible' },
                                { slug: 'render/antistrike' },
                                { slug: 'render/arraylist' },
                                { slug: 'render/arrowhitbox' },
                                { slug: 'render/aspectratio' },
                                { slug: 'render/attackeffects' },
                                { slug: 'render/barriers' },
                                { slug: 'render/blockanimation' },
                                { slug: 'render/blockesp' },
                                { slug: 'render/blockoverlay' },
                                { slug: 'render/blocktraceesp' },
                                { slug: 'render/blur' },
                                { slug: 'render/breakindicator' },
                                { slug: 'render/cameranoclip' },
                                { slug: 'render/centredinventory' },
                                { slug: 'render/chams' },
                                { slug: 'render/chat' },
                                { slug: 'render/child' },
                                { slug: 'render/chinahat' },

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
                                { slug: 'misc/debug' },
                                { slug: 'misc/disabler' },
                                { slug: 'misc/enderpearlnotify' },
                                { slug: 'misc/exploitfixer' },
                                { slug: 'misc/fakegamemode' },
                                { slug: 'misc/fixes' },
                                { slug: 'misc/flagdetector' },
                                { slug: 'misc/irc'},
                                { slug: 'misc/ircchat'},
                                { slug: 'misc/midclick'},
                                { slug: 'misc/murderfinder'},
                                { slug: 'misc/nodiscordrpc'},
                                { slug: 'misc/openauthmod'},
                                { slug: 'misc/panic'},
                                { slug: 'misc/protocolversion'},
                                { slug: 'misc/radio'},
                                { slug: 'misc/rotationhandler'},
                                { slug: 'misc/staffdetector'},
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
