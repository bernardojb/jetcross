import "./globals.css";
import * as React from "react";
import { Inter } from "next/font/google";
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

//Setup & Meta
// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

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
  themeColor: metaData.themeColor,

  //Open Graph
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.url,
    siteName: metaData.subtitle,
    images: [
      {
        url: "https://i.imgur.com/y46gswC.png",
        width: 1200,
        height: 600,
      },
      {
        url: "https://i.imgur.com/y46gswC.png",
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
      <body className={`bg-black`}>
        <Animation>
          <Header />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer2
            logo="/assets/main/main-logo.svg"
            text=" We design, build and ship custom websites by combining design and
              technology to create unique web projects for your brand."
          />
        </Animation>
        <Analytics />
      </body>
    </html>
  );
}
