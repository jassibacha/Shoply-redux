import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // If you're using Font Awesome for icons
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // For the shopping cart icon

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Shoply
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            All Products
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} /> Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
