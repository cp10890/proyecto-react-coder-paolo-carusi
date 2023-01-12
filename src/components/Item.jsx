import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="col-md-3 ">
            <Link
                to={`/item/${item.id}`}
                className="text-decoration-none text-dark"
            >
                <div className="card-group">
                    <div className="card text-center border border-0">
                        <img
                            src={item.image}
                            className="card-img-top"
                            alt={item.name}
                        />
                        <div className="card-body mb-5">
                            <h6 className="card-title">{item.name}</h6>
                            <p className="card-text text-primary">
                                $ {item.price}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Item;
