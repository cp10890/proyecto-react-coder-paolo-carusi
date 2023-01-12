import stores from './json/stores.json';

const Tiendas = () => {
    return (
        <div className="container">
            <h2>Nuestras tiendas</h2>
            <hr />
            <div className="row">
                {stores.map((store) => (
                    <div className="col-md-3" key={store.id}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{store.store}</h4>
                                <p className="card-text">{store.address}</p>
                                <p className="card-text">{store.phone}</p>
                                <p className="card-text">{store.hours}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tiendas;
