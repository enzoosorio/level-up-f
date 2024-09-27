import { Suspense, useEffect, useState } from 'react'
import { PriceFilterOfInternet } from './PriceFilter'
import { GenderFilter } from './GenderFilter'
import { ProductTypeFilter } from './ProductTypeFilter'
import { TallajeFilter } from './TallajeFilter'
import { ConditionFilter } from './ConditionFilter'
import { TagsFilter } from './TagsFilter'
import { OrderByFilter } from './OrderByFilter'
import { MarcaFilter } from './MarcaFilter'
import {  getSubCategoriesOfProducts } from '@/data/filters/FOR-filters'
import { CategoryEnum } from '@prisma/client'


interface SpecificFilterProps{
    id : string
}

export const SpecificFilter = ({id} : SpecificFilterProps) => {

  const [existingCategories, setExistingCategories] = useState<Record<CategoryEnum, string[]> | null>(null)

  useEffect(() => {
    const existingCategories = async() => {
      const subcategories = await getSubCategoriesOfProducts()
    
      if(!subcategories){
        return
      }
      setExistingCategories(subcategories)
    }

    existingCategories()

  }, [])



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
    id === 'ProductType' ? <ProductTypeFilter existingCategories={existingCategories}/> :
    id === 'Tallaje' ? <TallajeFilter/> : 
    id === 'Condition' ? <ConditionFilter/> :
    id === 'Tags' ? <TagsFilter/> : 
    id === 'Brands' ? <MarcaFilter/> : <></> }
    </>
  )
}
