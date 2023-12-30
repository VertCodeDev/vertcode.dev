import type {Metadata} from 'next'
import {Outfit} from 'next/font/google'
import '../styles/globals.scss'
import {classNames} from "@/util/css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import {NavBarProvider} from "@/context/NavBarContext";

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
    icons: [
        {
            url: '/seo/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        },
        {
            url: '/seo/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
        },
        {
            url: '/seo/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
        },
        {
            url: '/seo/site.webmanifest',
            rel: 'manifest',
        },
        {
            url: '/seo/favicon.ico',
            rel: 'shortcut icon',
        },
        {
            url: '/seo/favicon.ico',
            rel: 'icon',
            type: 'image/x-icon',
        },
        {
            url: '/seo/android-chrome-192x192.png',
            rel: 'icon',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            url: '/seo/android-chrome-512x512.png',
            rel: 'icon',
            sizes: '512x512',
            type: 'image/png',
        },
        {
            url: '/seo/mstile-150x150.png',
            rel: 'icon',
            sizes: '150x150',
            type: 'image/png',

        },
    ],
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
        <NavBarProvider>
            <NavBar/>
            {children}
            <Footer/>
        </NavBarProvider>
        </body>
        </html>
    )
}
