import type { Metadata } from "next";
import { Archivo_Black, Questrial } from "next/font/google";
import "./globals.css";
import AOSInitializer from "@/components/AOSInitializer";
const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Closet Sustentável | O melhor brechó de Salvador",
  description:
    "O melhor brechó de Salvador, localizado em Itapuã. Transformando a vida de mulheres diariamente.",
   icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico', 
  },
  viewport: "width=device-width, initial-scale=1",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  alternates: {
    canonical: "https://closetsustentavel.com.br",
  },
  robots: {
    index: process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV" ? false : true,
  },
  openGraph: {
    url: "https://closetsustentavel.com.br",
    siteName: "Closet Sustentável",
    locale: "pt_BR",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${archivoBlack.variable} ${questrial.variable} antialiased scroll-smooth`}
      >
        <main className="">
          <AOSInitializer />
          {children}
        </main>
      </body>
    </html>
  );
}
