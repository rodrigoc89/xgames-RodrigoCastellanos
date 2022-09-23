import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonBuy from './ButtonBuy';
import ItemCount from './ItemCount';
import { useCartContext } from './CartContext';


export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

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
                    <img src={data.img} alt="asd" />
                    </div>
                    <h2 className='item-price'>$ {data.price}</h2>
                    {
                        goToCart ? <Link to='/cart'>Terminar Compra</Link> : <ItemCount initial={1} stock={data.stock}  onAdd={onAdd}/>
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