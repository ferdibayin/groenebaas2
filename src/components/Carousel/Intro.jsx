'use client';
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback } from 'react'
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay'
import style from './style.module.scss';
import { delay } from 'framer-motion';

import one from '../../../public/images/carousel/1.jpeg'
import two from '../../../public/images/carousel/photo2.jpg'
import three from '../../../public/images/carousel/photo3.jpg'



export default function Intro() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    
     return (
      <div className={style.embla}>
        <div className={style.embla__viewport} ref={emblaRef}>
          <div className={style.embla__container}>
           <div className={style.embla__slide}> 
              <Image src={one} alt='slide1' />
           </div>
            <div className={style.embla__slide}>
              <Image src={two} alt='slide2' />
            </div>
            <div className={style.embla__slide}>
              <Image src={three} alt='slide3' />
            </div>
          </div>
        </div>
          <button className="embla__prev" onClick={scrollPrev}>
          Prev
          </button>
          <button className="embla__next" onClick={scrollNext}>
          Next
          </button>
      </div>
 
    )
}