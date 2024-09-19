import "./globals.css";
import * as React from "react";
import { Inter, Fugaz_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";

//Components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Footer2 from "@/components/footer/Footer2";
import { metaData } from "@/data/meta-data";
import Animation from "@/components/animations/Animation";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";

export const viewport = {
  themeColor: "black",
};

//Setup & Meta
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  // style: "letter-spacing: -5%;",
});

export const fugaz = Fugaz_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fugaz",
  weight: "400",
});

export const metadata = {
  title: metaData.title,
  description: metaData.description,

  //Basic
  generator: metaData.title,
  applicationName: metaData.title,
  referrer: "origin-when-cross-origin",
  keywords: metaData.keywords,
  authors: [
    { name: "Bernardo Braga" },
    { name: "Pedro H. Alencar" },
    { name: "hokup", url: "https://hokup.com.br" },
  ],
  creator: "hokup",
  publisher: "hokup",
  // themeColor: "#FAFF00",

  //Open Graph
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.url,
    siteName: metaData.subtitle,
    images: [
      {
        url: "https://imgur.com/h38et8B",
        width: 1200,
        height: 600,
      },
      {
        url: "https://imgur.com/h38et8B",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black ${inter.variable} ${fugaz.variable}`}>
        {/* <Animation> */}
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
        {/* </Animation> */}
        <Analytics />
      </body>
    </html>
  );
}
