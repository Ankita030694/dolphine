import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./shared/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dolphin Hotels and Resorts - Luxury Hotels and Resorts in India & United Kingdom",
  description: "Dolphin Hotels and Resorts represents the grace and elegance of the marine mammal. Dolphin House New Delhi, The Dolphin New Delhi and The Dolphin Ganges Rishikesh the other 3 existing hotels in UK are – Dolphin House London, The Dolphin Reading, The Dolphin Villa Bath.",
  keywords: "dolphin hotels,dolphin luxury hotels,5 star hotels,resorts in india,business hotels,luxury hotels in india,best hotels in india,hotels in united kingdom,hotels in uk,hotels in london,hotels in reading,hotels in bath,hotels in new delhi,hotels in delhi,luxury resorts in rishikesh,hotels in rishikesh,resorts in uttarakhand",
  openGraph: {
    title: "Dolphin Hotels and Resorts - Luxury Hotels and Resorts in India & United Kingdom",
    description: "Dolphin Hotels and Resorts represents the grace and elegance of the marine mammal. Dolphin House New Delhi, The Dolphin New Delhi and The Dolphin Ganges Rishikesh the other 3 existing hotels in UK are – Dolphin House London, The Dolphin Reading, The Dolphin Villa Bath.",
    url: "https://www.dolphinhotels.com/",
    siteName: "Dolphin Hotels and Resorts",
    images: [
      {
        url: "https://www.dolphinhotels.com/wp-content/uploads/2021/02/logo-1.svg",
        width: 1200,
        height: 630,
        alt: "Dolphin Hotels and Resorts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dolphin Hotels and Resorts - Luxury Hotels and Resorts in India & United Kingdom",
    description: "Dolphin Hotels and Resorts represents the grace and elegance of the marine mammal. Dolphin House New Delhi, The Dolphin New Delhi and The Dolphin Ganges Rishikesh the other 3 existing hotels in UK are – Dolphin House London, The Dolphin Reading, The Dolphin Villa Bath.",
    images: ["https://www.dolphinhotels.com/wp-content/uploads/2021/02/logo-1.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link href="https://fonts.cdnfonts.com/css/aileron" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
