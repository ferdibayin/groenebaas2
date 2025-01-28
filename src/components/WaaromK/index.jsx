'use client'
import styles from './style.module.scss';
import React from 'react';

const Waaromk = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Waarom kiezen voor onze kozijnen?</h1>
            <div className={styles.cards}>
                <div className={styles.imageSection}>
                <img src="/images/waaromK/image14.png" alt="Ons team" className={styles.image} />
                    <div className={styles.card}>
                        <p><strong>Verduurzaaming van jouw project</strong> - dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco consequat. </p>
                    </div>
                </div>

                <div className={styles.imageSection}>
                <img src="/images/waaromK/image15.png" alt="Ons team" className={styles.image} />
                    <div className={styles.card}>
                        <p><strong>Snelste levering</strong> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat. </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Waaromk;