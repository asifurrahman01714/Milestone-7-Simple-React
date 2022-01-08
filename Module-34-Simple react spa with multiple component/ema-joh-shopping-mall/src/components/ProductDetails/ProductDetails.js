import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData/products.JSON';

const ProductDetails = () => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        fetch(fakeData)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);
    // console.log(products);
    // console.log(useParams());
    const {productId} = useParams();
    return (
        <div>
            <h1>Product Id :{productId}</h1>
        </div>
    );
};

export default ProductDetails;