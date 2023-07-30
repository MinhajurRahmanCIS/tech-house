import React from 'react';
import './Product.css'
const Product = ( props) => {
    const { name, brand, category, price, img} = props.product;
    const handelAddToCart = props.handelAddToCart;

    return (
        <div className='product'>
            <img src={img} alt={name+'image'} />
            <div className='product-info'>
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <p>Price: <b>${price}</b></p>
            <button onClick={()=>handelAddToCart(props.product)}  className='btn-cart'>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;