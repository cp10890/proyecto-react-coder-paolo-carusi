import { useState } from 'react';

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const onAdd = () => {
        if (stock > 0) {
            console.log('Agregaste ' + count + ' productos al carrito');
        }
    };

    return (
        <div>
            <div className="row mb-3">
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
            </div>
            <div className="row">
                <div className="col-md-6 text-left">
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onAdd}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
