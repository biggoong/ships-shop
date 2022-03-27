import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header>
            <h1 className={styles.title}>
                SpaceX Ships
            </h1>

            <p className={styles.description}>
                Book your ideal ship
            </p>

            <Link href={'/cart'}>
                <p className={styles.action}>Go to Cart 🛒</p>
            </Link>
        </header>
    )
}

export default Header;