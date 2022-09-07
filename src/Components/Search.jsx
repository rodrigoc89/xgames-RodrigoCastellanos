import React from 'react';

function Search() {
    return (
        <>
            <div className="container-buscador">
                <form id='buscador' className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </>
    )
}

export default Search;