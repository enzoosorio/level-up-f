import { poppins } from '@/utils/fonts'
import React from 'react'

export default function SellerPage() {
  return (
    <main className="mt-4 lg:mt-8 w-10/12 md:w-11/12 xl:max-w-[1200px] mx-auto relative">
        <h1 className={`text-center text-primary-bue font-bold text-2xl text-pretty mt-12 md:mt-8 ${poppins.className} `}>
        ¡Hola futuro vendedor!
        </h1>
        <h3 className={`text-center text-primary-bue font-bold text-xl mt-10 ${poppins.className} `}>
          Estamos trabajando para implementar un sistema de compra y venta. Atentos a nuestras noticias para saber cuando estaremos disponibles.
        </h3>
        <svg  width="72" height="72" viewBox="0 0 24 24" className='mt-10  mx-auto bg-primary-bue p-2 rounded-md'><path fill="#FFFFFF" d="M5.33 3.272a3.5 3.5 0 0 1 4.472 4.473L20.647 18.59l-2.122 2.121L7.68 9.867a3.5 3.5 0 0 1-4.472-4.474L5.444 7.63a1.5 1.5 0 0 0 2.121-2.121zm10.367 1.883l3.182-1.768l1.414 1.415l-1.768 3.181l-1.768.354l-2.12 2.121l-1.415-1.414l2.121-2.121zm-7.071 7.778l2.121 2.122l-4.95 4.95A1.5 1.5 0 0 1 3.58 17.99l.097-.107z"/></svg>
        
    </main>
  )
}
