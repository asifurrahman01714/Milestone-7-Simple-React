import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';
import {addToDatabaseCart} from '../../utilities/fakedb';
import {getDatabaseCart} from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    useEffect(() => {
       setProducts(fakeData);
    }, []);
    // console.log(products);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        // console.log(productKeys);
        const previousCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd=>pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product
        })
        // console.log(previousCart);
        setCart(previousCart);
    }, []);
    console.log(cart);
    const handleAddProduct =(product) =>{
        // console.log('product added');
        // console.log(product);
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            const count = sameProduct.quantity + 1;
            sameProduct.quantity =  count ;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    // console.log(cart);
    // console.log(products.slice(0,10));
    const buttonStyle ={
        backgroundColor: '#ffb547',
        padding: '5px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
    return (
        <div className="shopContainer">
            <div className="productContainer">
                    {products.slice(0,10).map(product => <Product key={product.key} pd={product} handleAddProduct={handleAddProduct}/>)}
            </div>
            <div className="cartContainer">
                <Cart cart={cart}>
                    <Link to="/review"><button style={buttonStyle}>Review Order</button></Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;