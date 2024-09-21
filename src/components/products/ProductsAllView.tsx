"use client";

import React, { useState} from "react";
import { productos } from "@/utils/products";
import { useOutsideClick } from "@/utils/clickOutside";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ProductsAllView = () => {
  const [toggleDropdownvalue, setToggleDropdownvalue] = useState<number>(0);

  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const liRef = useOutsideClick(() => {
    if (toggleDropdownvalue !== 0) {
      setToggleDropdownvalue(0);
    }
  });
  
  if (typeof window === 'undefined') {
    return null; // Evita usar useSearchParams durante el prerenderizado
  }


  const SOME_FILTERS = [
    {
      nameFilter: "ORDENAR POR",
      subFilterMethods: [
        "Nombre, creciente",
        "Precios más bajos",
        "Precios más altos",
        "Más reciente",
        "Relevancia",
        "Nombre, decreciente",
      ],
    },
    {
      nameFilter: "TIPO DE PRODUCTO",
      subFilterMethodsObject: [
        {
          subFilterName: "Casaca",
          quantity: 81,
        },
        {
          subFilterName: "Camisa",
          quantity: 24,
        },
        {
          subFilterName: "Polo",
          quantity: 14,
        },
        {
          subFilterName: "Pantalon",
          quantity: 63,
        },
        {
          subFilterName: "Blazer",
          quantity: 34,
        },
        {
          subFilterName: "Zapatos",
          quantity: 12,
        },
        {
          subFilterName: "Zapatillas",
          quantity: 81,
        },
      ],
    },
  ];


  const toggleDropdown = (dropdown: number) => {
    setToggleDropdownvalue((prev) => (prev === dropdown ? 0 : dropdown));

  };

  function handleFilters(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term && term!== '') {
      params.set('showFilters', term);
    } else {
      params.delete('showFilters');
    }

    replace(`${pathname}?${params.toString()}`);

  }

  return (
    <section className={`relative w-11/12 md:w-full 2xl:w-[1080px] mx-auto grid grid-cols-2 items-center justify-center gap-3 overflow-y-hidden pb-6 `}>
      <div className="relative flex flex-row justify-between px-2 md:px-12 items-center col-span-2 w-full rounded-lg font-buenard mx-auto">
        <h3 className={`text-2xl `}>Filtros:</h3>
        <ul className="flex flex-row justify-center items-center gap-4 bg-gray-300/60 rounded-lg p-3">
          {SOME_FILTERS.map((filter, index) => (
            <li
              key={index}
              onClick={() => toggleDropdown(index + 1)}
              ref={liRef}
              className="hidden md:block someFilters relative transition-all cursor-pointer"
            >
              <span className="hover:font-bold flex flex-row items-center justify-center gap-2">
                {filter.nameFilter}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="-rotate-90"
                >
                  <path
                    fill="#000000"
                    d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z"
                  ></path>
                </svg>
              </span>
              <ul
                className={`${
                  toggleDropdownvalue === index + 1 ? "block" : "hidden"
                } absolute top-9 left-0 z-40 w-52 max-h-96 bg-white border rounded-sm p-2 pl-4 gap-6`}
              >
                {filter?.subFilterMethods && 
                  filter.subFilterMethods.map((subfilterMethod, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer mb-6 hover:font-semibold flex flex-row items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        name="checkSomeFilters"
                        className="bg-transparent border rounded-lg"
                      />
                      <span className="text-lg">{subfilterMethod}</span>
                    </li>
                  ))}
                {filter?.subFilterMethodsObject &&
                  filter.subFilterMethodsObject.map((subfilterMethod, idx) => (
                    <li
                      key={idx}
                      className="text-lg cursor-pointer mb-6 hover:font-semibold flex flex-row items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        name="checkSomeFilters"
                        className="bg-transparent border rounded-lg"
                      />
                      <span className="flex flex-row items-center justify-center">
                        {subfilterMethod.subFilterName} (
                        {subfilterMethod.quantity})
                      </span>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
          <li
            onClick={() => {
              handleFilters('true')
              document.body.classList.add('overflow-hidden')
              if(typeof window !== 'undefined')
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="allFiltersLi hover:font-bold transition-all flex flex-row items-center justify-center gap-2 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
              />
            </svg>
            TODOS LOS FILTROS
          </li>
          
        </ul>
      </div>
      {productos.map((tshirt, index) => (
        <a
          key={tshirt.id}
          href={`/products/${tshirt.id}`}
          className={`relative mt-14 md:mt-16 hover:scale-[1.03] border border-gray-600/45 shadow-lg shadow-gray-500/65 rounded-md p-2 transition-transform ${
            index % 3 === 0
              ? "col-span-2 row-span-1 md:w-[600px] md:mx-auto"
              : "col-span-1 row-span-1 md:w-64 md:mx-auto"
          }`}
        >
          <picture className="flex flex-col items-center justify-center">
            <img
              src={tshirt.imageUrl}
              alt={tshirt.imageAlt}
              width={563}
              height={845}
              className={`w-full ${index % 3 === 0 ? "w-[90%] mx-auto" : ""}`}
              style={{
                background: `radial-gradient(circle, transparent 0%, #CEE9ED 10%, #CEE9ED 20%, transparent 80%)`,
              }}
            />
            <h2 className="pl-2 w-full text-pretty text-sm md:text-base">
              {tshirt.name}
            </h2>
            <p className="pl-2 w-full text-sm md:text-base">S/{tshirt.price}</p>
          </picture>
          {tshirt.itsOnSale && (
            <p
              className={`text-white bg-primary-green rounded-sm ${
                index % 3 === 0 ? "py-3 px-7 text-xl" : "px-3 py-2"
              } absolute top-0 right-0`}
            >
              OFERTA
            </p>
          )}
        </a>
      ))}
    </section>
  );
};
