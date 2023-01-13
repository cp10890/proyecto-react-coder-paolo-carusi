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
import Loading from './Loading';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

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
                }),
                setLoading(false)
            );
        });
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;
