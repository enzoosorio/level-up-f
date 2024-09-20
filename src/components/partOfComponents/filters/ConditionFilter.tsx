import { poppins } from '@/utils/fonts'
import React from 'react'



export const ConditionFilter = () => {

  const conditionFilter = [
    'Nuevo',
    'Perfecto estado',
    'Semi nuevo',
    'Usado'
  ]

  return (
          <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
            <h3 className='font-onest text-xl text-center w-32 mx-auto '>
              Condición del producto
            </h3>
          <ul className="p-3 pl-4 bg-slate-100/85 rounded-md w-full flex flex-col ">
            {conditionFilter.map((category, index) => (
              <li key={index} className="py-3 mb-4 w-36  mx-auto">
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
