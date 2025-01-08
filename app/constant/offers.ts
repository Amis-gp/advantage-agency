export const META_SLIDES = [
    {
        logo: "/img/offers/meta-logo.svg",
        background: "/img/offers/1.svg",
        title: "offers.offers.meta.slide1.title",
        subtitle: "offers.offers.meta.slide1.subtitle",
        content: [
            "offers.offers.meta.slide1.content.0",
            "offers.offers.meta.slide1.content.1"
        ],
        link: { 
            text: "offers.offers.meta.slide1.link", 
            href: "/services/meta-ads" 
        }
    },
    {
        logo: "/img/offers/meta-logo.svg",
        background: "/img/offers/2.svg",
        subtitle: "offers.offers.meta.slide2.subtitle",
        list: Array.from({ length: 5 }, (_, i) => ({
            title: `offers.offers.meta.slide2.list.${i}.title`,
            description: `offers.offers.meta.slide2.list.${i}.description`
        }))
    },
    {
        logo: "/img/offers/meta-logo.svg",
        background: "/img/offers/3.svg",
        list: Array.from({ length: 2 }, (_, i) => ({
            title: `offers.offers.meta.slide3.list.${i}.title`,
            description: `offers.offers.meta.slide3.list.${i}.description`
        })),
        link1: { 
            text: "offers.offers.meta.slide3.caseLink", 
            href: "/case-studies" 
        },
        content: ["offers.offers.meta.slide3.content"],
        link: { 
            text: "offers.offers.meta.slide3.strategyLink", 
            href: "/strategy" 
        }
    }
];

export const GOOGLE_SLIDES = [
    {
        logo: "/img/offers/google-logo.svg",
        background: "/img/offers/1.svg",
        title: "offers.offers.google.slide1.title",
        subtitle: "offers.offers.google.slide1.subtitle",
        content: [
            "offers.offers.google.slide1.content.0",
            "offers.offers.google.slide1.content.1"
        ],
        link: { 
            text: "offers.offers.google.slide1.link", 
            href: "/services/pps-ads" 
        }
    },
    {
        logo: "/img/offers/google-logo.svg",
        background: "/img/offers/2.svg",
        subtitle: "offers.offers.google.slide2.subtitle",
        list: Array.from({ length: 5 }, (_, i) => ({
            title: `offers.offers.google.slide2.list.${i}.title`,
            description: `offers.offers.google.slide2.list.${i}.description`
        }))
    },
    {
        logo: "/img/offers/google-logo.svg",
        background: "/img/offers/3.svg",
        list: Array.from({ length: 2 }, (_, i) => ({
            title: `offers.offers.google.slide3.list.${i}.title`,
            description: `offers.offers.google.slide3.list.${i}.description`
        })),
        link1: { 
            text: "offers.offers.google.slide3.caseLink", 
            href: "/case-studies" 
        },
        content: ["offers.offers.google.slide3.content"],
        link: { 
            text: "offers.offers.google.slide3.strategyLink", 
            href: "/strategy" 
        }
    }
];

export const LANDING_SLIDES = [
    {
        logo: "/img/offers/landing-logo.svg",
        background: "/img/offers/1.svg",
        title: "offers.offers.landing.slide1.title",
        subtitle: "offers.offers.landing.slide1.subtitle",
        content: [
            "offers.offers.landing.slide1.content.0",
            "offers.offers.landing.slide1.content.1"
        ],
        link: { 
            text: "offers.offers.landing.slide1.link", 
            href: "/services/landing-page" 
        }
    },
    {
        logo: "/img/offers/landing-logo.svg",
        background: "/img/offers/2.svg",
        subtitle: "offers.offers.landing.slide2.subtitle",
        list: Array.from({ length: 5 }, (_, i) => ({
            title: `offers.offers.landing.slide2.list.${i}.title`,
            description: `offers.offers.landing.slide2.list.${i}.description`
        }))
    },
    {
        logo: "/img/offers/landing-logo.svg",
        background: "/img/offers/3.svg",
        list: Array.from({ length: 2 }, (_, i) => ({
            title: `offers.offers.landing.slide3.list.${i}.title`,
            description: `offers.offers.landing.slide3.list.${i}.description`
        })),
        link1: { 
            text: "offers.offers.landing.slide3.caseLink", 
            href: "/case-studies" 
        },
        content: ["offers.offers.landing.slide3.content"],
        link: { 
            text: "offers.offers.landing.slide3.strategyLink", 
            href: "/strategy" 
        }
    }
];
