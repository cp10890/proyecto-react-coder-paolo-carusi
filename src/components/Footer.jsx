import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link text-secondary"
                                to={'/tiendas'}
                            >
                                Nuestras tiendas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-secondary"
                                href="https://www.sernac.cl/portal/617/w3-propertyvalue-8321.html#:~:text=Como%20consumidor%20usted%20tiene%20derechos,reparaci%C3%B3n%20e%20indemnizaci%C3%B3n%2C%20ante%20da%C3%B1os"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Derechos del Consumidor
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-secondary"
                                href="https://www.sernac.cl/portal/617/w3-propertyvalue-64529.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Consultas y reclamos
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 text-end text-secondary">
                    <p>
                        <Link to={'/'} className="text-decoration-none">
                            <img
                                src="/images/Logo-red.png"
                                alt="Logo"
                                width="40px"
                                className="mx-2"
                            />
                        </Link>
                        Life UP Game Store
                    </p>
                    <p>Todos los derechos reservados 2021 ©</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
