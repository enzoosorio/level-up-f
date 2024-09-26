import { poppins } from '@/utils/fonts'
import Image from 'next/image'
import React from 'react'
import KIT_ADIDAS from '@/assets/sorteoimgs/KIT_ADIDAS_CREP_PROTECT.webp'
import PoloHM from '@/assets/sorteoimgs/Polo_h&m_rayas_loose_fit.webp'
import ShoeBox from '@/assets/sorteoimgs/shoe_box_crep_protect.webp'

function SorteoPage() {
  return (
    <main className="mt-4 lg:mt-8 w-10/12 md:w-11/12 xl:max-w-[1200px] mx-auto relative">
        <h1 className={`text-center text-primary-bue font-bold text-5xl text-pretty mt-12 md:mt-8 ${poppins.className} `}>
        ¡SORTEO!
        </h1>
        <h3 className={`text-center text-primary-bue font-bold text-xl mt-10 ${poppins.className} `}>
          ¡Participa en el sorteo de una SHOE BOX, un pack CREP PROTECT x ADIDAS y de un polo H&M!
        </h3>
        <p className={`text-center text-primary-bue font-bold text-lg mt-4 ${poppins.className} `}>
          Sigue los pasos del sorteo en nuestro instagram <a href='https://www.instagram.com/levelupstore19/' target='_blank' rel='noopener noreferrer' className='text-primary-bue font-bold border-b-2 border-primary-orange border-dotted '>@levelupstore19</a>
        </p>
        <div className='flex flex-col md:flex-row items-center justify-center mt-10 gap-8'>
            <Image
                src={ShoeBox}
                alt='Shoe Box'
                width={200}
                height={400}
                className='rounded-sm '
            />
            <Image
                src={KIT_ADIDAS}
                alt='Kit Adidas'
                width={200}
                height={400}
                className='rounded-sm'
            />
            <Image
                src={PoloHM}
                alt='Polo H&M'
                width={200}
                height={400}
                className='rounded-sm'
            />

        </div>
    </main>
  )
}

export default SorteoPage