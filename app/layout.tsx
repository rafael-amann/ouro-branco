import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#c5a059",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gessoourobranco.com.br"),
  title: "Gesso Ouro Branco | Gesso Convencional, Drywall e Sancas",
  description:
    "Gesso convencional e drywall para sua casa ou empresa. Forros rebaixados, sancas, molduras, cortineiros e divisórias com cuidado em cada acabamento.",
  keywords: [
    "Gesso Ouro Branco",
    "gesso residencial",
    "gesso convencional",
    "forro de drywall",
    "sanca iluminada com LED",
    "divisória de drywall",
    "revestimento 3d gesso",
    "cortineiro de gesso",
    "instalação de gesso",
    "acabamento fino gesso",
  ],
  authors: [{ name: "Gesso Ouro Branco" }],
  openGraph: {
    title: "Gesso Ouro Branco | Acabamentos de Alto Padrão em Gesso e Drywall",
    description:
      "Forros em gesso convencional e drywall, sancas, molduras e cortineiros. Converse com a equipe sobre seu projeto.",
    url: "https://gessoourobranco.com.br",
    siteName: "Gesso Ouro Branco",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ambiente moderno com forro de gesso e sanca iluminada - Gesso Ouro Branco",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
