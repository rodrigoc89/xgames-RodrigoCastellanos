import React from 'react';
import { useCartContext } from './CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.img} alt={product.title} />
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u. : {product.price}</p>
                <p>Subtotal:  {product.quantity * product.price}</p>
                <button>Eliminar {() => removeProduct(product.id)}</button>
            </div>
        </div>
    )

}

export default ItemCart