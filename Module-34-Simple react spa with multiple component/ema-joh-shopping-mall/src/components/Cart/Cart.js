import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, product) => total + product.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    const fixedNumber = (number) => {
        return Number(number.toFixed(2)); // If you toFixed, the number will be string
    }
    const tax = fixedNumber(total * 0.1); 
    const grandTotal = fixedNumber(total + tax);

    let shipping = 0;
    if (total>200) {
        shipping = 0;
    } else if (total>100) {
        shipping = 4.99;
    } else if (total>0) {
        shipping = 12.99;
    }
    const buttonStyle ={
        backgroundColor: '#ffb547',
        padding: '5px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
    return (
        <div>
            <h1>This is cart</h1>
            <h5>Order summery: {cart.length}</h5>
            <h4>Product Price: {total}</h4>
            <h4>Shipping Cost: {fixedNumber(shipping)}</h4>
            <h4>10% Vat + Tax: {tax}</h4>
            <h4>Total:{grandTotal}</h4>
            <Link to="/review"><button style={buttonStyle}>Review Order</button></Link>
        </div>
    );
};

export default Cart;