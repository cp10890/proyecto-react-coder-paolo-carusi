import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="col-md-4 ">
            <Link
                to={`/item/${item.id}`}
                className="text-decoration-none text-dark"
            >
                <div className="card text-center border border-0">
                    <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.name}
                    />
                    <div className="card-body mb-5">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-primary">$ {item.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Item;
