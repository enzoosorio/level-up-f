import { poppins } from '@/utils/fonts'
import React from 'react'


// aplicar si esque es ropa (se tiene el filtro de ropa) solo tallas de ropa, y si no, tallas de zapatillas
// bloquear tallas inexistentes (si no tengo ropa de talla S, no se podra elegir talla S)
// se puede elegir 2 o mas tallas a la vez
const sizes = [
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  '4us',
  '4.5us',
  '5us',
  '5.5us',
  '6us',
  '6.5us',
  '7us',
  '7.5us',
  '8us',
  '8.5us',
  '9us',
  '9.5us',
  '10us',
  '10.5us',
  '11us',
  '11.5us',
  '12us',
  '12.5us',
  '13us'
];

export const TallajeFilter = () => {
  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
            <h3 className='font-onest text-xl text-center w-max mx-auto '>
              Tallaje
            </h3>
            <ul className="p-3 pl-4 bg-slate-100/85 rounded-md w-full flex flex-col ">
            {sizes.map((category, index) => (
              <li key={index} className="py-3 mb-4 w-16 mx-auto">
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
