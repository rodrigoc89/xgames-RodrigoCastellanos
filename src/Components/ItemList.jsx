import React from 'react';

function ItemList({title,price,img,description,id}) {
    return (
        <>
            <div className='container-item-content'>
                <div className='card-content'>
                    <h1 className='card-title'>{title}</h1>
                    <div className='card-img'>
                        <img src={img} alt="" />
                        <div className='card-price'>${price}</div>
                    </div>
                </div>
            </div>
            <div className='card-description'>
                <p className='card-text'>{description}</p>
            </div>
        </>
    )
}

export default ItemList;