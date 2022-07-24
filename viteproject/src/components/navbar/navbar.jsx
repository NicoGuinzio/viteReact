import React from 'react'   

const Navbar = (props) => {
    console.log(props)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" id="link de inicio" href="#" >Inicio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-ico"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page">Categorias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Ofertas</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                    <img className="imgCarrito" src="../../../img/carritoimagen.png" alt="imagen Carrito"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar