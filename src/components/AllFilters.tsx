'use client'

import React, { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const AllFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const paramValue = searchParams.get('showFilters')?.toString();

  const ALL_FILTERS = [
    { name: "Rango de Precios", id: "PriceRange" },
    { name: "Sexo", id: "Gender" },
    { name: "Tipo de producto", id: "ProductType" },
    { name: "Colores", id: "Color" },
    { name: "Estado", id: "Condition" },
    { name: "Tipo de venta", id: "SaleType" },
  ];

  useEffect(() => {
    console.log({ paramValue });
  }, [paramValue]);

  function handleFilters(term: any) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('showFilters', term);
    } else {
      params.delete('showFilters');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div
        className={`grayLayer fixed inset-0 bg-gray-900/30 z-40 ${
          paramValue ? 'block' : 'hidden'
        }`}
        onClick={() => {
          handleFilters(null);
          document.body.classList.remove('overflow-hidden')
        }}
      ></div>
      <div
        className={`filtersContainer absolute top-[-40px] z-50 ${
          paramValue ? 'right-0' : '-right-80'
        } max-w-96 w-56 bg-primary-ice-color text-primary-blue font-buenard h-screen p-4 flex-col items-center justify-start pt-10 gap-8 transition-all duration-300`}
      >
        <h2 className="text-xl">Filtros</h2>
        <ul className="filtersWrapper flex flex-col items-start gap-6">
          {ALL_FILTERS.map((filter) => (
            <li
              key={filter.id} // Agrega una key para evitar advertencias en la consola
              id={filter.id}
              className="group/liFilter filterItem w-full flex flex-row items-center justify-between gap-8 cursor-pointer"
            >
              {filter.name}
              <span className="group-hover/liFilter:scale-125 transition-all">
                <svg width="20" height="20" viewBox="0 0 32 32">
                  <path
                    fill="#000000"
                    d="m18.72 6.78l-1.44 1.44L24.063 15H4v2h20.063l-6.782 6.78l1.44 1.44l8.5-8.5l.686-.72l-.687-.72z"
                  ></path>
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
