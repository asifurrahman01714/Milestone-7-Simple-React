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
        console.log(productKeys);
        const counts = Object.values(savedCart);
        console.log(counts);

        // const realProduct = fakeData.filter(pd => productKeys === pd.key);
        // console.log(realProduct);
    }, []);
    return (
        <div>
            <h1>This is review page</h1>
        </div>
    );
};

export default Review;