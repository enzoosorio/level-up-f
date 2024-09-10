import React from 'react'
import { CardForMessageWithLink } from '../partOfComponents/hero/CardForMessageWithLink'
import SecondHandClothes from '@/assets/hero/forCards/SecondHandClothes.png'
import SaveAndRecycle from '@/assets/hero/forCards/SaveAndRecycle.png'

export const Adding = () => {
  return (
    <section className="mt-12 w-11/12 mx-auto">
  <h3 className="font-titan text-3xl text-primary-bue mb-6">ACTIVACIÓN</h3>
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    <CardForMessageWithLink
      titleCard={` Es momento que dejes de lado las prendas que no fueron tu estilo del
        todo.`}
      secondaryText={`Iniciativa de venta de productos`}
      imgCard={SecondHandClothes}
      altImgCard="Venta de productos"
      isAdding
    />
    <CardForMessageWithLink
      titleCard={`¡REALIZA ACTIVIDADES Y GANA UN 15% DE DESCUENTO!`}
      secondaryText={`Ayudanos a tener más alcance. Invita a 2 amigos a registrarse en nuestra
        página web y gana un cupón del 15% de descuento.`}
      imgCard={SaveAndRecycle}
      altImgCard="¡Gana un cupón de descuento!"
      isAdding
    />
  </div>
</section>
  )
}
