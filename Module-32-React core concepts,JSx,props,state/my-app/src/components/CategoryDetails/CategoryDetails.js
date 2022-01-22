import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CountContext } from '../../App';

const CategoryDetails = () => {
    const count = useContext(CountContext)
    return (
        <div>
            <h1>Category Details of :{machine}</h1>
        </div>
    );
};

export default CategoryDetails;