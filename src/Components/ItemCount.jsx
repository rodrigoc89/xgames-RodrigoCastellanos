import React, {useState} from 'react';


function ItemCount({stock, initial,onAdd}){
    const [count, setCount] = useState(initial);

    const sumar = () =>{
        setCount(count + 1);
    }

    const restar = () =>{
        setCount(count - 1);
    }

    if(count == stock + 1){
        setCount(stock);
    }

    if (count == 0){
        setCount(initial);
    }


    return (
        <>
         <div className='itemCount'>
        <button onClick={restar}><i className="fa-solid fa-minus"></i></button>
        <p>{count}</p>
        <button onClick={sumar}><i className="fa-solid fa-plus"></i></button>
        <button onClick={onAdd}>Comprar</button>
        </div>
        </>
        
    )
}


export default ItemCount;