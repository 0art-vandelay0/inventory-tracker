import React from "react";
import PropTypes from "prop-types";
import './ReusableForm.css';

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    type='text'
                    name='name'
                    placeholder='Coffee Name'
                    defaultValue={props.name || ''}  
                    required />
                <label htmlFor='origin'>Origin</label>
                <input
                    id='origin'
                    type='text'
                    name='origin'
                    placeholder='Origin'
                    defaultValue={props.origin || ''} 
                    required />
                <label htmlFor='roast'>Roast</label>
                <input
                    id='roast'
                    type='text'
                    name='roast'
                    placeholder='Roast'
                    defaultValue={props.roast || ''} 
                    required />
                <label htmlFor='notes'>Notes</label>
                <input
                    id='notes'
                    type='text'
                    name='notes'
                    placeholder='Notes'
                    defaultValue={props.notes || ''}  
                    required />
                <label htmlFor='price'>Price</label>
                <input
                    id='price'
                    type='number'
                    name='price'
                    placeholder='Price'
                    step="0.01"
                    min='0'
                    defaultValue={props.price || ''}  
                    required />
                <label htmlFor='stock'>Stock</label>
                <input
                    id='stock'
                    type='number'
                    name='stock'
                    placeholder='Stock'
                    min='0'
                    defaultValue={props.stock || ''}  
                    required />
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