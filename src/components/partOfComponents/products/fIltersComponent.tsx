'use client'

import { useOutsideClick } from '@/utils/clickOutside';
import { useShowFilters } from '@/utils/useShowFilters';
import React, { useState } from 'react'
import { FILTERS } from './filters';

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

  interface Filters {
    nameFilter: string;
    subFilterMethods: string[];
    subFilterMethodsObject: SubFilterMethodsObject[];
  }

  interface SubFilterMethodsObject {
    subFilterName: string;
    quantity: number;
  }

export const FiltersComponent = () => {

  const twoFirstFilters = FILTERS.slice(0, 2);


  const [filters, setFilters] = useState<Filters[]>([]);

    const showAllFilters = useShowFilters((state) => state.showAllFilters) 
    const [toggleDropdownvalue, setToggleDropdownvalue] = useState<number>(0);
  
    const liRef = useOutsideClick(() => {
      if (toggleDropdownvalue !== 0) {
        setToggleDropdownvalue(0);
      }
    });

    const toggleDropdown = (dropdown: number) => {
        setToggleDropdownvalue((prev) => (prev === dropdown ? 0 : dropdown));
    
      };

  return (
    <ul className="flex flex-row justify-center items-center gap-4 bg-gray-300/60 rounded-lg p-3">
          {twoFirstFilters.map((filter, index) => (
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
                      <span className="text-lg">{subfilterMethod.label}</span>
                    </li>
                  ))}
               
              </ul>
            </li>
          ))}
          <li
            onClick={() => {
              showAllFilters()
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
  )
}
