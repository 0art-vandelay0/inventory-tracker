import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

function CoffeeList(props) {
    return (
        <React.Fragment>
            <hr />
            {props.coffeeList.map((coffee) =>
                <Coffee
                    whenCoffeeClicked={props.onCoffeeSelection}
                    name={coffee.name}
                    origin={coffee.origin}
                    roast={coffee.roast}
                    notes={coffee.notes}
                    price={coffee.price}
                    stock={coffee.stock}
                    id={coffee.id}
                    key={coffee.id} />
            )}
        </React.Fragment>
    );
}

CoffeeList.propTypes = {
    coffeeList: PropTypes.array,
    onCoffeeSelection: PropTypes.func
};

export default CoffeeList;