'use client'

import React, { RefObject, useEffect, useRef } from 'react'
import { productos } from '@/utils/products'
import { useParams } from 'next/navigation'
import { roboto } from '@/utils/fonts'
import Link from 'next/link'
import { Session } from 'next-auth'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

interface IndividualProductProps{
  session? : Session | null
}

export const IndividualProductComponent = ({session} : IndividualProductProps) => {
    const params = useParams<{id : string}>()
    const {id} = params
    
    const thumbnailRef  : RefObject<HTMLUListElement> = useRef(null)
    const imageMainPhotoRef  : RefObject<HTMLImageElement> = useRef(null)
    const zoomedImageRef : RefObject<HTMLImageElement> = useRef(null)
    const wrapperMainPhotoRef : RefObject<HTMLPictureElement> = useRef(null)
    const wrapperZoomPhotoRef : RefObject<HTMLDivElement> = useRef(null)
    
    // esto se debe mejorar... Se debe hacer con una peticion await
    const individualProduct =  productos.find(producto => id === producto.id)
    let discountedPrice = 0;
  
    if(individualProduct?.discountedPrice) 
      discountedPrice = parseFloat(individualProduct?.discountedPrice);
  
    if(!individualProduct?.image1 || !individualProduct?.image2 || !individualProduct.image3 || !individualProduct.imageUrl){
      return <p>No existen las imagenes del producto.</p>
    }
  
    useEffect(() => {
  
      const handleThumbnailClick = (thumbnail: HTMLImageElement) => {
        if (thumbnail.src && imageMainPhotoRef.current && zoomedImageRef.current) {
          imageMainPhotoRef.current.src = thumbnail.src;
          imageMainPhotoRef.current.alt = thumbnail.alt;
          zoomedImageRef.current.src = thumbnail.src;
        }
      };
  
      const thumbnails = thumbnailRef.current?.querySelectorAll<HTMLImageElement>('.productImage');
      thumbnails?.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => handleThumbnailClick(thumbnail));
      });
  
      const handleMouseMove = (e: MouseEvent) => {
        if (wrapperMainPhotoRef.current && zoomedImageRef.current && window.innerWidth > 860) {
          const rect = wrapperMainPhotoRef.current.getBoundingClientRect();
          const clientX = ((e.clientX - rect.left) / rect.width) * 100;
          const clientY = ((e.clientY - rect.top) / rect.height) * 100;
          zoomedImageRef.current.style.transform = `translate(-${clientX}%, -${clientY}%) scale(1.7)`;
        }
      };
    
      const handleMouseEnter = () => {
        if (wrapperZoomPhotoRef.current && window.innerWidth > 860) {
          wrapperZoomPhotoRef.current.classList.remove("hidden");
          wrapperZoomPhotoRef.current.classList.add("zoom");
        }
      };
    
      const handleMouseLeave = () => {
        if (wrapperZoomPhotoRef.current && zoomedImageRef.current && window.innerWidth > 860) {
          wrapperZoomPhotoRef.current.classList.add("hidden");
          wrapperZoomPhotoRef.current.classList.remove("zoom");
          zoomedImageRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        }
      };
    
      wrapperMainPhotoRef.current?.addEventListener("mousemove", handleMouseMove);
      wrapperMainPhotoRef.current?.addEventListener("mouseenter", handleMouseEnter);
      wrapperMainPhotoRef.current?.addEventListener("mouseleave", handleMouseLeave);
  
       return () => {
      wrapperMainPhotoRef.current?.removeEventListener("mousemove", handleMouseMove);
      wrapperMainPhotoRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      wrapperMainPhotoRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  
  
    }, [])
  
    const message = `Hola! quisiera adquirir el polo ${
      individualProduct.name+ " | " + "de la marca" + '' + individualProduct.brand
    } en la talla ${individualProduct.size}`;
  
    return (
      <section
      className="relative flex flex-col lg:flex-row gap-4 items-center justify-around border border-gray-600/45 w-11/12 xl:w-full mx-auto shadow-lg shadow-gray-500/65 rounded-md px-2 py-8 mb-10"
    >
  
      <div className="relative flex flex-col-reverse md:flex-row  items-start ">
        <ul 
        ref={thumbnailRef}
        className="flex flex-row md:flex-col gap-4 items-center md:mr-10  mx-auto md:mx-0 md:pt-12  lg:pt-0">
          <li className="w-max cursor-pointer rounded-sm">
            <img
              src={individualProduct?.image1}
              alt={individualProduct?.imageAlt}
              width={50}
              className={"productImage"}
            />
          </li>
          <li className="product2 w-max cursor-pointer rounded-sm">
            <img
              src={individualProduct?.image2}
              alt={individualProduct?.imageAlt}
              width={50}
              className={"productImage"}
            />
          </li>
          <li className="product3 w-max cursor-pointer rounded-sm">
            <img
              src={individualProduct?.image3}
              alt={individualProduct?.imageAlt}
              width={50}
              className={"productImage"}
            />
          </li>
        </ul>
  
        <picture
        ref={wrapperMainPhotoRef}
          className="pictureMainPhoto w-max flex flex-col items-center justify-center mb-4 pt-12 lg:pt-0"
        >
          <img
          ref={imageMainPhotoRef}
            src={individualProduct?.image1}
            alt={"Polera polo"}
            width={400}
            className={"md:hover:cursor-zoom-in group/mainPicture "}
          />
          
        </picture>
        <span className='absolute hidden lg:block -bottom-4 left-[11rem] w-max text-xs font-bold text-gray-600/80 mt-4 font-onest'>Mueve el mouse sobre la imagen para zoom.</span>
      </div>
      <div
        className={`flex flex-col items-center gap-8 w-full sm:w-11/12 lg:w-96 font-buenard border p-4 rounded-sm ${roboto.className}`}
      >
        <h2 className="pl-2 w-full text-pretty text-2xl font-bold">
          {individualProduct?.name}
        </h2>
        <p className="pl-2 w-full text-2xl text-pretty">{`Marca : ${individualProduct?.brand}`}</p>
        <p className="pl-2 w-full text-lg italic text-pretty break-words hyphens-auto text-left ">
          {`“${individualProduct?.description}“ `}
        </p>
        {individualProduct?.referenceURL && 
        <a href={individualProduct.referenceURL} target='_blank' rel='noopener noreferrer' className="pl-2 w-full text-lg underline font-titan text-primary-bue hover:drop-shadow-xl   transition-all">
        Referencia del producto
      </a>}
        <p className="pl-2 w-full text-xl text-pretty">
          Publicado por: <span className="text-primary-bue font-bold font-buenard"
            
            // TODO : se debe extraer el nombre del seller debido a su producto ID.
            >{"Juan Perez"}</span> 
        </p>
        <p className="pl-2 w-full text-xl flex flex-row items-center"> 
          <span className={`${discountedPrice ? 'line-through stroke-red-600 line-through-red' : 'text-2xl font-bold'} mr-4`}>S/{individualProduct?.price} </span> 
        {discountedPrice !== 0 && <span className='text-primary-green font-bold text-2xl'>{`S/${individualProduct?.discountedPrice}`}</span>}
         </p>
         {!session ? 
         <div className='flex flex-row items-center gap-4'>
            <button className='bg-slate-500 text-white rounded-lg cursor-default px-7 py-2 flex flex-row items-center gap-2'>
                <span>Inicia sesión</span>
                {/* Wasap */}
                <svg width="16" height="16" viewBox="0 0 31 31" >
                    <path d="M0 30.9999L2.17904 23.0394C0.834415 20.7092 0.127875 18.0678 0.129166 15.3592C0.133041 6.89103 7.02407 0 15.4909 0C19.5997 0.00129166 23.4566 1.60166 26.3577 4.50532C29.2575 7.40898 30.854 11.2685 30.8527 15.3734C30.8488 23.8428 23.9578 30.7338 15.4909 30.7338C12.9205 30.7326 10.3876 30.088 8.14394 28.8635L0 30.9999ZM8.52111 26.0826C10.6859 27.3678 12.7526 28.1376 15.4858 28.1389C22.5227 28.1389 28.2551 22.4117 28.259 15.3708C28.2616 8.31573 22.5563 2.59624 15.4961 2.59366C8.45394 2.59366 2.72541 8.3209 2.72283 15.3605C2.72154 18.2344 3.5637 20.3863 4.97807 22.6377L3.6877 27.3497L8.52111 26.0826ZM23.2293 19.0249C23.1337 18.8647 22.878 18.7692 22.493 18.5767C22.1094 18.3843 20.2223 17.4555 19.8697 17.3277C19.5183 17.1998 19.2626 17.1352 19.0055 17.5201C18.7498 17.9038 18.0135 18.7692 17.7901 19.0249C17.5666 19.2807 17.3419 19.313 16.9583 19.1205C16.5746 18.928 15.3372 18.5238 13.8712 17.2153C12.7306 16.1975 11.9595 14.9407 11.7361 14.5558C11.5126 14.1721 11.7128 13.9642 11.904 13.773C12.0771 13.6012 12.2876 13.3248 12.4801 13.1001C12.6751 12.8779 12.7384 12.7177 12.8676 12.4607C12.9954 12.2049 12.9321 11.9802 12.8353 11.7877C12.7384 11.5966 11.9711 9.70685 11.6521 8.93831C11.3395 8.19044 11.0231 8.29119 10.788 8.27956L10.0517 8.26665C9.79598 8.26665 9.38006 8.36223 9.02873 8.74715C8.6774 9.13206 7.6854 10.0595 7.6854 11.9492C7.6854 13.8389 9.06102 15.664 9.25219 15.9198C9.44464 16.1755 11.9582 20.0531 15.8087 21.7155C16.7245 22.1107 17.44 22.3471 17.9967 22.524C18.9164 22.8159 19.7534 22.7746 20.4147 22.6764C21.1523 22.5667 22.6855 21.7477 23.0058 20.8513C23.3262 19.9536 23.3262 19.1851 23.2293 19.0249Z" fill="white"/>
                </svg>
            </button> 
            <Dialog>
            <DialogTrigger>
            <p className='rounded-full p-1 bg-slate-500 text-white text-center w-8 h-8 hover:bg-slate-600 transition-all  hover:text-xl flex flex-row items-center justify-center'>
                ?
            </p>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="#000000" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0m-3 8v2h2v-2z"/></svg> */}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className='text-3xl text-center mb-2'>¿Por qué iniciar sesión?</DialogTitle>
                <DialogDescription className='text-base text-center mb-2'>
                    Estamos trabajando para poder implementar los pagos con tarjetas de crédito y débito.
                </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                <DialogClose asChild className='mx-auto'>
                    <button type="button" className="w-28 rounded-md bg-slate-500 text-white px-4 py-2 hover:bg-slate-600 transition-colors">
                    Salir
                    </button>
                </DialogClose>
                </DialogFooter>
            </DialogContent>
            </Dialog>
         </div>
         
         : 
         <Link
          target='_blank'
          href={`https://wa.me/+51950306310?text=${encodeURIComponent(message)}`}
          className={`bg-primary-green cursor-pointer text-white rounded-lg px-7 py-2 hover:shadow-xl shadow-white transition-all hover:font-bold flex flex-row items-center gap-2 `}
        >
          <span>COMPRAR</span>
          {/* Wasap */}
          <svg width="16" height="16" viewBox="0 0 31 31" >
              <path d="M0 30.9999L2.17904 23.0394C0.834415 20.7092 0.127875 18.0678 0.129166 15.3592C0.133041 6.89103 7.02407 0 15.4909 0C19.5997 0.00129166 23.4566 1.60166 26.3577 4.50532C29.2575 7.40898 30.854 11.2685 30.8527 15.3734C30.8488 23.8428 23.9578 30.7338 15.4909 30.7338C12.9205 30.7326 10.3876 30.088 8.14394 28.8635L0 30.9999ZM8.52111 26.0826C10.6859 27.3678 12.7526 28.1376 15.4858 28.1389C22.5227 28.1389 28.2551 22.4117 28.259 15.3708C28.2616 8.31573 22.5563 2.59624 15.4961 2.59366C8.45394 2.59366 2.72541 8.3209 2.72283 15.3605C2.72154 18.2344 3.5637 20.3863 4.97807 22.6377L3.6877 27.3497L8.52111 26.0826ZM23.2293 19.0249C23.1337 18.8647 22.878 18.7692 22.493 18.5767C22.1094 18.3843 20.2223 17.4555 19.8697 17.3277C19.5183 17.1998 19.2626 17.1352 19.0055 17.5201C18.7498 17.9038 18.0135 18.7692 17.7901 19.0249C17.5666 19.2807 17.3419 19.313 16.9583 19.1205C16.5746 18.928 15.3372 18.5238 13.8712 17.2153C12.7306 16.1975 11.9595 14.9407 11.7361 14.5558C11.5126 14.1721 11.7128 13.9642 11.904 13.773C12.0771 13.6012 12.2876 13.3248 12.4801 13.1001C12.6751 12.8779 12.7384 12.7177 12.8676 12.4607C12.9954 12.2049 12.9321 11.9802 12.8353 11.7877C12.7384 11.5966 11.9711 9.70685 11.6521 8.93831C11.3395 8.19044 11.0231 8.29119 10.788 8.27956L10.0517 8.26665C9.79598 8.26665 9.38006 8.36223 9.02873 8.74715C8.6774 9.13206 7.6854 10.0595 7.6854 11.9492C7.6854 13.8389 9.06102 15.664 9.25219 15.9198C9.44464 16.1755 11.9582 20.0531 15.8087 21.7155C16.7245 22.1107 17.44 22.3471 17.9967 22.524C18.9164 22.8159 19.7534 22.7746 20.4147 22.6764C21.1523 22.5667 22.6855 21.7477 23.0058 20.8513C23.3262 19.9536 23.3262 19.1851 23.2293 19.0249Z" fill="white"/>
          </svg>
        </Link>
        }
        
      </div>
      <p
        className={`absolute text-white bg-primary-green rounded-sm py-3 px-7 text-xl top-0 right-0`}
      >
        OFERTA
      </p>
      <div
      ref={wrapperZoomPhotoRef}
        className="hidden zoomImage overflow-hidden z-50 absolute top-1/2 -translate-y-1/2 right-1/4 translate-x-2/4 w-[calc(50%-2rem)] h-[calc(100%-2rem)] bg-white border shadow-xl zoom"
      >
        <img
        ref={zoomedImageRef}
          src={individualProduct?.image1}
          alt={`Zoom de la imagen ${individualProduct?.imageAlt}`}
          className="zoomed-image w-full absolute object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        />
      </div>
    </section>
    )
}
