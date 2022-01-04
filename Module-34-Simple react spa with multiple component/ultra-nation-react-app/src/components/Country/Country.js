import React from 'react';

const Country = (props) => {
    const countryStyle = {
        border: '2px solid black',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center'
    }
    console.log(props.country.capital?.[0]); // this is called optional chaining
    const { name, capital, population, languages, flags } = props.country;
    return (
        <div style={countryStyle}>
            <img style={{height:'50px'}} src={flags.png} alt="" />
            <h1>Name :{name.common}</h1>
            <h1>Capital :{capital?.[0]}</h1>
        </div>
    );
};

export default Country;