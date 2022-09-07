import React, { useState, useEffect } from 'react';
import CustomFetch from '../Utils/CustomFechts';
import DataFromBD from '../Utils/Data';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        CustomFetch(2000, DataFromBD)
            .then((datos) => setData(DataFromBD))
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