import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        if (count < itemStock) {
            setCount(count + 1);
        }
    };

    const addToCart = (qty) => {
        setItemStock(itemStock - qty);
        if (itemStock <= 0) {
            setItemStock(0);
        }
        setCount(1);
        onAdd(qty);
    };

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div>
            <div className="row mb-3">
                {itemStock > 0 ? (
                    <div className="col-md-6 text-left">
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                        >
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={decrement}
                            >
                                -
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                            >
                                {count}
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={increment}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="row">
                <div className="col-md-6 text-left">
                    {itemStock > 0 ? (
                        <div>
                            <button
                                type="button"
                                className="btn btn-outline-danger mb-2"
                                onClick={() => addToCart(count)}
                            >
                                Agregar al carrito
                            </button>
                            <Link to="/cart" className="btn btn-outline-danger">
                                Finalizar compra
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <p className="text-danger">
                                No hay stock disponible.
                            </p>
                            <Link to="/cart" className="btn btn-outline-danger">
                                Finalizar compra
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
