import React from 'react';


const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        // console.log(product.price , product.quantity);
        total = total + product.price * product.quantity || 1;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            {
                props.children
            }
        </div>
    );
};

export default Cart;