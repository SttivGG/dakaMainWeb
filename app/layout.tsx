import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dakaweb.com"),
  title: "Daka Web | Landing pages y páginas web para negocios",
  description:
    "Creamos landing pages y páginas web modernas, rápidas y claras para negocios que quieren vender mejor en internet.",
  keywords: [
    "landing pages",
    "páginas web",
    "diseño web",
    "negocios",
    "negocios locales",
    "Putumayo",
    "Colombia",
    "Daka Web",
  ],icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Daka Web | Landing pages y páginas web para negocios",
    description:
      "Creamos landing pages y páginas web modernas, rápidas y claras para negocios que quieren vender mejor en internet.",
    url: "https://dakaweb.com",
    siteName: "Daka Web",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
