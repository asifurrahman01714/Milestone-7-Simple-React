import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    return (
        <div>
            <h1>This is cart</h1>
            <h5>Order summery: {cart.length}</h5>
            <h2>Product Price:{total}</h2>
            <h2>Shipping Cost:</h2>
            <h2>Tax:</h2>
            <h2>Total:</h2>
        </div>
    );
};

export default Cart;