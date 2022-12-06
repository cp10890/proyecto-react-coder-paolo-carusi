import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
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
                <ItemCount stock={item.stock} />
            </div>
        </div>
    );
};

export default ItemDetail;
