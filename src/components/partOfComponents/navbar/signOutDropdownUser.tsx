'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

export const SignOutDropdownUser = () => {
  return (
    <div
            className="flex flex-row w-full items-center justify-between"
            onClick={() => {signOut()}}
            >
            <span>Cerrar sesión</span>
            <span>
            <svg width="18" height="18" viewBox="0 0 1024 1024" className="fill-white group-hover/itemLogout:fill-black "><path  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"/><path d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"/></svg>
            </span>
            </div>
  )
}
