import React from 'react'
import { type ProductReview } from "@/types/ProductReview";
import Link from 'next/link';

export const CardForRecentProducts = ({id,
    name,
    brand,
    state,
    itsOnSale,
    price,
    discountedPrice,
    imageUrl,
    imageAlt,} 
    : ProductReview) => {



  return (
    <Link
  href={`/products/${id}`}
  className="group/CardRecentProduct relative shadow-xl cursor-pointer border border-gray-300/45 rounded-sm flex flex-col gap-8 items-center justify-center p-4"
    >
  <img
    src={imageUrl}
    alt={imageAlt}
    className="w-[276px] h-[239px] object-contain group-hover/CardRecentProduct:scale-110 transition-transform"
  />
  <div className="flex flex-col items-center justify-center gap-4 font-buenard">
    <p className="text-xl">{name}</p>
    {brand && <p className="text-lg">{brand}</p>}
    <p className="text-xl flex flex-row items-center">
      {/* <span className="font-bold">{state}{`/10 - `}</span> */}
      <span
        className={`${itsOnSale ? "line-through stroke-red-600 line-through-red " : ""}`}
        >{`S/${price} `}</span>
      {
        itsOnSale && (
          <span className="text-primary-green ml-4 text-2xl">{`S/${discountedPrice}`}</span>
        )
      }
    </p>
  </div>
  {
    itsOnSale && (
      <p className="text-white bg-primary-green rounded-sm p-2 absolute top-0 right-0">
        OFERTA
      </p>
    )
  }
</Link>
  )
}
