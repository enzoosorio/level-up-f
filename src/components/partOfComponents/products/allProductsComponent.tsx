import { productos } from '@/utils/products'
import Image from 'next/image'
import React from 'react'

export const AllProductsComponent = () => {
  return (
    
        <>
        {productos.map((tshirt, index) => (
        <a
          key={tshirt.id}
          href={`/products/${tshirt.id}`}
          className={`relative mt-14 md:mt-16 hover:scale-[1.03] border border-gray-600/45 shadow-lg shadow-gray-500/65 rounded-md p-2 transition-transform ${
            index % 3 === 0
              ? "col-span-2 row-span-1 md:w-[600px] md:mx-auto"
              : "col-span-1 row-span-1 md:w-64 md:mx-auto"
          }`}
        >
          <picture className="flex flex-col items-center justify-center">
            <Image
              src={tshirt.imageUrl}
              alt={tshirt.imageAlt}
              width={563}
              height={845}
              className={`w-full ${index % 3 === 0 ? "w-[90%] mx-auto" : ""}`}
              style={{
                background: `radial-gradient(circle, transparent 0%, #CEE9ED 10%, #CEE9ED 20%, transparent 80%)`,
              }}
            />
            <h2 className="pl-2 w-full text-pretty text-sm md:text-base">
              {tshirt.name}
            </h2>
            <p className="pl-2 w-full text-sm md:text-base">S/{tshirt.price}</p>
          </picture>
          {tshirt.itsOnSale && (
            <p
              className={`text-white bg-primary-green rounded-sm ${
                index % 3 === 0 ? "py-3 px-7 text-xl" : "px-3 py-2"
              } absolute top-0 right-0`}
            >
              OFERTA
            </p>
          )}
        </a>
      ))}
        </>
  )
}
