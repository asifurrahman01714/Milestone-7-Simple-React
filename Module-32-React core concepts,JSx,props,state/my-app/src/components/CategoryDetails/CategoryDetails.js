import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CountContext } from '../../App';

const CategoryDetails = (props) => {
    const count = useContext(CountContext);
    const {name, category} = props.product;
    return (
        <div>
            <h1>Category Details of :{count}</h1>
        </div>
    );
};

export default CategoryDetails;