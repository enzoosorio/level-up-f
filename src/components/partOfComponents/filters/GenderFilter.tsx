import { inter, poppins } from '@/utils/fonts'
import { GENDER } from '../products/filters'
import { FilterCard } from './FilterCard'
import { Suspense } from 'react'
import { Gender } from '@prisma/client'

interface GenderFilterProps{
  existingGenders : Gender[] | null
}

export const GenderFilter = ({existingGenders} : GenderFilterProps) => {

  if(!existingGenders) return <div>Loading...</div>

  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
    <h3 className='font-onest text-xl text-center w-max mx-auto leading-relaxed '>
      Género
    </h3>
    <Suspense fallback={<div>Loading...</div>}>
      <FilterCard  
      filterMethod={existingGenders} 
      nameForInput={'gender'} 
      widthOfLi={'w-40'} 
      searchParamName={'gender'} />
    </Suspense>
    </form>
  )
}
