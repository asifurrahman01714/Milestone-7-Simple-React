import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import {getDatabaseCart} from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.JSON';

const Review = () => {
    const [cart, setCart] = React.useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        // console.log(productKeys);
        // const counts = Object.values(savedCart);
        // console.log(counts);

    //    const cartProducts = productKeys.map(k => {
    //         const product = fakeData.find(pd => pd.key === k);
    //         product.quantity = savedCart[key];
    //         return product;
    //     });
        // console.log(cartProducts);
    }, []);
    return (
        <div>
            <h1>This is review page</h1>
        </div>
    );
};

export default Review;