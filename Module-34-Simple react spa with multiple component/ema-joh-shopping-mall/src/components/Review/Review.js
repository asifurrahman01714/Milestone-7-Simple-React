import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import {getDb} from '../../utilities/fakedb';
const Review = () => {
    const [cart, setCart] = React.useState([]);
    useEffect(() => {
        const savedCart = getDb();
        console.log(savedCart);
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);
    return (
        <div>
            <h1>This is review page</h1>
        </div>
    );
};

export default Review;