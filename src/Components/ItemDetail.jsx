import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from './CartContext';


function ItemDetail({ item }){

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }
    console.log(item.title);
    return (
        <>
            <div className='container-detail'>
                <div className='row'>
                    <div className='col-6'>
                        <h1 className='item-title'>{item.title}</h1>
                        <div className='img-detail'>
                            <img src={item.img} alt="imagen" />
                        <h2 className='item-price'>$ {item.price}</h2>
                        {
                            goToCart ? <Link className='finish-buy' to='/cart'>Terminar Compra</Link> : <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                        }
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <p>Información:</p>
                                <p className='item-description'>{item.description}</p>
                            </div>
                            <div className='col-6'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <p>Requisitos</p>
                                        <div className='col'>
                                            <p className='item-description'>Mínimo: <br />{item.requirements[0].minimo}</p>

                                        </div>
                                        <div className='row'>
                                            <p className='item-description'>Requeridos: <br />{item.requirements[0].recomendado}</p>

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