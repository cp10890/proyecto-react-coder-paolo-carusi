import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Loading from './Loading';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, 'products', id);
        getDoc(item).then((doc) => {
            if (doc.exists()) {
                setItem({ id: doc.id, ...doc.data() });
            }
        });
        setLoading(false);
    }, [id]);

    return (
        <div className="container my-5">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
