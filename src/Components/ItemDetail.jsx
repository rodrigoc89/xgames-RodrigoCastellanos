import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonBuy from './ButtonBuy';


export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }
    return (
        <>

            <div className='container-detail'>
                <div className='row'>
                    <div className='col-6'>
                    <h1 className='item-title'>{data.title}</h1>
                    <div className='img-detail'>
                    <img src={data.img} alt="asd" />
                    </div>
                    <h2 className='item-price'>$ {data.price}</h2>
                    {
                        goToCart ? <Link to='/cart'>Terminar Compra</Link> : <ButtonBuy   onAdd={onAdd} />
                    }
                    </div>
                    <div className='col-6'>
                    <div className='row'>
                    <div className='col-6'>
                        <p>Informacion:</p>
                        <p className='item-description'>{data.description}</p>
                    </div>
                    <div className='col-6'>
                        <p>Requisitos</p>
                        <p className='item-description'>{data.requirements}</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;