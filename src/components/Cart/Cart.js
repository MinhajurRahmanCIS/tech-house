import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    
    let total = 0;
    let shipping = 0;
    for(const price of cart){
        total = total + price.price;
        shipping = shipping + price.shipping;
    }
    const tax = total*(2/100);
    const GrandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Product Summery</h2>
            <p> <b>Total Product: </b>{cart.length}</p>
            <p><b>Total Price:</b> ${total}</p>
            <p><b>Shipping Cost:</b> ${shipping}</p>
            <p><b>Tax:</b> ${tax.toFixed(2)}</p>
            <h4><b>Grand Total:</b> ${GrandTotal}</h4>
        </div>
    );
};

export default Cart;