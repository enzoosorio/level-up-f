
import { poppins } from '@/utils/fonts'
import { ORDER_METHOD } from '../products/filters'
import { FilterCard } from './FilterCard'
import { Suspense } from 'react'

export const OrderByFilter = () => {

  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>    
    <h3 className='font-onest text-xl text-center w-max mx-auto leading-relaxed '>
      Ordenar por
    </h3>
    <Suspense fallback={<div>Loading...</div>}>
      <FilterCard 
      filterMethod={ORDER_METHOD} 
      nameForInput={'sort'} 
      widthOfLi={'w-40'} 
      searchParamName={'sort'} />
    </Suspense>
    </form>
    
  )
}
