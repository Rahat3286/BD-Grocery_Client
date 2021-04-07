import React from 'react';

const OrderedItem = (props) => {
    // console.log(props);
    const { description, price, quantity, title, weight, imgUrl, key, name } = props.product;

    return (
        <div className="container col-md-12 d-flex justify-content-between border-bottom ">
            <p className="col-md-3">{description}</p>
            <p className="col-md-3">{quantity}</p>
            <p className="col-md-3"> $ {price}</p>
            <button
                className="btn btn-danger col-md-3"
                onClick={() => props.removeProduct(key)}
            >Remove </button>
        </div>
    );
};

export default OrderedItem;