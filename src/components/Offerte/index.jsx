'use client'
import styles from './style.module.scss';
import React from 'react';

const Offerte = () => {
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <div className={styles.card}>
                    <h2>Kies voor duurzame kozijnen<br/>en investeer in een groenere toekomst!</h2>
                    <p>Vraag nu een gratis offerte aan!</p>
                    <button className={styles.button}>Gratis offerte</button>
                </div>
            </div>
        </div>
    );
}

export default Offerte;
