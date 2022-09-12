import React, {useState} from 'react';


function ItemCount({stock, initial}){
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

    const onAdd = () => {
        alert("Enviaste al carrito " + count + " producto")
    }

    return (
        <>
        <button onClick={restar}><i className="fa-solid fa-minus"></i></button>
        <p>{count}</p>
        <button onClick={sumar}><i className="fa-solid fa-plus"></i></button>
        <button onClick={onAdd}>Comprar</button>
        </>
        
    )
}


export default ItemCount;