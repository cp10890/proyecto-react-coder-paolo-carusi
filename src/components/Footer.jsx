import React from 'react';

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">
                                Nuestras tiendas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">
                                Derechos del Consumidor
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">
                                Preguntas frecuentes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 text-end text-secondary">
                    <p>
                        <img
                            src="images/Logo-red.png"
                            alt="Logo"
                            width="40px"
                        />
                        Life UP Game Store
                    </p>
                    <p>Todos los derechos reservados 2021 ©</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
