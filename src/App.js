import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';

const App = ( ) => {
    return (

        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:nameCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
