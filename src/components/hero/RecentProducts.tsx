import React from 'react'
import { CardForRecentProducts } from '../partOfComponents/hero/CardForRecentProducts'
import { productos } from '@/utils/products';
import { poppins } from '@/utils/fonts';

export const RecentProducts = () => {
  
  // TODO este recorte lo tengo que hacer del back. Es mejor 
  // que traiga 3 del back a traer todos y despues hacer el corte.
  const onlyThreeProducts = productos.slice(0, 3)

  return (
    <section className="mt-12 w-11/12 mx-auto  ">
      <h3 className={`text-3xl text-primary-bue ${poppins.className} `}>PRODUCTOS RECIENTES</h3>
      <div className="grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center justify-items-center">
        {onlyThreeProducts.map((product, index) => (
            <CardForRecentProducts 
            key={index}
            product={product} />
         
        ))}
      </div>
  </section>
  )
}
