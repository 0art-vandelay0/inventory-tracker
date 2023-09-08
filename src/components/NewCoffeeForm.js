import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCoffeeForm (props) {
    const { coffee } = props;

    function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreate({
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            notes: event.target.notes.value,
            price: event.target.price.value,
            stock: event.target.stock.value,
            id: coffee.id
        });
    }

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewCoffeeFormSubmission}
                buttonText="Update Coffee" />
        </React.Fragment>
    );
}

NewCoffeeForm.propTypes = {
    onNewCoffeeCreate: PropTypes.func
};

export default NewCoffeeForm;