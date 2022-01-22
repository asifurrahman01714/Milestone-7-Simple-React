import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../App';

const CategoryDetails = () => {
    const machine = useContext(UserContext)
    return (
        <div>
            <h1>Category Details of :{machine}</h1>
        </div>
    );
};

export default CategoryDetails;