import React from "react";
import PropTypes from "prop-types";
import './Coffee.css';

function Coffee(props) {
    return (
        <React.Fragment>
            <div className="coffee" onClick={() => props.whenCoffeeClicked(props.id)}>
                <h3>{props.name}</h3>
                <p>Origin: {props.origin}</p>
                <p>Roast: {props.roast}</p>
                <p>Notes: <br></br>{props.notes}</p>
                <p>${props.price} per 130lb bag</p>
                <p>In stock: 
                    {props.stock > 0 ? ` ${props.stock * 130} lbs || ${props.stock} bags` : <span style={{color: 'red'}}> OUT OF STOCK</span>}
                    {props.stock > 0 && props.stock < 10 ? <span style={{color: 'orange'}}> LOW STOCK</span> : null}
                </p>
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
    stock: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenCoffeeClicked: PropTypes.func
};

export default Coffee;