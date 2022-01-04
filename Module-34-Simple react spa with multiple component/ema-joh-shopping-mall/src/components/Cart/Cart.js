import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, product) => total + product.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    const tax = (total / 10).toFixed(2); // If you toFixed, the number will be string
    const grandTotal = total + tax;

    return (
        <div>
            <h1>This is cart</h1>
            <h5>Order summery: {cart.length}</h5>
            <h2>Product Price:{total}</h2>
            <h2>Shipping Cost:</h2>
            <h2>10% Vat + Tax:{tax}</h2>
            <h2>Total:{grandTotal}</h2>
        </div>
    );
};

export default Cart;