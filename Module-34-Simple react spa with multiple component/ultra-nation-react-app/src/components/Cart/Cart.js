import React from 'react';

const Cart = (props) => {
    const countries = props.countries;
    const newCart = props.newCart;
    const totalPopulation = newCart.reduce((totalPopulation,country) => totalPopulation + country.population,0);
    // console.log(cart);
    const countryAdded = newCart.map(country =>country.name.common);
    // console.log(countryAdded);
    return (
        <>
            <h1>Total countries: {countries.length}</h1>
            <h2>Add countries: {newCart.length}</h2>
            <h2>Total population: {totalPopulation}</h2>
            <h2>Country Added: {countryAdded.join(',')}</h2>
        </>
    );
};

export default Cart;