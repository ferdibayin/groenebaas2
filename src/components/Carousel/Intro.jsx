'use client';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import style from './style.module.scss';

import one from '../../../public/images/carousel/1.jpeg';
import two from '../../../public/images/carousel/photo2.jpg';
import three from '../../../public/images/carousel/photo3.jpg';

const images = [one, two, three];

export default function Intro() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className={style.embla}>
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={style.embla__container}>
          {images.map((img, index) => (
            <div className={style.embla__slide} key={index}>
              <Image src={img} alt={`slide-${index + 1}`} layout="responsive" />
            </div>
          ))}
        </div>
      </div>

      <button className={style.embla__prev} onClick={scrollPrev}>
        &#10094;
      </button>
      <button className={style.embla__next} onClick={scrollNext}>
        &#10095;
      </button>

      <div className={style.embla__dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${style.embla__dot} ${index === selectedIndex ? style.active : ''}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
