const error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <div
                        className="alert alert-danger text-center"
                        role="alert"
                    >
                        <h1>Error 404</h1>
                        <p>Página no encontrada</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default error404;
