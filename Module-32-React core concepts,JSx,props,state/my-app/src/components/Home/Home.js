import React from 'react';
import Categories from '../Categories/Categories';
const Home = (props) => {
    // In order to use the Context in a child component, 
    // we need to access it using the useContext Hook.
    // First, include the useContext in the import statement:

    // const count = useContext(UserContext);
    return (
        <div style={{border: '1px solid black'}}>
            <h1>Count in home: {props.count}</h1>
            <Categories/>
        </div>
    );
};

export default Home;