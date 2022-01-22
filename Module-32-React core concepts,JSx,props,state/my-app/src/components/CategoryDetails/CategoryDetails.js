import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CountContext } from '../../App';

const CategoryDetails = (props) => {
    const count = useContext(CountContext);
    const {name, category} = props.product;
    return (
        <div style={{border:'1px solid black'}}>
            {/* <h1>Category Details of :{count}</h1> */}
            <h1>Category Name: {name} of {category}</h1>
        </div>
    );
};

export default CategoryDetails;