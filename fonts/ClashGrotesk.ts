import localFont from 'next/font/local'

export const clashGrotesk = localFont({
    src: [
        {
            path: '../public/fonts/ClashGrotesk/Fonts/OTF/ClashGrotesk-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/ClashGrotesk/Fonts/OTF/ClashGrotesk-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/ClashGrotesk/Fonts/OTF/ClashGrotesk-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/ClashGrotesk/Fonts/OTF/ClashGrotesk-Semibold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/ClashGrotesk/Fonts/OTF/ClashGrotesk-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-clash-grotesk'
}) 