import React from 'react';



export const ItemDetail = ({ data }) => {
    return (
        <div className='container-detail'>
            <div className='item-detail'>
                <h1 className='item-title'>{data.title}</h1>
                <img className='img-fluid' src={data.img} alt="" />
                <h2 className='item-price'>${data.price}</h2>
                <button id='buy' className='btn btn-primary' >Comprar</button>
            </div>
            <div className='item-detail-description'>
                <p>Informacion:</p>
                <p className='item-description'>{data.description}</p>
            </div>
            <div className='item-requiriments'>
                <p>Requisitos <br />{data.requirements}</p>
            </div>
        </div>
    );
}

export default ItemDetail;