import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import {getDatabaseCart} from '../../utilities/fakedb';
import {removeFromDatabaseCart} from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const handlePlaceOrder = () => {
        console.log('place order');
        
    }
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
    const removeProduct = (productKey) => {
        console.log("Remove product", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    const buttonStyle ={
        backgroundColor: '#ffb547',
        padding: '5px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
    return (
        <div className="row">
            <div className="col-md-8">
                {
                    cart.map(pd => <ReviewItem key={pd.key} product={pd} removeProduct={removeProduct}/>)
                }
            </div>
            <div className="col-md-4">
                <Cart cart={cart} review={true}>
                    <Link to=""><button style={buttonStyle} onClick={handlePlaceOrder}>Place Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;