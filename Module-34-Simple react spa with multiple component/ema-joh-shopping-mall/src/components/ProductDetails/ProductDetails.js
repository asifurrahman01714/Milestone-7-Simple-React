import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData/products.JSON';

const ProductDetails = () => {
    // console.log(useParams());
    const {productId} = useParams();
    // const [products, setProducts] = React.useState([]);
    // useEffect(() => {
    //     fetch(fakeData)
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data);
    //     })
    // }, []);
    const product = fakeData.find(pd => pd.key === productId);
    // console.log(products);
    console.log(product);

    return (
        <div>
            <h1>Product Id :{product?.key}</h1>
            <h1>Product Name :{product?.name}</h1>
        </div>
    );
};

export default ProductDetails;