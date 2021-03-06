import React from 'react';
import {useEffect, useState } from 'react/cjs/react.development';
import {getDatabaseCart} from '../../utilities/fakedb';
import {removeFromDatabaseCart} from '../../utilities/fakedb';
import {processOrder} from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import thankYouImage from '../../images/giphy.gif';
import { useHistory, Link } from "react-router-dom";

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    let history = useHistory();
    const handleProceedCheckOut = () => {
        /* Previous code
        console.log('place order');
        setCart([]);
        setOrderPlaced(true);
        processOrder();
        */
        history.push("/shipment")
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
                
                <div className="m-3">
                    { orderPlaced &&
                            <img src={thankYouImage} alt="" />
                    }
                </div>
                
            </div>
            <div className="col-md-4">
                <Cart cart={cart} review={true}>
                    <button style={buttonStyle} onClick={handleProceedCheckOut}>Proceed Checkout</button>
                    {/* <Link style={buttonStyle} to="/shipment">Proceed Checkout</Link> */}
                </Cart>
            </div>
        </div>
    );
};

export default Review;