"use client"
import styles from './style.module.scss';
import React from 'react';

const Bedrijf = () => {
    return (
        <div className={styles.container}>
            <img src='/images/bedrijven/aluplast.png' alt='Afbeelding 1' />
            <img src='/images/bedrijven/shuco.png' alt='Afbeelding 2' />
            <img src='/images/bedrijven/veka.png' alt='Afbeelding 3' />
        </div>
    );
}

export default Bedrijf;
