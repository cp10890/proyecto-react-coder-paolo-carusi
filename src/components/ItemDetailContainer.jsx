import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import productsArray from './json/products.json';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, 'products', id);
        getDoc(item).then((doc) => {
            if (doc.exists()) {
                setItem({ id: doc.id, ...doc.data() });
            }
        });
    }, [id]);

    return (
        <div className="container my-5">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
