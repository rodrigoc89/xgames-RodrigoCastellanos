import React from 'react';

function Item(title,price,img,description) {
    return (
        <>
            <div className='container-item-content'>
                <div className='card-content'>
                    <h1 className='card-title'>{}</h1>
                    <div className='card-img'>
                        <img src={img} alt="" />
                        <div className='card-price'>$</div>
                    </div>
                </div>
            </div>
            <div className='card-description'>
                <p className='card-text'></p>
            </div>
        </>
    )
}

export default Item;