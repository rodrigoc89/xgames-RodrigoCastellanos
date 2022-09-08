import React from 'react';


export const ItemDetail= ({data}) => {
    return(
        <div className='card-content'>
        <h1 className='card-title'>{data.title}</h1>

        <img className='img-fluid' src={data.img} alt="" />
        
        <div className='card-price'>
            <p>${data.price} </p>
        </div>

        {/* <div className='buy'>
            <button className="buyButton">Comprar</button>
        </div>
         */}
    </div>
    );
}

export default ItemDetail;