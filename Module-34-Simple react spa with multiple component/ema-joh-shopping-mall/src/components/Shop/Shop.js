import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import fakeData from '../../fakeData/products.JSON';
import Product from '../Product/Product';
import './shop.css';
const Shop = () => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        fetch(fakeData)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);
    const handleAddProduct = (product) => {
        console.log('Product added', product);
    }
    // console.log(products.slice(0,10));
    return (
        <div className="shopContainer">
            <div className="productContainer">
                    {products.slice(0,10).map(product => <Product key={product.key} pd={product} handleAddProduct={handleAddProduct}/>)}
            </div>
            <div className="cartContainer">
                <h1>This is cart</h1>
            </div>
            
        </div>
    );
};

export default Shop;