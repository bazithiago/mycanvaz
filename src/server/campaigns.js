import BF1 from '../components/campaigns/_finalArts/BF1.jsx'
// import BF2 from '../components/campaigns/_finalArts/BF2.jsx'
// import BF3 from '../components/campaigns/_finalArts/BF3.jsx'
// import BF4 from '../components/campaigns/_finalArts/BF4.jsx'

export const campaigns = [
    {
        title: 'Black Friday',
        description: 'Campanha para divulgação de palestras e workshops online - Black Friday 2021',
        image: '/img/campaigns/blackfriday/bf1.jpg',
        type: 'full',
        arts: [
            {
                destination: 'feed instagram',
                pieces: [
                    {
                        title: 'Tipo 1',
                        img: '/img/campaigns/blackfriday/bf1.jpg',
                        cod: "bf1",
                        component: BF1
                    },
                    {
                        title: 'Tipo 2',
                        img: '/img/campaigns/blackfriday/bf2.jpg',
                        cod: "bf2",
                        // component: BF2
                    },
                    {
                        title: 'Tipo 3',
                        img: '/img/campaigns/blackfriday/bf3.jpg',
                        cod: "bf3",
                        // component: BF3
                    }
                ]
            },
            {
                destination: 'stories instagram',
                pieces: [
                    {
                        title: 'Tipo 4',
                        img: '/img/campaigns/blackfriday/bf4.jpg',
                        cod: "bf4",
                        // component: BF4
                    }
                ]
            }
        ]
    },
    {
        title: 'Dia das crianças',
        description: 'Campanha dia das criaças no hotel - out/2021',
        image: 'img/campaigns/diadascriancas/banner1.jpg',
        type: 'simple',
        arts: [
            {
                destination: 'feed instagram',
                pieces: [
                    {
                        title: 'Tipo 1',
                        img: '/img/campaigns/diadascriancas/post1.jpg'
                    },
                    {
                        title: 'Tipo 2',
                        img: '/img/campaigns/diadascriancas/post2.jpg'
                    },
                ]
            },
            {
                destination: 'stories instagram',
                pieces: [
                    {
                        title: 'Tipo 1',
                        img: '/img/campaigns/diadascriancas/stories1.jpg'
                    },
                    {
                        title: 'Tipo 1',
                        img: '/img/campaigns/diadascriancas/stories2.jpg'
                    },
                    {
                        title: 'Tipo 1',
                        img: '/img/campaigns/diadascriancas/stories3.jpg'
                    }
                ]
            },
            {
                destination: 'banner',
                pieces: [
                    {
                        title: 'Banner tipo 1',
                        img: '/img/campaigns/diadascriancas/banner1.jpg'
                    }
                ]
            }
        ]
    },
]