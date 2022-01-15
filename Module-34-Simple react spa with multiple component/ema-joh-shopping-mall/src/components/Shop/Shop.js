import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';
import {addToDatabaseCart} from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    useEffect(() => {
        fetch(fakeData)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);
    const handleAddProduct = (product) => {
        // console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    
    // console.log(products.slice(0,10));
    return (
        <div className="shopContainer">
            <div className="productContainer">
                    {products.slice(0,10).map(product => <Product key={product.key} pd={product} handleAddProduct={handleAddProduct}/>)}
            </div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;