import React from 'react';

function Loading() {
    return (
        <div className="loader">
            <div className="loader-loader">
                <div className="rueda"></div>
            </div>
            <div className="loader-title">Cargando...</div>
        </div>
    );
}

export default Loading;