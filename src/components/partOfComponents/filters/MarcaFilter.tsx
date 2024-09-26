
import { poppins } from '@/utils/fonts'
import { MARCAS } from '../products/filters'
import { FilterCard } from './FilterCard'
import { Suspense } from 'react'

export const MarcaFilter = () => {
  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
    <h3 className='font-onest text-xl text-center w-max mx-auto leading-relaxed '>
      Marca
    </h3>
    <Suspense fallback={<div>Loading...</div>}>
      <FilterCard 
      filterMethod={MARCAS} 
      nameForInput={'brand'} 
      widthOfLi={'w-40'} 
      searchParamName={'brand'} 
      />
      </Suspense>
    </form>
  )
}
