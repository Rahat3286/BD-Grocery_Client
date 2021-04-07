import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const { title, description, weight, imgUrl, price, key } = props.product;
    // const { img, name, seller, stock, tile, description, weight, imgUrl, price, key} = props.product;
    return (
        <div className="col-md-4 d-flex justify-content-center mb-3">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={imgUrl} alt="" />
                <div className="card-body d-flex justify-content-around">
                    <p style={{ fontWeight: 'bold' }}>{description} - {weight}</p>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <p style={{ fontWeight: 'bold' }}>$ {price}</p>
                    {
                        props.showAddToCart === true && <Link to="/order">
                            <button
                                className="btn btn-success"
                                onClick={() => props.handleAddProduct(props.product)}
                            >
                                <FontAwesomeIcon icon={faShoppingCart} /> BUY NOW
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;

{/* <div className="product">
    <div>
        <img src={imgUrl} alt="" />
    </div>
    <div>
        <h4 className="product-name"><Link to={"/product/" + key}>{title}</Link></h4>
        <br />
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Weight: {weight}</p>
        {props.showAddToCart === true && <Link to="/review">
            <button
                className="btn btn-success"
                onClick={() => props.handleAddProduct(props.product)}
            >
                <FontAwesomeIcon icon={faShoppingCart} /> BUY NOW
                    </button>
        </Link>}
    </div>
</div> */}



