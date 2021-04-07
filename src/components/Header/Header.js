import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import brandImage from '../../images/bd grocery brand image.jpeg'



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="container navbar navbar-expand-lg navbar-light bg-transparent mb-5">
            <Link to="/home" className="navbar-brand"> <img src={brandImage} alt="" width="30" height="30" class="d-inline-block align-text-top" /> <span style={{fontSize:'0.6rem'}}>BD GROCERY</span> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/order" className="nav-link">Order</Link></li>
                    <li className="nav-item"><Link to="/admin" className="nav-link">Admin</Link></li>
                    <li className="nav-item"><Link to="/login" className="nav-link">{
                        
                        loggedInUser.isSignedIn ? <img style={{ height: '20px', width: '20px' }} src={loggedInUser.photo} alt="" /> :
                            <span className="btn btn-primary">Log In</span>
                        
                    }</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
