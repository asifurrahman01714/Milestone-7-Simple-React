import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, price,key} = props.product;
    const reviewItemStyle ={
        border: '1px solid gray',
        borderRadius: '5px',
        backgroundColor: '#f4f4f4',
        margin: '10px',
        padding: '10px'

    }
    const headingStyle={
        color: 'blue'
    }
    const buttonStyle ={
        backgroundColor: '#ff9800',
        padding: '5px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
    return (
        <div style={reviewItemStyle}>
            <h3 style={headingStyle}>Name: {name}</h3>
            <h4>Quantity: {quantity}</h4>
            <h5>Price: ${price}</h5>
            <button style={buttonStyle} onClick={()=> props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;