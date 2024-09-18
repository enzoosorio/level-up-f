import React from 'react'
import { PriceFilter } from './PriceFilter'
import { GenderFilter } from './GenderFilter'
import { ProductTypeFilter } from './ProductTypeFilter'
import { ColorFilter } from './ColorFilter'
import { ConditionFilter } from './ConditionFilter'
import { SaleTypeFilter } from './SaleTypeFilter'

interface SpecificFilterProps{
    id : string
}

export const SpecificFilter = ({id} : SpecificFilterProps) => {
  return (
    <>
    {id === 'PriceRange' ? <PriceFilter/> : 
    id === 'Gender' ? <GenderFilter/> : 
    id === 'ProductType' ? <ProductTypeFilter/> : 
    id === 'Color' ? <ColorFilter/> : 
    id === 'Condition' ? <ConditionFilter/> :
    id === 'SaleType' ? <SaleTypeFilter/> : <></> }
    </>
  )
}
