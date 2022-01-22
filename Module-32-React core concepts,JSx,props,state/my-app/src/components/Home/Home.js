import React from 'react';
import { useState, createContext, useContext } from "react";
const Home = (props) => {
    // In order to use the Context in a child component, 
    // we need to access it using the useContext Hook.
    // First, include the useContext in the import statement:

    // const count = useContext(UserContext);
    return (
        <div>
            <h1>Count in home: {props.count}</h1>
        </div>
    );
};

export default Home;