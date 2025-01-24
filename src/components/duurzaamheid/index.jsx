'use client';

import styles from './style.module.scss';

const Duurzaamheid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>€</div>
          <div className={styles['card-text']}>
            <h3>Prijs</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>🌱</div>
          <div className={styles['card-text']}>
            <h3>Duurzaam</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>👍</div>
          <div className={styles['card-text']}>
            <h3>Betrouwbaar</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>🏅</div>
          <div className={styles['card-text']}>
            <h3>Kwaliteit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <h2>Wat Ons Onderscheidt: De Kernwaarden Achter Onze Kwaliteit en Service</h2>
        <p>
          Bij GROENE BAAS staan we voor meer dan alleen het leveren van kozijnen – 
          we staan voor kwaliteit, duurzaamheid en betrouwbaarheid. Wij begrijpen 
          dat uw huis of project meer is dan alleen een gebouw; het is een investering 
          in de toekomst. Daarom zijn onze kernwaarden ontworpen om u de zekerheid 
          te geven dat u altijd de beste keuze maakt.
        </p>
        <button className={styles.button}>Lees meer...</button>
      </div>
    </div>
  );
};

export default Duurzaamheid;
