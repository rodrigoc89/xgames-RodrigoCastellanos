import React from 'react';
import { Link } from 'react-router-dom';

function Item({ title, price, img, description, id }) {
    return (
        <>
        <Link to={`/item/${id}`}>
            <div className='card-content'>
                <h1 className='card-title'>{title}</h1>

                <img className='img-fluid' src={img} alt="" />
                
                <div className='card-price'>
                    <p><span className='peso'>$</span> {price} </p>
                </div>

                {/* <div className='buy'>
                    <button className="buyButton">Comprar</button>
                </div>
                 */}
            </div>
        </Link>
        </>
    )
}

export default Item;