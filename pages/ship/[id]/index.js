import React from 'react';
import Link from 'next/link';
import { gql } from '@apollo/client'
import { client } from '../../../client';
import { useCart } from '../../../hooks/useCart';
import styles from '../../../styles/ItemPage.module.css';

const Ship = ({ ship }) => {
    const { handleToggleBuy, isOnTheCart } = useCart();

    const isOn = isOnTheCart(ship.id);

    return (
        <>
            <div className={styles.page}>
                <img src={ship.image} />
                <h2>{ship.name}</h2>
                <p>Type: {ship.type}</p>
                <p>Price: 30 000 000</p>
                <p>Home port: {ship['home_port']}</p>
                {ship['weight_kg'] && <p>Weight: {ship['weight_kg']} kg</p>}
                {ship['year_built'] && <p>Year built: {ship['year_built']}</p>}
            </div>

            <button className={styles.button} onClick={() => handleToggleBuy(ship)}>
                {isOn ? 'Remove from Cart' : 'Add to Cart'}
            </button>

            <Link href={'/'}>Go back</Link>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { data } = await client.query({
        query: gql`
        {
          ship(id: "${context.params.id}") {
            home_port
            id
            image
            name
            type
            url
            weight_kg
            year_built
          }
        }    
        `
    });

    return {
        props: {
            ship: data.ship
        }
    }
}

// export const getStaticPaths = async () => {
//     const { data } = await client.query({
//         query: gql`
//         {
//           ships {
//             id
//           }
//         }    
//         `
//     });

//     const paths = data.ships.map(id => ({ params: id }))

//     return {
//         paths: paths,
//         fallback: false,
//     }
// }

export default Ship;