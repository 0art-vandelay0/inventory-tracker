import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input
                    type='text'
                    name='name'
                    placeholder='Coffee Name'
                    defaultValue={props.name || ''} />
                <input
                    type='text'
                    name='origin'
                    placeholder='Origin'
                    defaultValue={props.origin || ''} />
                <input
                    type='text'
                    name='roast'
                    placeholder='Roast'
                    defaultValue={props.roast || ''} />
                <input
                    type='text'
                    name='notes'
                    placeholder='Notes'
                    defaultValue={props.notes || ''} />
                <input
                    type='number'
                    name='price'
                    placeholder='Price'
                    defaultValue={props.price || ''} />
                <input
                    type='number'
                    name='stock'
                    placeholder='Stock'
                    defaultValue={props.stock || ''} />
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;