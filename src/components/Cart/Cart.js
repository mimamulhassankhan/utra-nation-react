import React from 'react';

const Cart = (props) => {
    const totalPopulation = props.countryList.reduce((totalPopulation, desh) => totalPopulation + desh.population,0)

    return (
        <div>
            <h3>Total population of Selected Countries : {totalPopulation}</h3>
        </div>
    );
};

export default Cart;