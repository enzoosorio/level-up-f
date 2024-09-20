

import { AllFilters } from "@/components/AllFilters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LEVEL UP - Todos los productos",
  description: `Ropa, zapatillas, accesorios y más productos nuevos y 
  de segunda mano podrás encontrar aquí. 100% originales y junto a un buen precio. 
  Dale una segunda oportunidad a los productos que no fueron aprovechados en su momento.`,
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <main className="mt-8 xl:max-w-[1200px] mx-auto relative overflow-x-hidden ">
          
        {children}
        </main>
        
  );
}
