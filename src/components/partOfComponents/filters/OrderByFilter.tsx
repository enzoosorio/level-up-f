import { poppins } from '@/utils/fonts'
import React from 'react'

export const OrderByFilter = () => {

    const ORDER_METHOD= [
        "Nombre, creciente",
        "Precios más bajos",
        "Precios más altos",
        "Más reciente",
        "Relevancia",
        "Nombre, decreciente",
      ]

  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
      <h3 className='font-onest text-xl text-center w-max mx-auto leading-relaxed '>
        Ordenar por
      </h3>
      <ul className="p-3 pl-4 bg-slate-100/85 rounded-md w-full flex flex-col ">
        {ORDER_METHOD.map((category, index) => (
          <li key={index} className="py-3 mb-2 w-40 mx-auto">
            <div className='flex flex-row items-center gap-2 '>
              <input type='radio' id={`${category}_${index}`} name='sizing' value={'male'} className='' />
              <label htmlFor={`${category}_${index}`}>{category}</label>
            </div>
            </li>
        ))}
      </ul>
    </form>
  )
}
