import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { ClockClockwise } from '@phosphor-icons/react';

function EditCoffeeForm(props) {
    const { coffee } = props;

    function handleEditCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onEditCoffee({
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            notes: event.target.notes.value,
            price: parseFloat(event.target.price.value),
            stock: parseInt(event.target.stock.value),
            id: coffee.id
        });
    }

    return (
        <React.Fragment>
            <div className="coffee">
                <h1>{coffee.name}</h1>
            </div>
            <ReusableForm
                formSubmissionHandler={handleEditCoffeeFormSubmission}
                buttonText="Update Coffee"
                icon={<ClockClockwise  style={{ marginRight: '8px' }} size={25} />}
                name={coffee.name}
                origin={coffee.origin}
                roast={coffee.roast}
                notes={coffee.notes}
                price={coffee.price}
                stock={coffee.stock}
            />
        </React.Fragment>
    );
}

EditCoffeeForm.propTypes = {
    onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;