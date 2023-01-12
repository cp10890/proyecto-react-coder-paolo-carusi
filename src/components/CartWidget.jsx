import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);

    return (
        <Link to={'/cart'} type="button" className="btn position-relative">
            <img src="/images/bag.svg" alt="Bolsa de compra" width="30px" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotal()}
            </span>
        </Link>
    );
};

export default CartWidget;
