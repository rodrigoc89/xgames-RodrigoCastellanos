import React from 'react';
import Search from './Search'
import Dropdown from './Dropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Contacto from './Contacto';



function NavBar() {
    return (
        <>
            <nav className="navegador">
                <div className="container-navBar">
                   <Link to='/'><img className='img-fluid' src="https://i.postimg.cc/MTrX9TyX/xg-horizontal-black-red-retina.png" alt="xgames" /></Link> 
                    <div className="container-nav">
                    <Dropdown/>
                    <button id='tiendas' className="botones">
                    <a href="#" target="">Tiendas</a>
                    </button>
                    <button id='contacto' className="botones">
                    <a href="contacto" target="">Contacto</a>
                    </button>
                    <CartWidget/>
                    <button id='user' className="botones">
                    <a ><i className="fa-solid fa-user"></i></a>
                    </button>
                    </div>
                <Search/>
                </div>
            </nav>
        </>
    )
}

export default NavBar;