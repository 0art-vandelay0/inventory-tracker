import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

function CoffeeList(props) {

    const sortedCoffeeList = [...props.coffeeList].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <React.Fragment>
            <hr />
            {sortedCoffeeList.map((coffee) =>
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