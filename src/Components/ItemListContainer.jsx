import React, { useState, useEffect } from 'react';
import dataFromBD from '../Utils/Data';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { nameCategory } = useParams()
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dataFromBD);
            }, 0);
        });

        if (nameCategory) {
            getData.then(res => setData(res.filter(item => item.category === nameCategory)));
        } else {
            getData.then((res) => setData(res));
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
                    <div className='container-fluid'>
                        <ItemList data={data} />
                        
                    </div>
                </div> 
            }

        </>
    )
}



export default ItemListContainer;