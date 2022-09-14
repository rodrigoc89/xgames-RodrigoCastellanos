import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown() {
    return (
        <>
            <button className="botones">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Juegos
                        <i id='logo' className="fa-solid fa-gamepad"></i>
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className='dropdown-item' to='/category/accion'>Accion</Link></li>
                        <li><Link className='dropdown-item' to='/category/aventura'>Aventura</Link></li>
                        <li><Link className='dropdown-item' to='/category/multiplayer'>Multiplayer</Link></li>
                        <li><Link className='dropdown-item' to='/category/carreras'>Carreras</Link></li>
                        <li><Link className='dropdown-item' to='/category/estrategia'>Estrategia</Link></li>
                        <li><Link className='dropdown-item' to='/category/shoter'>Shoter</Link></li>
                        <li><Link className='dropdown-item' to='/category/rol'>Rol</Link></li>
                        <li><Link className='dropdown-item' to='/category/simulador'>Simuladores</Link></li>
                    </ul>
                </li>
            </button>
        </>

    )
}

export default Dropdown;