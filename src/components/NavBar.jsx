import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 d-flex align-items-left">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-center" to="/">
                                <p>
                                    <img
                                        src="/images/Logo-red.png"
                                        alt="Logo Life UP Game Store"
                                        width="100px"
                                    />
                                </p>
                            </Link>
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
                                        <NavLink
                                            className="nav-link"
                                            aria-current="page"
                                            to={'/category/juegos'}
                                        >
                                            JUEGOS
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to={'/category/consolas'}
                                        >
                                            CONSOLAS
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to={'/category/accesorios'}
                                        >
                                            ACCESORIOS
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to={'/category/preventas'}
                                        >
                                            PREVENTAS
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
