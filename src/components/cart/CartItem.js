import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { addToCart, removeFromCart } from '../../actions/cartActions';

function CartItem({ item, productId }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ ...item.productDetails, id: productId }));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="row mb-3 align-items-center">
            <div className="col-md-2">
                <Link to={`/products/${productId}`}>
                    <img
                        src={item.productDetails.image_url}
                        alt={item.productDetails.name}
                        className="img-fluid"
                    />
                </Link>
            </div>
            <div className="col-md-3">
                <strong>
                    <Link to={`/products/${productId}`}>
                        {item.productDetails.name}
                    </Link>
                </strong>
            </div>
            <div className="col-md-2">
                ${item.productDetails.price.toFixed(2)}
            </div>
            <div className="col-md-2">Qty: {item.quantity}</div>
            <div className="col-md-3">
                <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={handleAddToCart}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={handleRemoveFromCart}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
