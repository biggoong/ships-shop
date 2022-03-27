import { useState, useEffect, useCallback } from 'react';
import { saveState, getState } from '../utils/localStorage';

export const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const res = getState('cart');

        if (res) {
            setCart(res);
        }
    }, [])

    const isOnTheCart = useCallback((id) => {
        const ids = cart.map(item => item.id);
        return ids.includes(id);
    }, [cart]);

    const handleToggleBuy = useCallback((ship) => {
        let newCart;

        if (isOnTheCart(ship.id)) {
            newCart = cart.filter(item => ship.id !== item.id);
        } else {
            newCart = [...cart, ship];
        }

        saveState('cart', newCart);
        setCart(newCart);
    }, [isOnTheCart, cart]);

    return {
        cart,
        handleToggleBuy,
        isOnTheCart,
    }
}