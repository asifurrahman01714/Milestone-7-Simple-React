import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.pd);
    const {name, img, seller,price} = props.pd;
    return (
        <div className="singleProduct">
            <div className="singleProductImage">
                <img src={img} alt=""/>
            </div>
            <div className="singleProductContent">
                <h3><a href="#">{name}</a></h3>
                <span>by: {seller}</span>
                <h3>Price: ${price}</h3>
                <button><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;