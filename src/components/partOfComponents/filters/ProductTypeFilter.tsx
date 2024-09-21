import { poppins } from '@/utils/fonts'
import React, {  useState } from 'react'


export const ProductTypeFilter = () => {

  const [activeDropdown, setActiveDropdown] = useState(-1);
 
  const toggleDropdown = (index : number) => {
    // Si el dropdown que se hizo click ya está activo, lo cerramos
    setActiveDropdown(activeDropdown === index ? -1 : index);
  };

  // se pueden elegir 2 o mas tipos de productos
  // dependiendo si se tiene el filtro activo de genero, se usaran algunas diferentes
  // categoria sin prendas no se muestra o se muestra pero no se podra clickear.
  const clothingCategories =  [ 
    'Casacas y Abrigos',
      'Poleras',
      'Chompas',
      'Blazers',
      'Polos',
      'Tops',
      'Vestidos',
      'Pantalones',
      'Jeans',
      'Joggers y Cargo',
      'Camisas',
      'Blusas',
      'Faldas',
      'Ropa deportiva',
      'Accesorios',
      'Ropa Formal',
      'Shorts',
      'Shorts de baño'
    ]

    const sneakersCategories =  [ 
      'Zapatillas urbanas',
      'Zapatillas deportivas',
      'Sandalias',
      'Zapatos',
      'Suecos',
      ]

      const accesoriesCategories =  [ 
        'Medias',
        'Boxers / Calzoncillos',
        'Collares',
        'Gorras',
        'Pasamontañas',
        'Relojes',
        'Perfumes',
        'Toallas',
        'Pulseras',
        ]


  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
            <h3 className='font-onest text-xl text-center w-max mx-auto '>
              Género
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
          <ul className="pl-4">
            {clothingCategories.map((category, index) => (
              <li key={index} className="py-2">
                <div className='flex flex-row items-center gap-2 '>
                  <input type='radio' id={`${category}_${index}`} name='productType' value={'male'} className='' />
                  <label htmlFor={`${category}_${index}`}>{category}</label>
                </div>
                </li>
            ))}
          </ul>
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
          <ul className="pl-4">
            {sneakersCategories.map((category, index) => (
              <li key={index} className="py-2">
                <div className='flex flex-row items-center gap-2 '>
                  <input type='radio' id={`${category}_${index}`} name='productType' value={'male'} className='' />
                  <label htmlFor={`${category}_${index}`}>{category}</label>
                </div>
                </li>
            ))}
          </ul>
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
          <ul className="pl-4">
            {accesoriesCategories.map((category, index) => (
              <li key={index} className="py-2">
                <div className='flex flex-row items-center gap-2 '>
                  <input type='radio' id={`${category}_${index}`} name='productType' value={'male'} className='' />
                  <label htmlFor={`${category}_${index}`}>{category}</label>
                </div>
                </li>
            ))}
          </ul>
        )}
            </div>
    </form>
  )
}
