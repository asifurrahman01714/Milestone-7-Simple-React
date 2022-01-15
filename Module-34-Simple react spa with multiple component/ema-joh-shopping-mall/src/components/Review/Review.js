import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import {getDatabaseCart} from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
       const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        console.log(cartProducts);
        setCart(cartProducts);
    }, []);
    return (
        <div>
            <h1>Cart items: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd} />)
            }
        </div>
    );
};

export default Review;