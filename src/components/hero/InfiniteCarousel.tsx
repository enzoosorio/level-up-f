'use client'

import Image from 'next/image'
import React, { RefObject, useEffect, useRef } from 'react'
import ZARA from '@/assets/hero/infinitecarousel/ZARA.png'
import ADIDAS from '@/assets/hero/infinitecarousel/ADIDAS.png'
import CHAMPION from '@/assets/hero/infinitecarousel/CHAMPION.png'
import HM from '@/assets/hero/infinitecarousel/H&M.png'
import NIKE from '@/assets/hero/infinitecarousel/NIKE.png'
import TOMMY from '@/assets/hero/infinitecarousel/TOMMY.png'

export const InfiniteCarousel = () => {

    const carouselRef : RefObject<HTMLDivElement> = useRef(null)
    const carouselTrackRef : RefObject<HTMLDivElement>  = useRef(null)

    useEffect(() => {

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!prefersReducedMotion) {
          addAnimation();
        }

        function addAnimation() {
            if (carouselRef.current) {
              carouselRef.current.setAttribute("data-animated", "true");
      
              const carouselTrack = carouselTrackRef.current;
      
              if (!carouselTrack) return;
      
              const carouselTrackContent = Array.from(carouselTrack.children);
      
              carouselTrackContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true) as HTMLElement;
                duplicatedItem.setAttribute("aria-hidden", "true");
                carouselTrack.appendChild(duplicatedItem);
              });
      
              if (window.matchMedia("(min-width: 1280px)").matches) {
                carouselTrackContent.forEach((item) => {
                  const duplicatedItem = item.cloneNode(true) as HTMLElement;
                  duplicatedItem.setAttribute("aria-hidden", "true");
                  carouselTrack.appendChild(duplicatedItem);
                });
              }
            }
          }

    }, [])

    const IMAGES_CAROUSEL = [
        { src: ZARA , alt: "Zara logo" },
        { src: ADIDAS , alt: "Adidas logo" },
        { src: CHAMPION , alt: "Champion logo" },
        { src: HM , alt: "H&M logo" },
        { src: NIKE, alt: "Nike logo" },
        { src: TOMMY, alt: "Tommy Hilfiger logo" },
      ];

  return (
    <div 
    ref={carouselRef}
    className="carousel-container mt-8 bg-primary-ice-color">
    <div 
    ref={carouselTrackRef}
    className="carousel-track">
        {
        IMAGES_CAROUSEL &&
            IMAGES_CAROUSEL.map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} className="carousel-item max-w-24"  />
            ))
        }
        {
        IMAGES_CAROUSEL &&
            IMAGES_CAROUSEL.map((image,index) => (
            <Image key={index} src={image.src} alt={image.alt} className="carousel-item max-w-24" />
            ))
        }
    </div>
    </div>
  )
}
