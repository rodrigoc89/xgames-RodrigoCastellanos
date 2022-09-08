import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import dataFromBD from '../Utils/Data';


const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dataFromBD);
            }, 2000);
        });

        getData.then(res => setData(res));
    })
    console.log(data);
    return (<>
        <ItemDetail item={data[0]} />
    </>);
};

export default ItemDetailContainer;