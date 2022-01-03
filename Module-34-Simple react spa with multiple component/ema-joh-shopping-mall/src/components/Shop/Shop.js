import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import fakeData from '../../fakeData/products.JSON';
const Shop = () => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        fetch(fakeData)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);
    console.log(products.slice(0,10));
    return (
        <div className="shopContainer">
            <div className="productContainer">
                <ul>
                    {products.slice(0,10).map(product => <li>{product.name}</li>)}
                </ul>
            </div>
            <div className="cartContainer">
                <h1>This is cart</h1>
            </div>
            
        </div>
    );
};

export default Shop;