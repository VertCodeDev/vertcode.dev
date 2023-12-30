import type {Metadata} from 'next'
import {Outfit} from 'next/font/google'
import '../styles/globals.scss'
import {classNames} from "@/util/css";
import Footer from "@/components/Footer";

const outfitFont = Outfit({
    weight: ['300', '500', '600'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'VertCode Development',
    metadataBase: new URL("https://vertcode.dev"),
    description: 'VertCode Development: Passionate Full Stack Web, Desktop, and Minecraft Server Development. Elevate your software with our dedication and expertise.',
    keywords: ['VertCode Development', 'Full Stack Web Development', 'Next.JS', 'Desktop Applications', 'Minecraft Server Development', 'Software Solutions', 'Custom Solutions', 'Minecraft Models', 'Minecraft Plugins', 'Minecraft Server', 'Minecraft', 'Software', 'Web Development', 'Desktop', 'Applications', 'Software Development', 'Software Solutions'],
    authors: [{name: 'VertCode Development', url: 'https://vertcode.dev'}],
    robots: 'index, follow',
    openGraph: {
        siteName: 'VertCode Development - Excellence in Software Development',
        title: 'VertCode Development - Excellence in Software Development',
        description: 'Choose VertCode Development for Full Stack Web, Desktop, and Minecraft Server Development. Our passion reflects in every line of code.',
        url: 'https://vertcode.dev',
        type: 'website',
        images: [
            {
                url: 'https://vertcode.dev/seo/android-chrome-192x192.png',
                width: 192,
                height: 192,
                alt: 'VertCode Development - Excellence in Software Development',
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "VertCode Development - Excellence in Software Development",
        description: "Choose VertCode Development for Full Stack Web, Desktop, and Minecraft Server Development. Our passion reflects in every line of code.",
        images: [
            {
                url: 'https://vertcode.dev/seo/android-chrome-192x192.png',
                width: 192,
                height: 192,
                alt: 'VertCode Development - Excellence in Software Development',
            }
        ],
        creator: "@VertCodeDev"
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body
            className={classNames(
                outfitFont.className, "overflow-x-hidden"
            )}
        >
        {children}
        <Footer/>
        </body>
        </html>
    )
}
