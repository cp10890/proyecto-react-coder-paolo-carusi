// import storeList from './json/stores.json'; USE THIS IF YOU WANT TO ADD NEW DATA OR UPDATE TO FIRESTORE DATABASE FROM THE JSON FILE
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Tiendas = () => {
    // Effect to add stores to Firestore collection, ONLY use if database is empty or to add new products and update the database
    /* useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'stores');

        storeList.forEach((item) => {
            addDoc(itemCollection, item);
        });
    }, []); */

    const [stores, setStores] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'stores');
        getDocs(itemCollection).then((querySnapshot) => {
            setStores(
                querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
            );
        });
    }, []);

    return (
        <div className="container mb-5">
            <h2>Nuestras tiendas</h2>
            <hr />
            <div className="row">
                {stores.map((stores) => (
                    <div className="col-md-3" key={stores.id}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{stores.store}</h4>
                                <p className="card-text">{stores.address}</p>
                                <p className="card-text">{stores.phone}</p>
                                <p className="card-text">{stores.hours}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tiendas;
