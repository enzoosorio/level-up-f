import { Adding } from "@/components/hero/Adding";
import { CardProductsHero } from "@/components/hero/CardProductsHero";
import { InfiniteCarousel } from "@/components/hero/InfiniteCarousel";
import { ParallaxEffect } from "@/components/hero/ParallaxEffect";
import { RecentProducts } from "@/components/hero/RecentProducts";
import Image from "next/image";

export default function Home() {
  return (
    <section>
    <header className="w-11/12 mx-auto">
       <h3 className="font-buenard text-center mt-4 text-lg">
      Oportunidad para darle una segunda oportunidad a las prendas que no han
      sido aprovechadas del todo. Prendas y accesorios de todo tipo.
    </h3>
    <p
      className="text-primary-orange font-bold font-buenard text-xl mt-8 text-center"
    >
      ENCUENTRA LAS MEJORES MARCAS
    </p>
    </header>
    <InfiniteCarousel />
    <CardProductsHero />
    <ParallaxEffect />
    <RecentProducts />
    <Adding />
    </section>
  );
}
