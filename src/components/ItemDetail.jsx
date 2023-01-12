import { useEffect, useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from './context/CartContext';

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (count) => {
        setItemStock(itemStock - count);
        addItem(item, count);
    };

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);

    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.image} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p className="text-primary">
                    <b>Precio: ${item.price}</b>
                </p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
