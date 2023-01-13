import { useContext, useState } from 'react';
import { CartContext } from './context/CartContext';
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    doc,
    updateDoc,
} from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
const Checkout = () => {
    const { cart, cartPrice, clear } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [orderId, setOrderId] = useState('');

    const handleOrder = () => {
        const orderDate = new Date();
        const newOrder = {
            buyer: {
                name: name,
                email: email,
                phone: phone,
            },
            items: cart.map((item) => {
                return {
                    id: item.id,
                    title: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    total_price: item.price * item.quantity,
                };
            }),
            total: cartPrice(),
            orderdate: `${orderDate.getDate()}-${
                orderDate.getMonth() + 1
            }-${orderDate.getFullYear()} ${orderDate.getHours()}:${orderDate.getMinutes()}:${orderDate.getSeconds()}`,
        };

        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, newOrder).then((docRef) => {
            setOrderId(docRef.id);

            cart.forEach((item) => {
                let product = doc(db, 'products', item.id);
                getDoc(product).then((doc) => {
                    updateDoc(product, {
                        stock: doc.data().stock - item.quantity,
                    });
                });
            });

            clear();
        });
    };

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <h3>Checkout</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Nombre:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Ingrese su nombre"
                                onInput={(e) => {
                                    setName(e.target.value);
                                }}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email:
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Ingrese su email"
                                onInput={(e) => {
                                    setEmail(e.target.value);
                                }}
                            ></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="form-label">
                                Teléfono:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Ingrese su teléfono"
                                onInput={(e) => {
                                    setPhone(e.target.value);
                                }}
                            ></input>
                        </div>

                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleOrder}
                        >
                            Finalizar compra
                        </button>
                    </form>
                </div>

                <div className="col-md-6 mb-5">
                    <h3 className="mb-4">Resumen de la compra</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">
                                    Cantidad
                                </th>
                                <th scope="col" className="text-end">
                                    Precio
                                </th>
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
                                    <td className="align-middle text-center">
                                        {item.quantity}
                                    </td>
                                    <td className="align-middle text-end">
                                        ${item.quantity * item.price}
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row m-5">
                    <div className="col text-center">
                        {orderId !== '' ? (
                            <Navigate to={'/order/' + orderId} />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
