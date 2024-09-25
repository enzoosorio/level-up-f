import React from 'react'
import { type CardWithLink } from "@/types/CardWithLink";
import Image from 'next/image';
import { inter, poppins, roboto } from '@/utils/fonts';

export const CardForMessageWithLink = ({
  // link, 
  titleCard, secondaryText, imgCard, altImgCard, isAdding} : CardWithLink) => {
  return (
    <div
  className="group/newProducts w-full cursor-pointer relative p-3 border border-gray-400 shadow-xl shadow-gray-700/65 rounded-sm min-h-64 flex flex-col items-start justify-center gap-4 overflow-hidden transition-all"
>
  <Image
    src={imgCard}
    alt={altImgCard}
    className={`absolute inset-0 w-full -z-20 h-full scale-105 mx-auto group-hover/newProducts:scale-125 group-hover/newProducts:bg-blue-100/25 ${isAdding ? "object-cover" : "object-contain"} transition-all`}
  />
  <h4 className="text-3xl font-titan font-bold text-primary-bue nikeFontForTitleCard uppercase ">{titleCard}</h4>
  <p className={` text-left text-xl text-balance ${poppins.className} font-bold w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-sm`}>
    {secondaryText}
  </p>
</div>
  )
}
