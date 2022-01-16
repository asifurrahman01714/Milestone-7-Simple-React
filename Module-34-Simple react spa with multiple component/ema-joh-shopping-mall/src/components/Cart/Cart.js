import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, product) => total + product.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
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
    let cartStyle;
    if (props.review === true) {
        cartStyle = {
            border: '1px solid gray',
            borderRadius: '5px',
            backgroundColor: '#f4f4f4',
            margin: '10px',
            padding: '10px'
        }
    } else {
        cartStyle = {
            padding: '10px'
        }
    }
    return (
        <div style={cartStyle}>
            <h3 className='mt-2 fw-bold'>Order summery: {cart.length}</h3>
            <br />
            <h4>Product Price: {fixedNumber(total)}</h4>
            <h4>Shipping Cost: {fixedNumber(shipping)}</h4>
            <h4>10% Vat + Tax: {tax}</h4>
            <h4>Total:{grandTotal}</h4>
            <Link to="/review"><button style={buttonStyle}>Review Order</button></Link>
        </div>
    );
};

export default Cart;