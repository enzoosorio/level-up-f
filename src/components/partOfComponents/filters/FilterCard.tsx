'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useTransition } from 'react'

interface FilterCardProps{
    filterMethod : Record<string, string>[] | string[],
    nameForInput : string,
    widthOfLi : string,
    searchParamName : string
}

export const FilterCard = ({filterMethod, nameForInput, widthOfLi, searchParamName} : FilterCardProps) => {

    const [selectedOption, setSelectedOption] = React.useState<string>('');
    const [isPending, startTransition] = useTransition();
  
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
      startTransition(() => {
        const params = new URLSearchParams(searchParams);
        if (event) {
          params.set(searchParamName, event.target.value);
        } else {
          params.delete(searchParamName);
        }
        replace(`${pathname}?${params.toString()}`);
      })
    }
  
    const usedSortMethod = searchParams.get(searchParamName);
  
    useEffect(() => {
      if (usedSortMethod) {
        setSelectedOption(usedSortMethod);
      }
    }, [usedSortMethod]);
  

  return (
      <ul className={`p-3 pl-4 ${isPending ? 'bg-slate-300/85' : 'bg-slate-100/85'} rounded-md w-full flex flex-col transition-colors `}>
        {filterMethod.map((category, index) => (
          <li key={index} className={`py-3 mb-2 ${widthOfLi} w-40 mx-auto`}>
            <div className={`flex flex-row items-center gap-2 rounded-md p-1  ${usedSortMethod === category ? 'bg-primary-bue text-white' : ''}`}>
              <input type='radio' 
              checked={selectedOption === category}
              onChange={handleChange}
              id={`${category}_${index}`} 
              name={nameForInput} 
              value={category.toString()} 
              className='' />
              <label htmlFor={`${category}_${index}`}>{category.toString()}</label>
            </div>
            </li>
        ))}
      </ul>
  )
}
