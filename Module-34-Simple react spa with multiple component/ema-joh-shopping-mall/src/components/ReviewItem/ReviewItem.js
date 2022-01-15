import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, price} = props.product;
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Quantity: {quantity}</h1>
            <button>Remove</button>
        </div>
    );
};

export default ReviewItem;