import React, { ReactNode } from 'react'
import { CardForRecentProducts } from '../partOfComponents/hero/CardForRecentProducts'
import { productos } from '@/utils/products';

import { type ProductReview } from "@/types/ProductReview";



export const RecentProducts = () => {
  
  const onlyThreeProducts = productos.slice(0, 3)

  return (
    <section className="mt-12 w-11/12 mx-auto  ">
      <h3 className="font-titan text-3xl text-primary-bue">PRODUCTOS RECIENTES</h3>
      <div className="grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center justify-items-center">
        {onlyThreeProducts.map((product) => (
          <CardForRecentProducts 
          id = {product.id}
          name = {product.name}
          brand = {product.brand}
          state = {product.state}
          itsOnSale = {product.itsOnSale}
          price = {product.price}
          discountedPrice = {product.discountedPrice}
          imageUrl = {product.imageUrl}
          imageAlt = {product.imageAlt} />
        ))}
      </div>
  </section>
  )
}
