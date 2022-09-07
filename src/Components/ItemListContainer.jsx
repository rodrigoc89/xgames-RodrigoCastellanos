import React, { useState, useEffect } from 'react';
import customFetch from '../Utils/CustomFechts';
import dataFromBD from '../Utils/Data';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        customFetch(2000, dataFromBD)
            .then((datos) => setData(dataFromBD))
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <div className='container-item'>
                <ItemList data={data} />
                <button className="buyButton">Comprar</button>
            </div>
        </>
    )
};



export default ItemListContainer;