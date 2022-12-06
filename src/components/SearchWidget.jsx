const SearchWidget = () => {
    return (
        <div className="container-fluid">
            <div className="input-group pd-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar..."
                    aria-label="Buscar..."
                    aria-describedby="button-addon2"
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                >
                    <img src="images/search.svg" alt="Buscar" width="15px" />
                </button>
            </div>
        </div>
    );
};

export default SearchWidget;
