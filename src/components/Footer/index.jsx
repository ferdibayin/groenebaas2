import Image from 'next/image';
import styles from './style.module.scss'

const index = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socialMedia}>
                    <a href="https://www.instagram.com/jouwbedrijf" className={styles.instagram} target="_blank" rel="noopener noreferrer">
                        <Image src="/path/to/instagram-icon.png" alt="Instagram" width={24} height={24} />
                    </a>
                    <a href="https://www.facebook.com/jouwbedrijf" className={styles.facebook} target="_blank" rel="noopener noreferrer">
                        <Image src="/path/to/facebook-icon.png" alt="Facebook" width={24} height={24} />
                    </a>
                </div>
                <div className={styles.contactInfo}>
                    <p className={styles.address}>Adres: Jouw Straat 1, 1234 AB Stad</p>
                    <p className={styles.phone}>Telefoon: 012-3456789</p>
                    <p className={styles.email}>E-mail: info@jouwbedrijf.nl</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p className={styles.copy}>© 2024 Jouw Bedrijf. Alle rechten voorbehouden.</p>
            </div>
        </footer>
    );
};

export default index;
