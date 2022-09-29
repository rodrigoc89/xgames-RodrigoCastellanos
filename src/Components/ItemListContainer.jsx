import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { nameCategory } = useParams()

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const querydb = getFirestore();

        const queryCollection = collection(querydb, 'gamelist')


        if (nameCategory) {
            const queryFilter = query(queryCollection, where('category', '==', nameCategory))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        }

        const getIsLoading = new Promise((resolve) => {
            setTimeout(() => {
                resolve(false);
            }, 2000);
        });

        getIsLoading.then(res => setIsLoading(res));
    }, [nameCategory])
    
    return (
        <>
            {
                isLoading ? <Loading /> : <div className='container'>
                    <div className='container-item'>
                        <ItemList data={data} />

                    </div>
                </div>
            }

        </>
    )
}



export default ItemListContainer;