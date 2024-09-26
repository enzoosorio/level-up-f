import { Suspense } from 'react'
import { PriceFilterOfInternet } from './PriceFilter'
import { GenderFilter } from './GenderFilter'
import { ProductTypeFilter } from './ProductTypeFilter'
import { TallajeFilter } from './TallajeFilter'
import { ConditionFilter } from './ConditionFilter'
import { TagsFilter } from './TagsFilter'
import { OrderByFilter } from './OrderByFilter'
import { MarcaFilter } from './MarcaFilter'


interface SpecificFilterProps{
    id : string
}

export const SpecificFilter = ({id} : SpecificFilterProps) => {
  return (
    <>
    {
    id === 'OrderBy' ? <OrderByFilter/> : 
    id === 'PriceRange' ? 
    <Suspense fallback={<div>Loading...</div>}>
      <PriceFilterOfInternet/>
    </Suspense>
    : 
    id === 'Gender' ? <GenderFilter/> : 
    id === 'ProductType' ? <ProductTypeFilter/> : 
    id === 'Tallaje' ? <TallajeFilter/> : 
    id === 'Condition' ? <ConditionFilter/> :
    id === 'Tags' ? <TagsFilter/> : 
    id === 'Brands' ? <MarcaFilter/> : <></> }
    </>
  )
}
