import React from 'react'

export const GenderFilter = () => {
  return (
    <form className='flex flex-col items-center w-full justify-center gap-4 '>
            <p className='font-onest text-lg text-center w-max mx-auto text-primary-bue'>
              Género
            </p>
            <div className='flex flex-col items-start justify-start gap-4 '>
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
