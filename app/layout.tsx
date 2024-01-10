import localFont from 'next/font/local';

import type { Metadata } from 'next';

import { Racing_Sans_One } from 'next/font/google';

import '@Styles';

import Footer from '@Components/Footer';
import Header from '@Components/Header';

const title = 'Turbo Board - Video Game Bounties';
const description = 'Turbo Board acts as an aggregate for Discord community video game challenges.';

const racing = Racing_Sans_One({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-racing',
});

const mona = localFont({ src: '../public/fonts/mona.woff2', variable: '--font-mona' });

export const metadata: Metadata = {
    description,
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon-16x16.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/apple-touch-icon.png',
        },
    ],
    manifest: '/site.webmanifest',
    openGraph: {
        description,
        images: [
            {
                url: 'https://turboboard.io/img/meta.jpg',
                width: 1200,
                height: 630,
            },
        ],
        title,
    },
    title: 'TurboBoard',
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['https://turboboard.io/img/meta.jpg'], // Must be an absolute URL
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${racing.variable} ${mona.variable}`}>
            <body className="bg-dark font-mona text-light">
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
