import React from 'react';
import Item from './Item';

function ItemList({data}) {
    return (
        <>
            {data.map((item) => (
                <Item key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                img={item.img}
                />
            ))}
        </>
    );
}

export default ItemList;