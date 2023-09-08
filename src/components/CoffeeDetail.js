import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
    return (
        <React.Fragment>
            <div className="coffee">
                <h3>{props.name}</h3>
                <p>{props.origin}</p>
                <p>{props.roast}</p>
                <p>{props.notes}</p>
                <p>{props.price}</p>
                <p>{props.stock}</p>
            </div>
        </React.Fragment>
    );
}

Coffee.propTypes = {
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    roast: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
};

export default Coffee;