import { CartContext } from './context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, cartTotal, clear, removeItem, cartPrice } =
        useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div
                        className="col-md-12 alert alert-danger text-center"
                        role="alert"
                    >
                        No hay productos en el carrito.
                    </div>
                    <div className="col-md-12 text-center">
                        <Link to={'/'} className="btn btn-danger">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    colSpan={12}
                                    className="text-end my-5"
                                >
                                    <Link
                                        onClick={clear}
                                        className="btn btn-danger"
                                        title="Vaciar carrito"
                                    >
                                        Vaciar carrito
                                    </Link>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-end">
                                    Cantidad
                                </th>
                                <th scope="col" className="text-end">
                                    Precio
                                </th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="align-middle">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            width={80}
                                        ></img>
                                    </td>
                                    <td className="align-middle">
                                        {item.name}
                                    </td>
                                    <td className="align-middle text-end">
                                        {item.quantity}
                                    </td>
                                    <td className="align-middle text-end">
                                        ${item.quantity * item.price}
                                    </td>
                                    <td className="align-middle text-end">
                                        <Link
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <img
                                                src={'images/x-square-fill.svg'}
                                                alt={'Eliminar'}
                                                width={20}
                                                title={'Eliminar producto'}
                                            ></img>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-end">
                                    <b>Total a pagar</b>
                                </td>
                                <td className="text-end">
                                    <b>${cartPrice()}</b>
                                </td>
                                <td className="text-end">
                                    <button className="btn btn-danger">
                                        Finalizar Compra
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
