import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, price} = props.product;
    const reviewItemStyle ={
        border: '1px solid gray',
        borderRadius: '5px',
        backgroundColor: '#f4f4f4',
        margin: '10px',
        padding: '10px'

    }
    return (
        <div style={reviewItemStyle}>
            <h3>Name: {name}</h3>
            <h4>Quantity: {quantity}</h4>
            <button>Remove</button>
        </div>
    );
};

export default ReviewItem;