import { poppins } from '@/utils/fonts'
import { CONDITION } from '../products/filters'
import { FilterCard } from './FilterCard'
import { Suspense } from 'react'
import { Condition } from '@prisma/client'

interface ConditionFilterProps{
  existingConditions : Condition[] | null
}

export const ConditionFilter = ({ existingConditions } : ConditionFilterProps) => {

  if(!existingConditions) return <div>Loading...</div>

  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
    <h3 className='font-onest text-xl text-center w-max mx-auto leading-relaxed '>
      Condición
    </h3>
    <Suspense fallback={<div>Loading...</div>}>
      <FilterCard 
      filterMethod={existingConditions}
      nameForInput='condition'
      widthOfLi='w-36'
      searchParamName='condition' />
    </Suspense>
    </form>
  )
}
