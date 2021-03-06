import BF1 from '../components/campaigns/_finalArts/BF1.jsx'
import BF2 from '../components/campaigns/_finalArts/BF2.jsx'
import BF3 from '../components/campaigns/_finalArts/BF3.jsx'
import BF4 from '../components/campaigns/_finalArts/BF4.jsx'
import DC1 from '../components/campaigns/_finalArts/DC1.jsx'
import DC2 from '../components/campaigns/_finalArts/DC2.jsx'
import DC3 from '../components/campaigns/_finalArts/DC3.jsx'
import DC4 from '../components/campaigns/_finalArts/DC4.jsx'
import DC6 from '../components/campaigns/_finalArts/DC6.jsx'

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
                        component: BF1
                    },
                    {
                        title: 'Tipo 2',
                        img: '/img/campaigns/blackfriday/bf2.jpg',
                        component: BF2
                    },
                    {
                        title: 'Tipo 3',
                        img: '/img/campaigns/blackfriday/bf3.jpg',
                        component: BF3
                    }
                ]
            },
            {
                destination: 'stories instagram',
                pieces: [
                    {
                        title: 'Tipo 4',
                        img: '/img/campaigns/blackfriday/bf4.jpg',
                        component: BF4
                    }
                ]
            }
        ]
    },
    {
        title: 'Dia das crianças',
        description: 'Campanha dia das crianças no hotel - out/2021',
        image: 'img/campaigns/diadascriancas/banner1.jpg',
        type: 'simple',
        arts: [
            {
                destination: 'feed instagram',
                pieces: [
                    {
                        title: 'Feed 1',
                        img: '/img/campaigns/diadascriancas/post1.jpg',
                        component: DC1
                    },
                    {
                        title: 'Feed 2',
                        img: '/img/campaigns/diadascriancas/post2.jpg',
                        component: DC2
                    },
                ]
            },
            {
                destination: 'stories instagram',
                pieces: [
                    {
                        title: 'Stories 1',
                        img: '/img/campaigns/diadascriancas/stories1.jpg',
                        component: DC3
                    },
                    {
                        title: 'Stories 2',
                        img: '/img/campaigns/diadascriancas/stories2.jpg',
                        component: DC4
                    },
                    // {
                    //     title: 'Stories 3',
                    //     img: '/img/campaigns/diadascriancas/stories3.jpg'
                    // }
                ]
            },
            {
                destination: 'banner',
                pieces: [
                    {
                        title: 'Banner tipo 1',
                        img: '/img/campaigns/diadascriancas/banner1.jpg',
                        component: DC6
                    }
                ]
            }
        ]
    },
    {
        title: 'Páscoa 2021',
        description: 'Campanha páscoa - abr/2021',
        image: 'img/campaigns/general/easter-eggs.jpg'
    },
    {
        title: 'Vacinação',
        description: 'Campanha vacinação - abr/2021',
        image: 'img/campaigns/general/vax-rawpixel.jpg'
    },
    {
        title: 'Influenciadores digitais',
        description: 'Campanha com influencers para cliente X - maio/2021',
        image: 'img/campaigns/general/influencers-freepik.jpg'
    },
    {
        title: 'Novos empreendedores digitais',
        description: 'Campanha empreendedorismo digital - aug/2021',
        image: 'img/campaigns/general/senivpetro.jpg'
    },
    {
        title: 'Comunicado interno',
        description: 'Exemplo de campanha para endomarketing - mar/2021',
        image: 'img/campaigns/general/holding-megaphone-rawpixel.jpg'
    },
    
]