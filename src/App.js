import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import CartProvider from './Components/CartContext';
import Contacto from './Components/Contacto';
import './Utils/FirebaseConfig'


const App = () => {
    return (
        <>
        <CartProvider>
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:nameCategory' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='/contacto' element={<Contacto/>}/>
                </Routes>
        </BrowserRouter>
        </CartProvider>
        </>

    );
}

export default App;
