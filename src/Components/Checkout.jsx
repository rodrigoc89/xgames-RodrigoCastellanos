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
                        <h1>Ingrese sus datos para generar la orden de compra</h1>
                        <div className='container-contacto'>
                        <form action="">
                            <input onChange={(e) => setNombre(e.target.value)} type="text" placeholder='Nombre' />
                            <input onChange={(e) => setApellido(e.target.value)} type="text" placeholder='Apellido' />
                            <input onChange={(e) => setDni(e.target.value)} type="number" placeholder='DNI' />
                            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                            <input onChange={(e) => setTelefono(e.target.value)} type="number" placeholder='Teléfono' />
                            <input onChange={(e) => setDireccion(e.target.value)} type="text" placeholder='Dirección' />
                            <input onChange={(e) => setCodigopostal(e.target.value)} type="text" placeholder="Código Postal" />
                            <button type='button' onClick={FinalizarCompra}>Finalizar</button>
                        </form>
                        </div>
                    </div>
            }

        </div>



    )
}

export default Checktout;
