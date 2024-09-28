'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { poppins } from '@/utils/fonts'
import Slider from 'react-slider'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getMinAndMaxProductsPrice } from '@/data/product-price';

export const PriceFilterOfInternet = () => {
  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [minMax, setMinMax] = useState<{ minPrice: number | null; maxPrice: number | null }>({ minPrice: null, maxPrice: null });
  const minSearchParam = searchParams.get('minPrice');
  const maxSearchParam = searchParams.get('maxPrice');

  const [values, setValues] = useState<number[]>([0, 0]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchMinMaxPrices = async () => {
      try {
        const data = await getMinAndMaxProductsPrice();
        setMinMax({
          minPrice: data?.minPrice ?? 0, 
          maxPrice: data?.maxPrice ?? 1, 
        });

        setValues([
          minSearchParam ? parseInt(minSearchParam) : (data?.minPrice ?? 0),
          maxSearchParam ? parseInt(maxSearchParam) : (data?.maxPrice ?? 1),
        ]);
      } catch (error) {
        console.error('Error fetching price range:', error);
      }
    };

    fetchMinMaxPrices();
  }, [minSearchParam, maxSearchParam]);

  
  useEffect(() => {
    if (minMax.minPrice !== null && minMax.maxPrice !== null) {
      const newMin = minSearchParam ? parseInt(minSearchParam) : minMax.minPrice;
      const newMax = maxSearchParam ? parseInt(maxSearchParam) : minMax.maxPrice;
      
      if (values[0] !== newMin || values[1] !== newMax) {
        setValues([newMin, newMax]);
      }
    }
  }, [minSearchParam, maxSearchParam, minMax]);

  
  useEffect(() => {
    if (minMax.minPrice !== null && minMax.maxPrice !== null) {
      startTransition(() => {
        const params = new URLSearchParams(searchParams);

        // Manejar precio mínimo
        if (values[0] !== minMax.minPrice) {
          params.set('minPrice', values[0].toString());
        } else {
          params.delete('minPrice');
        }

        // Manejar precio máximo
        if (values[1] !== minMax.maxPrice) {
          params.set('maxPrice', values[1].toString());
        } else {
          params.delete('maxPrice');
        }

        replace(`${pathname}?${params.toString()}`);
      });
    }
  }, [values, minMax, pathname, replace, searchParams]);


  if (minMax.minPrice === null || minMax.maxPrice === null) {
    return <div>Loading...</div>;
  }

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
          min={minMax.minPrice} 
          max={minMax.maxPrice}
        />
        <div className='flex flex-row items-center justify-between w-full px-1 mt-2 gap-4'>
          <span>S/{values[0]}</span>
          <span>S/{values[1]}</span>
        </div>
      </div>
    </div>
  );
};
