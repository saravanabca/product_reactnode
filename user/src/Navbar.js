import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    
    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
            <div className='container'>
            <Link className="navbar-brand" to="/">Product Listing</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item cart-btn">
                        <Link className="nav-link" to="/cart">
                            Cart 
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
           
        </nav>
    );
};

export default Navbar;
