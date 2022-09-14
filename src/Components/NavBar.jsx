import React from 'react';
import Search from './Search'
import Dropdown from './Dropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';



function NavBar() {
    return (
        <>
            <nav className="navegador">
                <div className="container-navBar">
                   <Link to='/'><img className='img-fluid' src="https://i.postimg.cc/MTrX9TyX/xg-horizontal-black-red-retina.png" alt="xgames" /></Link> 
                    <div className="container-nav">
                    <Dropdown/>
                    <button className="botones">
                    <a href="#" target="">Tiendas</a>
                    </button>
                    <button className="botones">
                    <a href="#" target="">Contacto</a>
                    </button>
                    <CartWidget/>
                    <button className="botones">
                    <a id='user'><i className="fa-solid fa-user"></i></a>
                    </button>
                    </div>
                <Search/>
                </div>
            </nav>
        </>
    )
}

export default NavBar;