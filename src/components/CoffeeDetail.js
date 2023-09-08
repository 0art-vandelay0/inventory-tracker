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
                <p>${coffee.price} (per bag)</p>
                <p>In Stock: 
                    {coffee.stock > 0 ? coffee.stock : <span style={{color: 'red'}}> OUT OF STOCK</span>}
                    {coffee.stock > 0 && coffee.stock <= 3 ? <span style={{color: 'orange'}}> LOW STOCK</span> : null}
                </p>

            </div>

            <button onClick={() => props.onClickingEdit()}>Edit</button>
            <button onClick={() => props.onSellingCoffee(coffee.id)}>Sell</button>
        </React.Fragment>
    );
}

Coffee.propTypes = {
    coffee: PropTypes.object,
    onClickingEdit: PropTypes.func
};

export default Coffee;