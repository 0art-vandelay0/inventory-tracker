import React from "react";
import PropTypes from "prop-types";
import './ReusableForm.css';

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Coffee Name'
                    defaultValue={props.name || ''} />
                <label htmlFor='origin'>Origin</label>
                <input
                    type='text'
                    name='origin'
                    placeholder='Origin'
                    defaultValue={props.origin || ''} />
                <label htmlFor='roast'>Roast</label>
                <input
                    type='text'
                    name='roast'
                    placeholder='Roast'
                    defaultValue={props.roast || ''} />
                <label htmlFor='notes'>Notes</label>
                <input
                    type='text'
                    name='notes'
                    placeholder='Notes'
                    defaultValue={props.notes || ''} />
                <label htmlFor='price'>Price</label>
                <input
                    type='number'
                    name='price'
                    placeholder='Price'
                    defaultValue={props.price || ''} />
                <label htmlFor='stock'>Stock</label>
                <input
                    type='number'
                    name='stock'
                    placeholder='Stock'
                    defaultValue={props.stock || ''} />
                <button type='submit'>
                    <span className="button-content">
                        {props.icon && props.icon}
                        {props.buttonText}
                    </span>
                </button>
            </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string,
    icon: PropTypes.element
};

export default ReusableForm;