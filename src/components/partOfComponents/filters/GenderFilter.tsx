import React from 'react'
import { poppins } from '@/utils/fonts'

export const GenderFilter = () => {

  return (
    <form className={` flex flex-col items-center w-full justify-center gap-4 ${poppins.className} text-black  `}>
            <h3 className='font-onest text-xl text-center w-max mx-auto '>
              Género
            </h3>
            <div className='bg-slate-100/85 rounded-lg p-4 flex flex-col items-start justify-start gap-4 w-full'>
              <div className='flex flex-row items-center gap-2 '>
              <input type='radio' id='maleGender' name='gender' value={'male'} className='' />
              <label htmlFor='maleGender'>Hombre</label>
              </div>
              <div className='flex flex-row items-center gap-2'>
              <input type='radio' id='femaleGender' name='gender' value={'female'} />
              <label htmlFor='femaleGender'>Mujer</label>
              </div>
            </div>
    </form>
  )
}
