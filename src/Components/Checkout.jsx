import React, { useState } from 'react';
import { useCartContext } from './CartContext';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';


const Checktout = () => {
    const  [ orderId, setOrderId ]  = useState('');
    const [ showId, setShowId  ]= useState(false);
    const { cart, totalPrice, clearCart } = useCartContext();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [codigopostal, setCodigopostal] = useState('');
    const [dni, setDni] = useState('');


    const order = {
        buyer: {
            Nombre: nombre,
            Apellido: apellido,
            Email: email,
            Telefono: telefono,
            Dni: dni,
            Direccion: direccion,
            CodigoPostal: codigopostal,
        },
        products: cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
        })),
        total: totalPrice(),
        date: serverTimestamp(),
    };

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    };

    const FinalizarCompra = () => {
        setShowId(true);
        handleClick();
        clearCart();
    }

    return (

        <div className='container'>
            {
                showId ? <p>Tu codigo de compra es {orderId === "" ? "CARGANDO..." : orderId} </p>
                    : <div className='container'>
                        <form action="">
                            <input onChange={(e) => setNombre(e.target.value)} type="text" placeholder='nombre' />
                            <input onChange={(e) => setApellido(e.target.value)} type="text" placeholder='apellido' />
                            <input onChange={(e) => setDni(e.target.value)} type="number" placeholder='dni' />
                            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" />
                            <input onChange={(e) => setTelefono(e.target.value)} type="number" placeholder='telefono' />
                            <input onChange={(e) => setDireccion(e.target.value)} type="text" placeholder='direccion' />
                            <input onChange={(e) => setCodigopostal(e.target.value)} type="text" placeholder="codigo postal" />
                            <button type='button' onClick={FinalizarCompra}>Finalizar</button>
                        </form>
                    </div>
            }

        </div>



    )
}

export default Checktout;
