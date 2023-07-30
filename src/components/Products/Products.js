import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handelAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='products-container'>
            <div >
                <h2 className='title'>Our Top Selling Products</h2>
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handelAddToCart={handelAddToCart}
                        >
                        </Product>)
                    }
                </div>
            </div>

            <div className="cart-container">
                <Cart cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Products;