import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import OrderedItem from '../OrderedItem/OrderedItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    const handleProceedCheckout = () => {
        history.push('/checkout');
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt="" />
    }
    return (
        <div className="container">
            <h1 style={{ color: 'rgb(54,57,88)' }} className="col-md-12 mb-5">Checkout</h1>
                <div className="col-md-12 d-flex justify-content-between border-bottom">
                <div className="col-md-3"><p><b>Description</b></p></div>
                <div className="col-md-3"><p><b>Quantity</b></p></div>
                <div className="col-md-3"><p><b>Price</b></p></div>
                <div className="col-md-3"><FontAwesomeIcon icon={faTrash} /></div>
                </div>
            {
                cart.map(pd => <OrderedItem
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}></OrderedItem>)
            }
            <div className="text-right col-md-12">
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className="btn btn-success mt-5  ">Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;

{/* <div className="col-md-12 d-flex justify-content-between border-bottom">
    <div className="col-md-3"><h4>Description</h4></div>
    <div className="col-md-3"><h4>Quantity</h4></div>
    <div className="col-md-3"><h4>Price</h4></div>
    <div className="col-md-3"><FontAwesomeIcon icon={faTrash} /></div>
</div> */}