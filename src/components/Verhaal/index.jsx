"use client";
import styles from "./style.module.scss";
import React from "react";

const Verhaal = () => {
  return (
    <section className={styles.verhaalContainer}>
      <div className={styles.textSection}>
        <h2 className={styles.title}>Ons verhaal</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button className={styles.button}>Over ons...</button>
      </div>
      <div className={styles.imageSection}>
        <img src="/images/verhaal/verhaal.png" alt="Ons team" className={styles.image} />
      </div>
    </section>
  );
};

export default Verhaal;
