import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>Category  :{category}</h1>
            <CategoryDetails />
        </div>
    );
};

export default Categories;