import type { Metadata } from "next";
import { Archivo_Black, Questrial } from "next/font/google";
import "./globals.css";
import AOSInitializer from '@/components/AOSInitializer';
const archivoBlack = Archivo_Black({
  weight: "400", //
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
  title: "Closet Sustentável",
  description: "O melhor brechó de Salvador",
  icons: "/logofavi.svg"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
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
