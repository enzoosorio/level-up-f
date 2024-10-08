import React from 'react'
import { CardForMessageWithLink } from '../partOfComponents/hero/CardForMessageWithLink'
import SecondHandClothes from '@/assets/hero/forCards/SecondHandClothes.png'
import SaveAndRecycle from '@/assets/hero/forCards/SaveAndRecycle.png'
import { poppins } from '@/utils/fonts'

export const Adding = () => {
  return (
    <section className="mt-12 w-11/12 mx-auto">
  <h3 className={`text-3xl text-primary-bue mb-6 ${poppins.className} `}>ACTIVACIÓN</h3>
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    <CardForMessageWithLink
      link={"/sellerpage"}
      titleCard={` Es momento que dejes de lado las prendas que no fueron tu estilo del
        todo.`}
      secondaryText={`Iniciativa de venta de productos`}
      imgCard={SecondHandClothes}
      altImgCard="Venta de productos"
      isAdding
    />
    <CardForMessageWithLink
      link={"/sorteo"}
      titleCard={`¡Participa en el sorteo de una SHOE BOX, un pack CREP PROTECT x ADIDAS y de un polo H&M!`}
      secondaryText={`Mira los pasos a seguir en nuestro instagram @levelupstore19`}
      imgCard={SaveAndRecycle}
      altImgCard="¡Gana un cupón de descuento!"
      isAdding
    />
  </div>
</section>
  )
}
