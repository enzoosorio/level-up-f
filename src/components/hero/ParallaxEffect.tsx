import { poppins, roboto } from '@/utils/fonts'
import React from 'react'

export const ParallaxEffect = () => {
  return (
    <div
  className="relative home w-full rounded-sm mt-12 text-pretty text-center h-72 lg:h-96 xl:h-80"
>
  <div
    className="parallax home__parallax home__parallax-img1 w-full blur-sm"
  >
  </div>
  <div
    className="parallax home__parallax home__parallax-img2 w-full blur-sm"
  >
  </div>
  <div
    className="parallax home__parallax home__parallax-img3 blur-sm"
  >
  </div>
  <div
    className="parallax home__parallax home__parallax-img4 blur-sm"
  >
  </div>
  <h4
    className={`parallax home__title  ${poppins.className} absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg sm:text-xl md:text-2xl lg:text-3xl w-11/12 z-[999999] text-white bg-[rgba(0,0,0,0.25)] rounded-lg backdrop-blur-md p-1`}
  >
    {`Comprando en Level Up, no solo mejoras tu estilo, sino también el planeta.
    Al prolongar la vida útil de la ropa, disminuyes emisiones de carbono,
    ahorras agua, y evitas que toneladas de textiles terminen en vertederos...   `}
    <span className="font-bold "
      > {` Con cada compra subes de nivel en el cuidado del medio ambiente`}</span>
  </h4>
</div>
  )
}
