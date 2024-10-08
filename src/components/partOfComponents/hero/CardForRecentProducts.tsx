import React from 'react'
import { type ProductReview } from "@/types/ProductReview";
import Link from 'next/link';
import Image from 'next/image';
import { inter, roboto } from '@/utils/fonts';


interface CardForRecentProductsProps { 
  key : number,
  id : string,
  name : string,
  brand : string,
  itsOnSale : boolean,
  price : number,
  discountedPrice : number | null,
  mainImage : string,
  imageAlt : string,
}

export const CardForRecentProducts = ({
  id, 
  name, 
  brand, 
  itsOnSale, 
  price, 
  discountedPrice, 
  mainImage, 
  imageAlt, 
  key} : CardForRecentProductsProps) => {
     

  return (
    <Link
    key={key}
  href={`/products/${id}`}
  className="group/CardRecentProduct relative shadow-xl cursor-pointer border border-gray-300/45 rounded-sm flex flex-col gap-8 items-center justify-center p-4"
    >
  <Image
    src={mainImage}
    alt={imageAlt}
    width={276}
    height={239}
    className="w-[276px] h-[239px] object-contain group-hover/CardRecentProduct:scale-110 transition-transform"
  />
  <div className={`flex flex-col items-center justify-center gap-4 ${inter.className}`}>
    <p className="text-xl font-bold ">{name}</p>
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
