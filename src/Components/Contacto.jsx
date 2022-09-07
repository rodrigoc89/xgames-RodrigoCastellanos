import React from 'react';

function Contacto() {
    return (
        <>
            <div className='container-contacto'>
                <div className='container-formulario'>
                <form action="">
                    <label>
                        <input type="text" name="Nombre" placeholder='Escriba su Nombre' required />
                    </label>
                    <label>
                        <input type="text" name="Apellido" placeholder='Escriba su Apellido' required />
                    </label>
                    <label>
                        <input type="number" name='telefono' placeholder='Telefono' required />
                    </label>
                    <textarea name="text" id="" cols="30" rows="10"></textarea>
                </form>
                </div>
            </div>
        </>
    )
}

export default Contacto;