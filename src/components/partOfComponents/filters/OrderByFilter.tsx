'use client'

import { poppins } from '@/utils/fonts'
import { useEffect, useState, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface SortMethod {
  name: string;
  value: string;
}


const ORDER_BY : SortMethod[] = [
  {
      name: 'Más reciente',
      value: 'recent',
  },
  {
      name: 'Más vistos',
      value: 'relevance',
  },
  {
      name: 'Precio: menor a mayor',
      value: 'priceLowToHigh',
  },
  {
      name: 'Precio: mayor a menor',
      value: 'priceHighToLow',
  },
  {
      name: 'Nombre: A a la Z',
      value: 'nameLow',
  },
  {
      name: 'Nombre: Z a la A',
      value: 'nameHigh',
  },
]

export const OrderByFilter = () => {

  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  if(!ORDER_BY) return <div>Loading...</div>

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (event) {
        params.set('sort', event.target.value);
      } else {
        params.delete('sort');
      }
      replace(`${pathname}?${params.toString()}`);
    })
  }
  
  const usedSortMethod = searchParams.get('sort');
  
  useEffect(() => {
    if (usedSortMethod) {
      setSelectedOption(usedSortMethod);
    }
  }, [usedSortMethod]);

  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>    
    <h3 className='font-onest text-xl text-center w-max mx-auto leading-relaxed '>
      Ordenar por
    </h3>
    
    <ul className={`p-3 pl-4 ${isPending ? 'bg-slate-300/85' : 'bg-slate-100/85'} rounded-md w-full flex flex-col transition-colors `}>
        {ORDER_BY.map((category, index) => (
          <li key={index} className={`py-3 mb-2  w-40 mx-auto`}>
            <div className={`flex flex-row items-center gap-2 rounded-md p-1  ${usedSortMethod === category.value ? 'bg-primary-bue text-white' : ''}`}>
              <input type='radio' 
              checked={selectedOption === category.value}
              onChange={handleChange}
              id={`${category}_${index}`} 
              name={'sort'} 
              value={category.value} 
              className='' />
              <label htmlFor={`${category}_${index}`}>{category.name}</label>
            </div>
            </li>
        ))}
      </ul>
    </form>
    
  )
}
