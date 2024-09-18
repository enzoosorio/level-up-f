

import React from 'react'

export const PriceFilter = () => {
  return (
    <form className='flex flex-col items-center w-full justify-center'>
            <label className='font-onest text-lg text-center w-max mx-auto text-primary-bue'>
            Rango de precios
            <input type='range' className='block mt-3 mb-2 w-full' />
            </label>
            <div className='flex flex-row justify-around items-center w-full'>
                <span>S/9.90</span>
                <span>S/149.90</span>
            </div>
    </form>
  )
}
