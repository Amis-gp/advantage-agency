export const getSlides = () => {
    return [
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
};
