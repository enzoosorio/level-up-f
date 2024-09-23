'use client'
import React from 'react'
import { poppins } from '@/utils/fonts'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

interface LoginRegisterCardProps {
    title : string, 
    subtitle : string
    titleButton? : string,
    messageGoogle?: string,
    changeMessage : string,
    changeURL : string,
    children : React.ReactNode,
    idForm? : string,
    isPending? : boolean
}

export const LoginRegisterCard = ({title, subtitle ,titleButton, messageGoogle, children, changeMessage, changeURL, idForm, isPending } : LoginRegisterCardProps) => {

  return (
    <div className={`relative cardRegister flex flex-col items-center gap-4 bg-primary-ice-color max-w-96 mx-auto p-3 rounded-lg ${poppins.className} pb-6  pt-4 `}>
    <div className='flex flex-col items-center gap-4'>
        <h3 className='text-3xl font-bold text-primary-bue mt-2'>{title}</h3>
        <small className='text-sm text-gray-500 font-bold mb-2'>{subtitle}</small>
    </div>
    {children}
    <div className='flex flex-col items-center gap-2 '>
      {titleButton && 
      <button
      disabled={isPending} 
      form={idForm}
      className={`px-4 py-2 mt-4 rounded-lg bg-primary-orange text-white hover:scale-110 transition-all w-full ${isPending ? 'bg-orange-700' : ''}`}>
          {titleButton}
      </button>}
      <p>o</p>
      {messageGoogle && 
      <button 
      onClick={() => {
        signIn('google', {
          redirectTo : DEFAULT_LOGIN_REDIRECT
        })
      }}
      disabled={isPending} 
      className={`px-4 py-2 rounded-lg text-black flex items-center justify-center gap-2 bg-white hover:scale-110 transition-all ${isPending ? 'bg-zinc-300' : ''}`}>
        <span>{messageGoogle}</span>
        <svg width="24" height="24" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/>
          <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/>
        </svg>
      </button>}
    </div>
    {changeMessage && <Link href={changeURL} className='text-sm mx-auto text-center w-max underline decoration-dotted mt-1 '>{changeMessage}</Link>}
</div>
  )
}
