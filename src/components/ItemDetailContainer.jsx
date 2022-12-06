import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import productsArray from './json/products.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsArray.find((item) => item.id === parseInt(id)));
            }, 2000);
        });

        promesa.then((result) => {
            setItem(result);
        });
    }, [id]);

    return (
        <div className="container my-5">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
