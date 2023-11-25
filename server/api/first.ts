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
                        img: 'http://www.080.fr/img/produits/IN300dess.jpg',
                        svd: 'https://www.son-video.com/rayon/haute-fidelite/amplificateurs/amplis-hi-fi-stereo/_filters'
                    },
                    {
                        id: 12,
                        title: 'Caisons et vibreurs',
                        img: 'http://www.080.fr/img/produits/dessin_graham_ls59.jpg',
                        svd: 'https://www.son-video.com/rayon/home-cinema/caissons-et-vibreurs/caissons-de-basses/_filters'
                    },
                    {
                        id: 13,
                        title: 'Systèmes multiroom',
                        img: 'http://www.080.fr/img/produits/prod18.jpg',
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
                        img: 'http://www.080.fr/img/produits/IN300dess.jpg',
                        svd: 'https://www.son-video.com/rayon/haute-fidelite/amplificateurs/amplis-a-tubes/_filters'
                    },
                    {
                        id: 22,
                        title: 'Streaming et réseau',
                        img: 'http://www.080.fr/img/produits/ST200dess.jpg',
                        svd: 'https://www.son-video.com/rayon/haute-fidelite/streaming-et-reseau/dac-audio-usb/_filters'
                    },
                    {
                        id: 23,
                        title: 'Extra',
                        img: 'http://www.080.fr/img/produits/prod17.jpg',
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
                        img: 'http://www.080.fr/img/produits/produit_Atlantis%20Lab_dessin.jpg',
                        svd: 'https://www.son-video.com/rayon/enceintes/enceintes/enceintes-colonne/_filters'
                    },
                    {
                        id: 32,
                        title: "Pack d'enceintes",
                        img: 'http://www.080.fr/img/produits/prod14.jpg',
                        svd: 'https://www.son-video.com/rayon/home-cinema/chaines-home-cinema/barres-de-son/_filters'
                    },
                    {
                        id: 33,
                        title: 'Cables audio',
                        img: 'http://www.080.fr/img/produits/prod11.jpg',
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
                        img: 'https://www.shutterstock.com/image-vector/simple-black-white-line-drawing-260nw-323038847.jpg',
                        svd: 'https://www.son-video.com/rayon/television/televiseurs/televiseurs-uhd-4k/_filters'
                    },
                    {
                        id: 42,
                        title: "TV OLED",
                        img: 'https://www.shutterstock.com/image-vector/simple-black-white-line-drawing-260nw-323038847.jpg',
                        svd: 'https://www.son-video.com/rayon/television/televiseurs/televiseurs-oled/_filters'
                    },
                    {
                        id: 43,
                        title: 'TV QLED',
                        img: 'https://www.shutterstock.com/image-vector/simple-black-white-line-drawing-260nw-323038847.jpg',
                        svd: 'https://www.son-video.com/rayon/television/televiseurs/televiseurs-qled/_filters'
                    },
                ]
            }
    }
});