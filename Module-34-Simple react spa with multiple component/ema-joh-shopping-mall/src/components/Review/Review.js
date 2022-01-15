import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import {getDatabaseCart} from '../../utilities/fakedb';
const Review = () => {
    const [cart, setCart] = React.useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        console.log(savedCart);
        
    }, []);
    return (
        <div>
            <h1>This is review page</h1>
        </div>
    );
};

export default Review;