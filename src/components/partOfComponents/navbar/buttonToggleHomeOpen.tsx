'use client'

import { useShowFilters } from '@/utils/useShowFilters';
import { Session } from 'next-auth';
import Link from 'next/link';
import React, { useState } from 'react'

interface ButtonToggleHomeOpenProps{
  session? : Session | null
}

export const ButtonToggleHomeOpen = ({session} : ButtonToggleHomeOpenProps) => {

    const allFilters = useShowFilters((state) => state.allFilters)
    const [homeOpen, setHomeOpen] = useState(false);
    
    const toggleHomeOpen = () => {
        setHomeOpen(!homeOpen);
      };

  return (
    <>
    <button
          onClick={toggleHomeOpen}
          className={`bg-primary-orange buttonHome w-max p-3 md:hidden mb-2 ${
            allFilters ? "z-0" : "z-[9999999999]"
          } rounded-full  ${
            homeOpen ? "bg-primary-bue" : "bg-primary-orange"
          } `}
        >
          {/* SVG HOME */}
          <svg width="24" height="24" viewBox="0 0 20 20">
            <path
              fill="#FFFFFF"
              d="M18.178 11.373a.7.7 0 0 1 .7.7v5.874c.027.812-.071 1.345-.434 1.68c-.338.311-.828.4-1.463.366H3.144C2.5 19.961 2 19.7 1.768 19.173c-.154-.347-.226-.757-.226-1.228v-5.873a.7.7 0 0 1 1.4 0v5.873q.002.349.07.562l.036.098l-.003-.01c.001-.013.03-.008.132-.002h13.84c.245.014.401 0 .456-.001l.004-.001c-.013-.053.012-.27 0-.622v-5.897a.7.7 0 0 1 .701-.7M10.434 0c.264 0 .5.104.722.297l8.625 8.139a.7.7 0 1 1-.962 1.017l-8.417-7.944l-9.244 7.965a.7.7 0 0 1-.915-1.06L9.689.277l.086-.064c.214-.134.428-.212.66-.212"
            />
          </svg>
        </button>
        <ul
        className={`fixed inset-0 w-full h-full bg-primary-orange overflow-hidden ${
          homeOpen ? "homeOpen" : "homeClose"
        } flex flex-col items-center justify-center gap-16 z-[99999999] transition-all duration-300 font-zenMaru text-2xl`}
      >
        <li className="hover:scale-105">
          <Link href={"/"} onClick={toggleHomeOpen}>
            Inicio
          </Link>
        </li>
{/*         cambiar y agregar boton personalizado si el usuario esta logueado  */}
       {!session &&
       <li>
          <Link href={"/login"} onClick={toggleHomeOpen}>
            Iniciar sesión
          </Link>
        </li>
       }
        <li>
          <Link href={"/products"} onClick={toggleHomeOpen}>
            Productos con descuento
          </Link>
        </li>
        <li>
          <Link href={"/products"} onClick={toggleHomeOpen}>
            Nuevos
          </Link>
        </li>
        <li>
          <Link href={"/publishProducts"} onClick={toggleHomeOpen}>
            Publicar producto
          </Link>
        </li>
      </ul>
    </>
  )
}
