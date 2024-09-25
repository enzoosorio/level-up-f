
import { Suspense } from "react";
import { AllProductsComponent } from "../partOfComponents/products/allProductsComponent";
import { FiltersComponent } from "../partOfComponents/products/fIltersComponent";
import { AllProductsSkeleton } from "@/skeleton/AllProductsSkeleton";

export const ProductsAllView = () => {

  return (
    <section className={`relative w-11/12 md:w-full 2xl:w-[1080px] mx-auto grid grid-cols-2 items-center justify-center gap-3 overflow-y-hidden pb-6 `}>
      <div className="relative flex flex-row justify-between px-2 md:px-12 items-center col-span-2 w-full rounded-lg font-buenard mx-auto">
        <h3 className={`text-2xl `}>Filtros:</h3>
        <FiltersComponent/>
      </div>
      <Suspense fallback={<AllProductsSkeleton/>}>
      <AllProductsComponent/>
      </Suspense>
    </section>
  );
};
