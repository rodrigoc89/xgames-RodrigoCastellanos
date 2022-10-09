import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from './CartContext';


export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <>
            <div className='container-detail'>
                <div className='row'>
                    <div className='col-6'>
                        <h1 className='item-title'>{data.title}</h1>
                        <div className='img-detail'>
                            <img src={data.img} alt="imagen" />
                        </div>
                        <h2 className='item-price'>$ {data.price}</h2>
                        {
                            goToCart ? <Link to='/cart'>Terminar Compra</Link> : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                        }
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <p>Informacion:</p>
                                <p className='item-description'>{data.description}</p>
                            </div>
                            <div className='col-6'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                    <p>Requisitos</p>
                                        <div className='col'>
                                            <p className='item-description'>Minimo{data.requirements}</p>

                                        </div>
                                        <div className='col'>
                                            <p className='item-description'>Requeridos{data.requirements}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;