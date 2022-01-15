import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    // console.log(useParams());
    const {productId} = useParams();
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        fetch(fakeData)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);
    const product = products.find(pd => pd.key === productId);
    // console.log(products);
    console.log(product);

    return (
        <div>
            <h1>Product Id :{product?.key}</h1>
            <Product pd ={product} showAddToCart={false}/>
        </div>
    );
};

export default ProductDetails;