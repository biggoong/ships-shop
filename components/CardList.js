import React from "react";
import Link from 'next/link'
import styles from '../styles/CardList.module.css'

const CardList = ({ ships }) => {
    return (
        <div className={styles.grid}>
            {ships.map(ship => (
                <Link key={ship.id} href="/ship/[id]" as={`/ship/${ship.id}`}>
                    <a className={styles.card}>
                        <img src={ship.image} />
                        <h2>{ship.name} &rarr;</h2>
                        <p>Type: {ship.type}</p>
                        <p>Price: 30 000 000</p>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default CardList;