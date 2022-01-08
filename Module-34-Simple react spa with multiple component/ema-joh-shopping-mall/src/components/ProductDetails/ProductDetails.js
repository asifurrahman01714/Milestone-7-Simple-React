import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ProductDetails = () => {
    console.log(useParams());
    const {productId} = useParams();
    return (
        <div>
            <h1>Product Id :{productId}</h1>
        </div>
    );
};

export default ProductDetails;