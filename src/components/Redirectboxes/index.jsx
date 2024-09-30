'use client';
import React from 'react'
import style from './style.module.scss';
import Image from 'next/image';
import Picture from '../../../public/images/sectionR/section-foto.png';


export default function Boxes() {
    return (
        <div className={style.rBox}>
            <div className={style.boxSection}>
                <div className={style.box}>
                    <div className={style.title}>
                        <p>
                            Wij monteren het voor jou!
                        </p>
                        <b>
                            Het is zo gedaan, dus minder werk voor jou!
                        </b>
                    </div>
                </div>
                <a className={style.box}>
                <div className={style.imageContainer}>
                        <Image 
                            src={Picture} 
                            alt='side-picture' 
                            width={500}  // Stel de gewenste breedte van de afbeelding in
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}