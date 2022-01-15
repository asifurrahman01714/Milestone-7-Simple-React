import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import {getDatabaseCart} from '../../utilities/fakedb';
import fakeData from '../../fakeData';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        

       const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            console.log(product);
            return product;
        })
           
        console.log(cartProducts);
    }, []);
    return (
        <div>
            <h1>This is review page</h1>
        </div>
    );
};

export default Review;