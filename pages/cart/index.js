import React from 'react';
import Link from 'next/link';
import { useCart } from '../../hooks/useCart';
import styles from '../../styles/Cart.module.css';

const Cart = () => {
    const { cart, handleToggleBuy } = useCart();

    return (
        <>
            <div>
                {cart.length ? cart.map(item => (
                    <div key={item.id} className={styles.item}>
                        <p>{item.name}</p>
                        <button className={styles.button} onClick={() => handleToggleBuy(item)}>
                            remove
                        </button>
                    </div>
                )) : (
                    <p>Your cart is empty</p>
                )}

            </div>
            <Link href={'/'}>Go home</Link>
        </>
    )
}

export default Cart;
