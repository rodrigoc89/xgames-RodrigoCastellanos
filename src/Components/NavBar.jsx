import React from 'react';
import Search from './Search'
import Dropdown from './Dropdown';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <>
            <nav className="navegador">
                <div className="container-navBar">
                    <img className='img-fluid' src="https://i.postimg.cc/MTrX9TyX/xg-horizontal-black-red-retina.png" alt="xgames" />
                    <div className="container-nav">
                    <Dropdown/>
                    <button className="botones">
                    <a href="#" target="_blank">Tiendas</a>
                    </button>
                    <button className="botones">
                    <a href="#" target="_blank">Contacto</a>
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