import React from 'react';

const Country = (props) => {
    
    console.log(props.country);
    const { name, capital, population, languages, flags } = props.country;
    return (
        <div>
            <img style={{height:'50px'}} src={flags.png} alt="" />
            <h1>Name :{name.common}</h1>
        </div>
    );
};

export default Country;