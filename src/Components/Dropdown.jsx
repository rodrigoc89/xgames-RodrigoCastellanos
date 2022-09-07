import React from 'react';

function Dropdown() {
    return (
        <>
            <button className="botones">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Juegos
                        <i id='logo' className="fa-solid fa-gamepad"></i>
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Acción</a></li>
                        <li><a className="dropdown-item" href="#">Aventura</a></li>
                        <li><a className="dropdown-item" href="#">Carreras</a></li>
                        <li><a className="dropdown-item" href="#">Deportes</a></li>
                        <li><a className="dropdown-item" href="#">Estrategia</a></li>
                        <li><a className="dropdown-item" href="#">MultiJugador</a></li>
                        <li><a className="dropdown-item" href="#">Rol</a></li>
                        <li><a className="dropdown-item" href="#">Simulación</a></li>
                    </ul>
                </li>
            </button>
        </>

    )
}

export default Dropdown;