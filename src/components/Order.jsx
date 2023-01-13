import { useParams, Link } from 'react-router-dom';

const Order = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-danger" role="alert">
                        <h2 className="mb-4">Muchas gracias por su compra!</h2>
                        <p>
                            Su número de orden es: <b>{id}</b>.{' '}
                        </p>
                        <p>
                            Su comprobante de compra será enviado a su email
                            dentro de las próximas 24h.
                        </p>
                    </div>
                    <Link to="/" className="btn btn-danger mb-2 text-center">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Order;
