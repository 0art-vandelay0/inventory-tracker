import React from 'react';
import { v4 } from 'uuid';
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
                    stock: 10,
                    id: v4()
                },
                {
                    name: 'Ethiopian',
                    origin: 'Ethiopia',
                    roast: 'Light',
                    notes: 'Blueberry, Lemon, and Jasmine',
                    price: 14.99,
                    stock: 10,
                    id: v4()
                },
                {
                    name: 'Sumatra',
                    origin: 'Indonesia',
                    roast: 'Dark',
                    notes: 'Cedar, Earth, and Tobacco',
                    price: 13.99,
                    stock: 10,
                    id: v4()
                }
            ]
        }
    }

    handleClick = () => {
        if (this.state.selectedCoffee != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedCoffee: null,
                editing: false
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    }

    handleAddingNewCoffeeToList = (newCoffee) => {
        const newCoffeeList = this.state.coffeeList.concat(newCoffee);
        this.setState({
            coffeeList: newCoffeeList,
            formVisibleOnPage: false
        });
    }

    handleChangingSelectedCoffee = (id) => {
        const selectedCoffee = this.state.coffeeList.filter(coffee => coffee.id === id)[0];
        this.setState({ selectedCoffee: selectedCoffee });
    }

    handleEditClick = () => {
        this.setState({ editing: true });
    }

    handleEditCoffeeFormSubmission = (coffeeToUpdate) => {
        const editedCoffeeList = this.state.coffeeList
            .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
            .concat(coffeeToUpdate);
        this.setState({
            coffeeList: editedCoffeeList,
            editing: false,
            selectedCoffee: null
        });
    }

    render () {
        let currentlyVisibleState = null;
        let buttonText = null;
    
        if (this.state.editing) {
            currentlyVisibleState = <EditCoffeeForm coffee={this.state.selectedCoffee} onEditCoffee={this.handleEditCoffeeFormSubmission} />
            buttonText = "Return to Coffee List";
        
        } else if (this.state.selectedCoffee != null) {
            currentlyVisibleState = <CoffeeDetail coffee={this.state.selectedCoffee} onClickingEdit={this.handleEditCoffeeFormSubmission}/>
            buttonText = "Return to Coffee List";

        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreate={this.handleAddingNewCoffeeToList} />
            buttonText = "Return to Coffee List";
    
        } else {
            currentlyVisibleState = <CoffeeList coffeeList={this.state.coffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee}/>;
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