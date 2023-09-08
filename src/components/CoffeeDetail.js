import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {

    const {coffee} = props;

    return (
        <React.Fragment>
            <div className="coffee">
                <h1>{coffee.name}</h1>
                <p>{coffee.origin}</p>
                <p>{coffee.roast}</p>
                <p>{coffee.notes}</p>
                <p>{coffee.price}</p>
                <p>{coffee.stock}</p>
            </div>

            <button onClick={() => props.onClickingEdit}>Edit</button>
        </React.Fragment>
    );
}

Coffee.propTypes = {
    coffee: PropTypes.object,
    onClickingEdit: PropTypes.func
};

export default Coffee;