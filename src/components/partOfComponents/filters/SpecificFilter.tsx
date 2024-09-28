import { Suspense, useEffect, useState } from 'react'
import { PriceFilterOfInternet } from './PriceFilter'
import { GenderFilter } from './GenderFilter'
import { ProductTypeFilter } from './ProductTypeFilter'
import { TallajeFilter } from './TallajeFilter'
import { ConditionFilter } from './ConditionFilter'
import { TagsFilter } from './TagsFilter'
import { OrderByFilter } from './OrderByFilter'
import { MarcaFilter } from './MarcaFilter'
import {  getBrandsOfProducts, getConditionsOfProducts, getGendersOfProducts, getSizesOfProducts, getSubCategoriesOfProducts, getTagsOfProducts } from '@/data/filters/FOR-filters'
import { CategoryEnum, Condition, Gender } from '@prisma/client'


interface SpecificFilterProps{
    id : string
}

export const SpecificFilter = ({id} : SpecificFilterProps) => {

  const [existingCategories, setExistingCategories] = useState<Record<CategoryEnum, string[]> | null>(null)
  const [existingGenders, setExistingGenders] = useState<Gender[] | null>(null)
  const [existingSizes, setExistingSizes] = useState<string[] | null>(null)
  const [existingConditions, setExistingConditions] = useState<Condition[] | null>(null)
  const [existingBrands, setExistingBrands] = useState<string[] | null>(null)
  const [existingTags, setExistingTags] = useState<string[] | null>(null)

  useEffect(() => {
    const existingCategories = async() => {
      const subcategories = await getSubCategoriesOfProducts()
    
      if(!subcategories){
        return
      }
      setExistingCategories(subcategories)
    }

    const existingGenders = async() => {
      const genders = await getGendersOfProducts();
      if (!genders) {
        return;
      }
      setExistingGenders(genders);
    }

    const existingSizes = async() => {
      const sizes = await getSizesOfProducts();
      if (!sizes) {
        return;
      }
      setExistingSizes(sizes);
    }

    const existingConditions = async() => {
      const conditions = await getConditionsOfProducts();
      if (!conditions) {
        return;
      }
      setExistingConditions(conditions);
    }

    const existingBrands = async() => {
      const brands = await getBrandsOfProducts();
      if (!brands) {
        return;
      }
      setExistingBrands(brands);
    }

    const existingTags = async() => {
      const tags = await getTagsOfProducts();
      if (!tags) {
        return;
      }
      setExistingTags(tags);
    }

    existingCategories()
    existingGenders()
    existingSizes()
    existingConditions()
    existingBrands()
    existingTags()

  }, [])



  return (
    <>
    {
    id === 'OrderBy' ? <OrderByFilter /> : 
    id === 'PriceRange' ? 
    <Suspense fallback={<div>Loading...</div>}>
      <PriceFilterOfInternet/>
    </Suspense>
    : 
    id === 'Gender' ? <GenderFilter existingGenders={existingGenders} /> : 
    id === 'ProductType' ? <ProductTypeFilter existingCategories={existingCategories}/> :
    id === 'Tallaje' ? <TallajeFilter existingSizings={existingSizes} /> : 
    id === 'Condition' ? <ConditionFilter existingConditions={existingConditions}/> :
    id === 'Tags' ? <TagsFilter existingTags={existingTags}/> :
    id === 'Brands' ? <MarcaFilter existingBrands={existingBrands}/> : <></> }
    </>
  )
}
