import React from 'react'
import { CardForMessageWithLink } from '../partOfComponents/hero/CardForMessageWithLink'
import PoloNewClothes from '@/assets/hero/forCards/PoloNewClothes.png'
import PoloSecondHandClothes from '@/assets/hero/forCards/PoloSecondHandClothes.png'

export const CardProductsHero = () => {
  return (
    <div
  className="flex flex-col md:flex-row w-11/12 mt-12 mx-auto items-center gap-10"
>
  <CardForMessageWithLink
    link={"/products?condition=new"}
    titleCard={"PRODUCTOS NUEVOS"}
    secondaryText={`Descubre ropa y accesorios nuevos, con calidad de tienda y precios más
      bajos. Ideal para quienes buscan estrenar sin gastar de más`}
    imgCard={PoloNewClothes}
    altImgCard="Nuevos productos"
    isAdding={false}
  />

  <CardForMessageWithLink
    link={"/products?condition=perfect"}
    titleCard={"PRODUCTOS DE SEGUNDA MANO"}
    secondaryText={`Encuentra prendas únicas y en excelente estado, ¡a precios increíbles!`}
    imgCard={PoloSecondHandClothes}
    altImgCard="Productos segunda mano"
    isAdding={false}
  />
</div>
  )
}
