import { string } from "astro:schema"

export const products = [
{
    title: "Razer Viper V3 Pro Sentinels Edition",
    desc: "For the Pro",
    hero:"/images/hero-one.webp"
},{
    title: "Razer Barracuda X Chroma",
    desc: "Hybrid Audio Freedom. Illuminated.",
    hero:"/images/hero-one.webp"
},{
    title: "Hello Kitty 50th Anniversary",
    desc: "Make it a oarty with our collection",
    hero:"/images/hero-one.webp"
}
]

interface BentoVar {
    title: string,
    desc: string,
    badgeTitle: string,
    image: string,
}

export const bento: BentoVar[] = [ // Cambié a BentoVar[]
    {
        title: "New Razer Blade 16",
        desc: "Fastest. Sharpest. Clearest.",
        badgeTitle: "",
        image: ""
    }, {
        title: "RAZER VIPER MINI SIGNATURE EDITION",
        desc: "THE BEST LIGHTWEIGHT PERFORMANCE GAMING MOUSE",
        badgeTitle: "Only at Razer",
        image: ""
    }, {
        title: "RAZER FREYJA",
        desc: "THE WORLD’S FIRST HD HAPTIC GAMING CUSHION",
        badgeTitle: "",
        image: ""
    }, {
        title: "SILENT HILL 2 IMMERSIVE SPECIALS",
        desc: "FEEL REAL FEAR",
        badgeTitle: "",
        image: ""
    }, {
        title: "RAZER BLACKWIDOW V4 PRO 75%",
        desc: "SWAP OUT. SWAP IN. NO LIMITS.",
        badgeTitle: "",
        image: ""
    }, { // Eliminé la coma extra aquí
        title: "RAZER BASILISK V3 PRO 35K",
        desc: "THE APEX OF IMMERSION AND CUSTOMIZATION",
        badgeTitle: "",
        image: ""
    },
]