'use client';
import Link from 'next/link';
import styles from './style.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../../../public/images/logo.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Logo" />
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.showMenu : ''}`}>
          <li className={styles.navItem}><Link href="/">Over het Bedrijf</Link></li>
        
          <li className={styles.navItem}>
            <Link href="/">Producten</Link>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/product1">🔹 PVC-Ramen</Link></li>
              <li><Link href="/product2">🔹 Aluminium Ramen</Link></li>
              <li><Link href="/product3">🔹 Houten Ramen</Link></li>
            </ul>
          </li>
          <li className={styles.navItem}><Link href="/">Samenwerking</Link></li>
          <li className={styles.navItem}><Link href="/">Nieuws</Link></li>
          <li className={styles.navItem}><Link href="/">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
