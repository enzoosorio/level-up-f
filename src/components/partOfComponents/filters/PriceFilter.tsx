'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { poppins } from '@/utils/fonts'
import Slider from 'react-slider'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const MIN = 9;
const MAX = 499;

export const PriceFilterOfInternet = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const minSearchParam = searchParams.get('minPrice');
  const maxSearchParam = searchParams.get('maxPrice');

  const [values, setValues] = useState([
    minSearchParam ? parseInt(minSearchParam) : MIN,
    maxSearchParam ? parseInt(maxSearchParam) : MAX
  ]);

  const [isPending, startTransition] = useTransition();

  // Sync the state with the URL parameters when they change
  useEffect(() => {
    const newMin = minSearchParam ? parseInt(minSearchParam) : MIN;
    const newMax = maxSearchParam ? parseInt(maxSearchParam) : MAX;
    
    if (values[0] !== newMin || values[1] !== newMax) {
      setValues([newMin, newMax]);
    }
  }, [minSearchParam, maxSearchParam]);

  // Update both min and max values together in one useEffect
  useEffect(() => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);

      // Handle min price
      if (values[0] !== MIN) {
        params.set('minPrice', values[0].toString());
      } else {
        params.delete('minPrice');
      }

      // Handle max price
      if (values[1] !== MAX) {
        params.set('maxPrice', values[1].toString());
      } else {
        params.delete('maxPrice');
      }

      replace(`${pathname}?${params.toString()}`);
    });
  }, [values, pathname, replace, searchParams]);

  return (
    <div className={`d-flex ${poppins.className} text-black mx-auto mt-6`}>
      <div className={`wrapper flex flex-col items-center justify-center ${isPending ? 'bg-slate-300/85' : 'bg-slate-100/85'} transition-colors p-2 rounded-md`}>
        <header className='text-black'>
          <h2 className='text-xl'>Rango de precios</h2>
        </header>
        <Slider
          className='slider w-full h-1 bg-black mt-6 rounded-lg'
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
        />
        <div className='flex flex-row items-center justify-between w-full px-1 mt-2 gap-4'>
          <span>S/{values[0]}</span>
          <span>S/{values[1]}</span>
        </div>
      </div>
    </div>
  );
};
