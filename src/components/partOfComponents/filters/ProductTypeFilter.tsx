'use client'

import { poppins } from '@/utils/fonts'
import React, {  Suspense, useState } from 'react'
import { ACCESORIES, ROPA, SNEAKERS } from '@/components/partOfComponents/products/filters'
import { FilterCard } from './FilterCard'
export const ProductTypeFilter = () => {

  const [activeDropdown, setActiveDropdown] = useState(-1);
 
  const toggleDropdown = (index : number) => {
    // Si el dropdown que se hizo click ya está activo, lo cerramos
    setActiveDropdown(activeDropdown === index ? -1 : index);
  };

  // se pueden elegir 2 o mas tipos de productos
  // dependiendo si se tiene el filtro activo de genero, se usaran algunas diferentes
  // categoria sin prendas no se muestra o se muestra pero no se podra clickear.


  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
            <h3 className='font-onest text-xl text-center w-max mx-auto '>
              Tipo de producto
            </h3>
            <div className='bg-slate-100/85 rounded-lg p-4 flex flex-col items-start justify-start gap-4 w-full'>
              <li 
              onClick={() => toggleDropdown(1)}
              className="flex flex-row items-center justify-between w-full gap-2 cursor-pointer bg-white px-1 rounded-sm">
                <p>Ropa</p>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    className={`${activeDropdown === 1 ? '-rotate-90' : 'rotate-0'} transition-transform`}
                  >
                    <path fill="#000000" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" />
                  </svg>
                </span>
              </li>
              {activeDropdown === 1 && (
               <Suspense fallback={<div>Loading...</div>}>
                  <FilterCard 
                  filterMethod={ROPA} 
                  nameForInput={'productType'} 
                  widthOfLi={'w-full'} 
                  searchParamName={'productType'} />
               </Suspense>
         
              )}
              <li 
              onClick={() => toggleDropdown(2)}
              className="flex flex-row items-center justify-between w-full gap-2 cursor-pointer bg-white px-1 rounded-sm">
                <p>Zapatillas</p>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    className={`${activeDropdown === 2 ? '-rotate-90' : 'rotate-0'} transition-transform`}
                  >
                    <path fill="#000000" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" />
                  </svg>
                </span>
              </li>
              {activeDropdown === 2 && (
                <Suspense fallback={<div>Loading...</div>}>
                  <FilterCard 
                  filterMethod={SNEAKERS} 
                  nameForInput={'productType'} 
                  widthOfLi={'w-full'} 
                  searchParamName={'productType'} />
                </Suspense>
              )}
              <li
              onClick={() => toggleDropdown(3)}
              className="flex flex-row items-center justify-between w-full gap-2 cursor-pointer bg-white px-1 rounded-sm">
                <p >Accesorios</p>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    className={`${activeDropdown === 3 ? '-rotate-90' : 'rotate-0'} transition-transform`}
                  >
                    <path fill="#000000" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" />
                  </svg>
                </span>
              </li>
              {activeDropdown === 3 && (
                <Suspense fallback={<div>Loading...</div>}>
                  <FilterCard 
                  filterMethod={ACCESORIES} 
                  nameForInput={'productType'} 
                  widthOfLi={'w-full'} 
                  searchParamName={'productType'} />
                </Suspense>
              )}
            </div>
    </form>
  )
}
