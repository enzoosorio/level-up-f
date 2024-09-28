import React from 'react'
import { CardForRecentProducts } from '../partOfComponents/hero/CardForRecentProducts'
import { poppins } from '@/utils/fonts';
import { getLastProducts } from '@/data/products';

export const RecentProducts = async() => {
 
  
  const lastProducts = await getLastProducts(3)

  return (
    <section className="mt-12 w-11/12 mx-auto  ">
      <h3 className={`text-3xl text-primary-bue ${poppins.className} `}>PRODUCTOS RECIENTES</h3>
      <div className="grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center justify-items-center">
          {lastProducts.map((product, index) => (
            <CardForRecentProducts 
            key={index}
            id={product.id}
            name={product.name}
            brand={product.brand}
            itsOnSale={product.itsOnSale}
            price={product.price}
            discountedPrice={product.discountedPrice }
            mainImage={product.mainImage}
            imageAlt={product.imageAlt}
            />
         
        ))}
      </div>
  </section>
  )
}
