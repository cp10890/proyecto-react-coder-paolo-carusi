import React from 'react';
import CartWidget from './CartWidget';
import SearchWidget from './SearchWidget';

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 d-flex align-items-left">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a
                                className="navbar-brand text-center"
                                href="index.html"
                            >
                                <p>
                                    <img
                                        src="images/Logo-red.png"
                                        alt="Logo Life UP Game Store"
                                        width="100px"
                                    />
                                </p>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            aria-current="page"
                                            href="#"
                                        >
                                            JUEGOS
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            CONSOLAS
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            ACCESORIOS
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            PREVENTAS
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <SearchWidget />
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
