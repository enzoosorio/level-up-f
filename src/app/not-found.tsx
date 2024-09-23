import { LoginRegisterCard } from '@/components/login/CardLogin'
import React from 'react'

export default function NotFound() {
  return (
    <main className="mt-8 xl:max-w-[1200px] mx-auto relative">
    <LoginRegisterCard
    title='404'
    subtitle='PAGINA NO ENCONTRADA'
    changeMessage='Volver al inicio'
    changeURL='/'>
        <p className='text-center font-bold '>Has intentado ingresar a una pagina inexistente! Comunicate con nosotros</p>
    </LoginRegisterCard>
    </main>
  )
}
