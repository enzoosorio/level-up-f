'use client'

import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SpecificFilter } from './partOfComponents/filters/SpecificFilter';
import { roboto } from '@/utils/fonts';

interface AllFiltersProps {
  name : string,
  id : string
}

export const AllFilters = () => {

  if (typeof window === 'undefined') {
    return null; // Evita usar useSearchParams durante el prerenderizado
  }

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const paramValue = searchParams.get('showFilters')?.toString();
  const [contentFilterAsObject, setContentFilterAsObject] = useState<AllFiltersProps | null>({
    id : '',
    name : ''
  });

  const ALL_FILTERS = [
    { name: "Ordenar por", id: "OrderBy" },
    { name: "Rango de Precios", id: "PriceRange" },
    { name: "Género", id: "Gender" },
    { name: "Tipo de producto", id: "ProductType" },
    { name: "Talla", id: "Tallaje" },
    { name: "Condición", id: "Condition" },
    { name: "TAGS", id: "Tags" },
  ];


  function handleFiltersAllFilters(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term && term !== '') {
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
          handleFiltersAllFilters('');
          document.body.classList.remove('overflow-hidden')
        }}
      ></div>
      <div
        className={` filtersContainer overflow-y-auto ${roboto.className} absolute top-[-40px] right-0 z-50 ${
          paramValue ? 'right-0 z-[999999999999999999]' : 'right-[-1000px] '
        } max-w-96 w-56 bg-white text-primary-bue font-buenard h-screen p-4 flex flex-col items-center justify-start pt-10 gap-6 transition-all duration-300`}
      >
        <h2 className={`text-xl`}>Filtros</h2>
        {contentFilterAsObject === null ? 
        (
          <ul className="filtersWrapper flex flex-col items-start gap-10">
          {ALL_FILTERS.map((filter) => (
            <li
              onClick={() => {setContentFilterAsObject({id : filter.id, name : filter.name})}}
              key={filter.id} // Agrega una key para evitar advertencias en la consola
              id={filter.id}

              className="group/liFilter filterItem w-full flex flex-row items-center justify-between gap-8 cursor-pointer"
            >
              {filter.name}
              <span className="group-hover/liFilter:scale-125 transition-all">
                <svg width="20" height="20" viewBox="0 0 32 32" className='stroke-primary-bue'>
                  <path
                    fill="#000000"
                    d="m18.72 6.78l-1.44 1.44L24.063 15H4v2h20.063l-6.782 6.78l1.44 1.44l8.5-8.5l.686-.72l-.687-.72z"
                  ></path>
                </svg>
              </span>
            </li>
          ))}
        </ul>
        ) :        
        (
          <div
          className={`flex flex-col items-start gap-10 relative  w-full `}
        >
          <button 
          onClick={() => setContentFilterAsObject(null)}
          className='absolute -top-12 left-0'   
            >
          <svg width="24" height="24" viewBox="0 0 24 24" className='fill-primary-bue'><path d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"/></svg>
          </button>
          <SpecificFilter id={contentFilterAsObject.id} />
        </div>
        )
        }
      </div>
    </>
  );
};
