export default defineEventHandler((event) => {
    const { id } = getQuery(event)
    switch (id) {
        case '11':
            return {
                svd: 'https://www.son-video.com/rayon/haute-fidelite/amplificateurs/amplis-hi-fi-stereo/_filters'
            }
        case '12':
            return {
                svd: 'https://www.son-video.com/rayon/home-cinema/caissons-et-vibreurs/caissons-de-basses/_filters'
            }
        case '13':
            return {
                svd: 'https://www.son-video.com/rayon/haute-fidelite/systemes-multiroom/enceintes-multiroom/_filters'
            }
        case '21':
            return {
                svd: 'https://www.son-video.com/rayon/haute-fidelite/amplificateurs/amplis-a-tubes/_filters'
            }
        case '22':
            return {
                svd: 'https://www.son-video.com/rayon/haute-fidelite/streaming-et-reseau/dac-audio-usb/_filters'
            }
        case '23':
            return {
                svd: 'https://www.son-video.com/rayon/accessoires/extras/accessoires-television/_filters'
            }
        case '31':
            return {
                svd: 'https://www.son-video.com/rayon/enceintes/enceintes/enceintes-colonne/_filters'
            }
        case '32':
            return {
                svd: 'https://www.son-video.com/rayon/home-cinema/chaines-home-cinema/barres-de-son/_filters'
            }
        case '33':
            return {
                svd: 'https://www.son-video.com/rayon/accessoires/cables-audio/cables-rca-cinch-stereo/_filters'
            }
        case '41':
            return {
                svd: 'https://www.son-video.com/rayon/television/televiseurs/televiseurs-uhd-4k/_filters'
            }
        case '42':
            return {
                svd: 'https://www.son-video.com/rayon/television/televiseurs/televiseurs-oled/_filters'
            }
        case '43':
            return {
                svd: 'https://www.son-video.com/rayon/television/televiseurs/televiseurs-qled/_filters'
            }
    }
});