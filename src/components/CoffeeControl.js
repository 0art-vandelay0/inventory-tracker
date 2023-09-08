import React from 'react';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';
import NewCoffeeForm from './NewCoffeeForm';
import EditCoffeeForm from './EditCoffeeForm';


class CoffeeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            selectedCoffee: null,
            editing: false,
            coffeeList: [
                {
                    name: 'Columbian',
                    origin: 'Columbia',
                    roast: 'Medium',
                    notes: 'Chocolate, Caramel, and Citrus',
                    price: 12.99,
                    stock: 10
                },
                {
                    name: 'Ethiopian',
                    origin: 'Ethiopia',
                    roast: 'Light',
                    notes: 'Blueberry, Lemon, and Jasmine',
                    price: 14.99,
                    stock: 10
                },
                {
                    name: 'Sumatra',
                    origin: 'Indonesia',
                    roast: 'Dark',
                    notes: 'Cedar, Earth, and Tobacco',
                    price: 13.99,
                    stock: 10
                }
            ]
        }
    }

    render () {
        let currentlyVisibleState = null;
        let buttonText = null;
    
        if (this.state.selectedCoffee != null) {
            currentlyVisibleState = <CoffeeDetail coffee={this.state.selectedCoffee} />
            buttonText = "Return to Coffee List";
    
        } else {
            currentlyVisibleState = <CoffeeList coffeeList={this.state.coffeeList} />;
            buttonText = "Add Coffee";
        }
    
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}


export default CoffeeControl;