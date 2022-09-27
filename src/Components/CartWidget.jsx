import React from 'react';
import { useCartContext } from './CartContext';


export const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <button id='carrito' className="botones">
            <i id='carro' className="fa-solid fa-cart-shopping"></i><span>{totalProducts() || ""}</span>
        </button>
    )
}

export default CartWidget;