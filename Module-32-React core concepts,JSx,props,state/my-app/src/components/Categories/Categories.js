import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = (props) => {
    return (
        <div>
            <h1>Category  </h1>
            <CategoryDetails count={props.count}/>
        </div>
    );
};

export default Categories;