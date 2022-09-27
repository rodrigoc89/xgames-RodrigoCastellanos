import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from './Loading';


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'gamelist', idItem)
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))

        const getIsLoading = new Promise((resolve) => {
            setTimeout(() => {
                resolve(false);
            }, 2000);
        });
        getIsLoading.then(res => setIsLoading(res));
    }, [idItem])

    return (
        <>
            {isLoading ? <Loading /> : <ItemDetail data={data} />}
        </>
    )
};

export default ItemDetailContainer;