export default defineEventHandler((event) => {
    const { id } = getQuery(event)
    switch (id) {
        case '1':
            return {
                id: 1,
                name: 'Haute-fidélité',
                list: [
                    {
                        id: 11,
                        title: 'Amplificateurs',
                        img: 'mdi:amplitude',
                        svd: 'https://www.son-video.com/rayon/haute-fidelite/amplificateurs/amplis-hi-fi-stereo/_filters'
                    },
                    {
                        id: 12,
                        title: 'Caisons et vibreurs',
                        img: 'ph:speaker-hifi-fill',
                        svd: 'https://www.son-video.com/rayon/home-cinema/caissons-et-vibreurs/caissons-de-basses/_filters'
                    },
                    {
                        id: 13,
                        title: 'Systèmes multiroom',
                        img: 'solar:home-line-duotone',
                        svd: 'https://www.son-video.com/rayon/haute-fidelite/systemes-multiroom/enceintes-multiroom/_filters'
                    },
                ]
            }
        case '2':
            return {
                id: 2,
                name: 'Home-cinéma',
                list: [
                    {
                        id: 21,
                        title: 'Amplificateurs',
                        img: 'mdi:amplifier',
                        svd: 'https://www.son-video.com/rayon/haute-fidelite/amplificateurs/amplis-a-tubes/_filters'
                    },
                    {
                        id: 22,
                        title: 'Streaming et réseau',
                        img: 'fluent-mdl2:streaming',
                        svd: 'https://www.son-video.com/rayon/haute-fidelite/streaming-et-reseau/dac-audio-usb/_filters'
                    },
                    {
                        id: 23,
                        title: 'Extra',
                        img: 'icons8:support',
                        svd: 'https://www.son-video.com/rayon/accessoires/extras/accessoires-television/_filters'
                    },
                ]
            }
        case '3':
            return {
                id: 3,
                name: 'Enceintes',
                list: [
                    {
                        id: 31,
                        title: 'Enceintes',
                        img: 'pixelarticons:speaker',
                        svd: 'https://www.son-video.com/rayon/enceintes/enceintes/enceintes-colonne/_filters'
                    },
                    {
                        id: 32,
                        title: "Pack d'enceintes",
                        img: 'ph:package-duotone',
                        svd: 'https://www.son-video.com/rayon/home-cinema/chaines-home-cinema/barres-de-son/_filters'
                    },
                    {
                        id: 33,
                        title: 'Cables audio',
                        img: 'fluent:connector-24-filled',
                        svd: 'https://www.son-video.com/rayon/accessoires/cables-audio/cables-rca-cinch-stereo/_filters'
                    },
                ]
            }
        case '4':
            return {
                id: 4,
                name: 'Téléviseurs',
                list: [
                    {
                        id: 41,
                        title: 'TV UHD 4k',
                        img: 'teenyicons:tv-solid',
                        svd: 'https://www.son-video.com/rayon/television/televiseurs/televiseurs-uhd-4k/_filters'
                    },
                    {
                        id: 42,
                        title: "TV OLED",
                        img: 'solar:tv-line-duotone',
                        svd: 'https://www.son-video.com/rayon/television/televiseurs/televiseurs-oled/_filters'
                    },
                    {
                        id: 43,
                        title: 'TV QLED',
                        img: 'cil:tv',
                        svd: 'https://www.son-video.com/rayon/television/televiseurs/televiseurs-qled/_filters'
                    },
                ]
            }
    }
});