import React from 'react';

function Item({ title, price, img, description, id }) {
    return (
        <>
            <div className='card-content'>
                <h1 className='card-title'>{title}</h1>

                <img className='img-fluid' src={img} alt="" />
                
                <div className='card-price'>
                    <p>${price} </p>
                </div>

                {/* <div className='buy'>
                    <button className="buyButton">Comprar</button>
                </div>
                 */}
            </div>
        </>
    )
}

export default Item;