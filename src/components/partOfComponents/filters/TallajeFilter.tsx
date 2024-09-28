import { inter, poppins } from '@/utils/fonts'
import React, { Suspense } from 'react'
import { SIZES } from '../products/filters'
import { FilterCard } from './FilterCard'

// aplicar si esque es ropa (se tiene el filtro de ropa) solo tallas de ropa, y si no, tallas de zapatillas
// bloquear tallas inexistentes (si no tengo ropa de talla S, no se podra elegir talla S)
// se puede elegir 2 o mas tallas a la vez

interface TallajeFilterProps{
  existingSizings : string[] | null
}

export const TallajeFilter = ({existingSizings} : TallajeFilterProps) => {

  if(!existingSizings) return <div>Loading...</div>

  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
    <h3 className='font-onest text-xl text-center w-max mx-auto leading-relaxed '>
      Tallaje
    </h3>
    <Suspense fallback={<div>Loading...</div>}>
      <FilterCard
      filterMethod={existingSizings}
      nameForInput={'sizing'}
      widthOfLi={'w-16'}
      searchParamName={'sizing'}
      />
    </Suspense>
    
    </form>
  )
}
