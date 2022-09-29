import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
import ItemCart from './ItemCart';

function Cart() {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
            <div className='carroVacio'>
                <p>no hay elementos en el carrito</p>
                <Link to='/'>Hacer Compras</Link>
            </div>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div className='total'>
                <p>
                    total: {totalPrice()}
                </p>
                <Link to='/checkout'><button>Finalizar Compra</button></Link>
            </div>
        </>
    )
}


export default Cart