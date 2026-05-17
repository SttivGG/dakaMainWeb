import type { Metadata } from "next";
import "./globals.css";

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
  ],
  icons: {
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
  const themeScript = `
    (() => {
      try {
        const storageKey = "daka-theme";
        const storedTheme = localStorage.getItem(storageKey);
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = storedTheme === "light" || storedTheme === "dark"
          ? storedTheme
          : prefersDark ? "dark" : "light";

        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.dataset.theme = theme;
      } catch {
        document.documentElement.classList.remove("dark");
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return (
    <html
      lang="es"
      className="h-full antialiased font-sans"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
