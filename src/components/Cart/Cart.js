import React from 'react';
import './Cart.css'
import { deleteShoppingCart } from '../../utility/LocalStorage';
const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price* product.quantity ;
        quantity = quantity + product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*(10 / 100);
    const grandTotal = totalPrice + totalShipping + tax;
    const clearFromCart = () => deleteShoppingCart();

    return (
        <div className='cart'>
        <h2>Order Summery</h2>
        <p>Select Item: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h4>Grand Total: ${parseInt(grandTotal)}</h4>
        <div className='btn-payment-container'>
        <button onClick={clearFromCart} className='btn-clear'>Clear Cart</button>
        </div>
    </div>
    );
};

export default Cart;