'use client'

import React, { useState } from 'react'
import { poppins } from '@/utils/fonts'
import Slider from 'react-slider'

const MIN = 9;
const MAX = 499;

export const PriceFilterOfInternet = () => {

  const [values, setValues] = useState([MIN, MAX])

  return(
    <div className={`d-flex ${poppins.className} text-black`}>
    <div className="wrapper flex flex-col items-center justify-center">
      <header className='text-black '>
        <h2 className='text-xl'>Rango de precios</h2>
      </header>
      <Slider className='slider w-full h-1 bg-black mt-6 rounded-lg' 
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
  )
}
