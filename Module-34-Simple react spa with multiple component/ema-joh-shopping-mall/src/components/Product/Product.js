import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.showAddToCart);
    // console.log(props.pd);
    // const {key, name, img, seller,price} = props.pd;
    const key = props.pd?.key;
    const name = props.pd?.name;
    const img = props.pd?.img;
    const seller = props.pd?.seller;
    const price = props.pd?.price;
    // console.log(props.pd)
    return (
        <div className="singleProduct">
            <div className="singleProductImage">
                <img src={img} alt=""/>
            </div>
            <div className="singleProductContent">
                {/* <h3><Link to={"/product/"+key}>{name}</Link> </h3> */}
                <h3><Link to={`/product/${key}`}>{name}</Link> </h3>
                <span>by: {seller}</span>
                <h3>Price: ${price}</h3>
                {props.showAddToCart !== false && <button onClick={()=>{props.handleAddProduct(props.pd)}}><FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;