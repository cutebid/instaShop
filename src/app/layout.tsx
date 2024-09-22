"use client";
import { DM_Sans } from "next/font/google";
import { Provider } from "react-redux";
import store from "./store";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";



const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">
      <head>
        {/* PWA Manifest and Icons */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="application-name" content="MyApp" />
        <meta name="description" content="This is a progressive web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${dmSans.className} md:w-3/5 md:mx-auto`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
