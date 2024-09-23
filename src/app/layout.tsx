import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AllFilters } from "@/components/AllFilters";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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
}


export default async function RootLayout({
  children,
}: RootLayoutProps) {

  const session = await auth()

  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <SessionProvider session={session} >
          <Navbar session={session}/>
        {children}
        <Footer />
        {/* cambiar el useSearchParams por estado global. */}
          <AllFilters />
        
        </SessionProvider>
      </body>
    </html>
  );
}
