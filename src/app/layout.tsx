import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AllFilters } from "@/components/AllFilters";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LEVEL UP",
  description: `COMPRA Y VENTA DE ROPA, ZAPATILLAS Y ACCESORIOS DE PRIMERA Y SEGUNDA MANO. ARTÍCULOS ORIGINALES. 
    COMPRA LAS ZAPATILLAS QUE HAS ESTADO ESPERANDO AL MEJOR PRECIO. LUCE UNA PRENDA QUE OTRO NO PUDO DARLE LA OPORTUNIDAD.`,
};

interface RootLayoutProps {
  children: React.ReactNode;
  searchParams?: {
    showFilters?: string;
  };
}

export default function RootLayout({
  children,
  searchParams,
}: RootLayoutProps) {
  const showFilters = searchParams?.showFilters || "";

  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
  
          <Navbar showFilters={showFilters} />
        
        {children}
        <Footer />
        
          <AllFilters />
        
      </body>
    </html>
  );
}
