import { useParams } from 'react-router-dom';
import productsArray from './json/products.json';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    id
                        ? productsArray.filter((item) => item.category === id)
                        : productsArray
                );
            }, 2000);
        });

        promesa.then((result) => {
            setItems(result);
        });
    }, [id]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
