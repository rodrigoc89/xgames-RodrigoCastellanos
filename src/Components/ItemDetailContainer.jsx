import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import dataFromBD from '../Utils/Data';

// const detail = {
//     id: 104,
//     title: 'Total War: WARHAMMER',
//     img: 'https://i.postimg.cc/bvTNb0jh/warhamer.jpg',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
//     price: 100,
//     stock: 10,
//     requiriments: 'lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferend',
  

// }

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dataFromBD[1]);
            }, 2000);
        });

        getData.then(res => setData(res));
    })
    console.log(data);

    return (
        <>
            <ItemDetail data={data} />
        </>
    )
};

export default ItemDetailContainer;