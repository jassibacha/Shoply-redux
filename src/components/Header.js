import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <nav className="navbar navbar-expand navbar-light bg-light px-3">
            <Link className="navbar-brand" to="/">
                Shoply
            </Link>

            <div className="d-flex justify-content-center w-100">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Shop
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <button className="btn nav-link d-flex align-items-center">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        <span className="badge bg-secondary ms-1">
                            {cart.totalQuantity}
                        </span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
