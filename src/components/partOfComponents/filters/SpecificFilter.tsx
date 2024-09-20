import React from 'react'
import { PriceFilterOfInternet } from './PriceFilter'
import { GenderFilter } from './GenderFilter'
import { ProductTypeFilter } from './ProductTypeFilter'
import { TallajeFilter } from './TallajeFilter'
import { ConditionFilter } from './ConditionFilter'
import { TagsFilter } from './TagsFilter'
import { OrderByFilter } from './OrderByFilter'


interface SpecificFilterProps{
    id : string
}

export const SpecificFilter = ({id} : SpecificFilterProps) => {
  return (
    <>
    {
    id === 'OrderBy' ? <OrderByFilter/> : 
    id === 'PriceRange' ? <PriceFilterOfInternet/> : 
    id === 'Gender' ? <GenderFilter/> : 
    id === 'ProductType' ? <ProductTypeFilter/> : 
    id === 'Tallaje' ? <TallajeFilter/> : 
    id === 'Condition' ? <ConditionFilter/> :
    id === 'Tags' ? <TagsFilter/> : <></> }
    </>
  )
}
