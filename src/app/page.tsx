import { Adding } from "@/components/hero/Adding";
import { CardProductsHero } from "@/components/hero/CardProductsHero";
import { InfiniteCarousel } from "@/components/hero/InfiniteCarousel";
import { ParallaxEffect } from "@/components/hero/ParallaxEffect";
import { RecentProducts } from "@/components/hero/RecentProducts";
import { poppins, roboto } from "@/utils/fonts";

export default function Home() {
  return (
    <main className="mt-4 lg:mt-8 xl:max-w-[1200px] mx-auto relative">
      <header className="w-11/12 mx-auto">
        <h3 className={`text-center text-lg text-pretty ${roboto.className} `}>
        Oportunidad para darle una segunda oportunidad a las prendas que no han
        sido aprovechadas del todo. Prendas y accesorios de todo tipo.
      </h3>
      <p
        className={`text-primary-orange font-bold text-xl mt-10 text-center ${poppins.className} `}
      >
        ENCUENTRA LAS MEJORES MARCAS
      </p>
      </header>
      <InfiniteCarousel />
      <CardProductsHero />
      <ParallaxEffect />
      <RecentProducts />
      <Adding />
    </main>
  );
}
