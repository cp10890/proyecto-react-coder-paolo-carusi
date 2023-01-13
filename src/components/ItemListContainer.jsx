//import productsArray from './json/products.json'; USE THIS IF YOU WANT TO ADD PRODUCTS TO FIRESTORE DATABASE FROM THE JSON FILE
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    // Effect to add products to Firestore collection, ONLY use if database is empty or to add new products and update the database
    /* useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'products');

        productsArray.forEach((producto) => {
            addDoc(itemCollection, producto);
        });
    }, []); */

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'products');
        const q = id
            ? query(itemCollection, where('category', '==', id))
            : itemCollection;

        getDocs(q).then((querySnapshot) => {
            setItems(
                querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
            );
        });
    }, [id]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
