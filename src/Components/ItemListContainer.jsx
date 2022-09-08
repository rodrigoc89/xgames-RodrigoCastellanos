import React, { useState, useEffect } from 'react';
import CustomFetch from '../Utils/CustomFechts';
import dataFromBD from '../Utils/Data';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        CustomFetch(2000, dataFromBD)
            .then((datos) => setData(dataFromBD))
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <div className='container'>
                <div className='container-product'>
                <ItemList data={data} />
                </div>
            </div>
        </>
    )
};



export default ItemListContainer;