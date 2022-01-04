import React from 'react';

const Cart = (props) => {
    return (
        <>
            <h1>Total countries: {props.countries.length}</h1>
            <h2>Add countries: {props.newCart.length}</h2>
            <h2>Total population: {props.totalPopulation}</h2>
            <h2>Country Added: {props.countryAdded.join(',')}</h2>
        </>
    );
};

export default Cart;