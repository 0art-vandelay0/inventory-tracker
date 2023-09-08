import React from 'react';


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

}

export default CoffeeControl;