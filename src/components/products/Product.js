import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';

function Product({ product }) {
    const { id, name, price, description, image_url } = product;

    const dispatch = useDispatch();

    // Function to handle the click event
    const handleAddToCart = () => {
        console.log('Add to cart: ', id);
        dispatch(addToCart(product));
    };

    // Function to handle the remove click event
    const handleRemoveFromCart = () => {
        console.log('Remove from cart: ', id);
        dispatch(removeFromCart(id));
    };

    return (
        <div className="col-sm-6 col-lg-4">
            <div className="card product my-3 w-100" style={{ width: '18rem' }}>
                <Link to={`/products/${product.id}`}>
                    <img
                        src={image_url}
                        className="card-img-top"
                        alt={name}
                        style={{ maxHeight: '200px', objectFit: 'contain' }}
                    />
                </Link>

                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/products/${product.id}`}>{name}</Link>
                    </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> ${price.toFixed(2)}
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={handleAddToCart}
                    >
                        <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={handleRemoveFromCart}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
