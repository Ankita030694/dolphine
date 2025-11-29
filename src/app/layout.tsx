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
  title: "House of Dolphin - Home & Lifestyle Brand | Dmart Exclusif",
  description: "Welcome to Dmart Exclusif – your trusted destination for luxury spiritual and lifestyle products. We offer a thoughtfully curated collection that blends traditional craftsmanship with modern elegance, featuring handcrafted god idols, premium home décor, festive accessories, and exclusive gifting solutions.",
  keywords: "house of dolphin,dmart exclusif,home and lifestyle brand,luxury spiritual products,luxury lifestyle products,handcrafted god idols,premium home décor,festive accessories,exclusive gifting solutions,traditional craftsmanship,modern elegance,artisanal products,home decor india,luxury home accessories,spiritual products,curated home décor,designer furniture,rare collectibles,international art",
  openGraph: {
    title: "House of Dolphin - Home & Lifestyle Brand | Dmart Exclusif",
    description: "Welcome to Dmart Exclusif – your trusted destination for luxury spiritual and lifestyle products. We offer a thoughtfully curated collection that blends traditional craftsmanship with modern elegance, featuring handcrafted god idols, premium home décor, festive accessories, and exclusive gifting solutions.",
    url: "https://www.houseofdolphin.com/",
    siteName: "House of Dolphin",
    images: [
      {
        url: "https://www.houseofdolphin.com/logo-dol.png",
        width: 1200,
        height: 630,
        alt: "House of Dolphin - Home & Lifestyle Brand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "House of Dolphin - Home & Lifestyle Brand | Dmart Exclusif",
    description: "Welcome to Dmart Exclusif – your trusted destination for luxury spiritual and lifestyle products. We offer a thoughtfully curated collection that blends traditional craftsmanship with modern elegance, featuring handcrafted god idols, premium home décor, festive accessories, and exclusive gifting solutions.",
    images: ["https://www.houseofdolphin.com/logo-dol.png"],
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
