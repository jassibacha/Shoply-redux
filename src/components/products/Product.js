import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../../actions/cartActions';

function Product({ product }) {
    const { id, name, price, description, image_url } = product;

    const dispatch = useDispatch();

    // Function to handle the click event
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="col-sm-6 col-lg-4">
            <div className="card product my-3 w-100" style={{ width: '18rem' }}>
                <img
                    src={image_url}
                    className="card-img-top"
                    alt={name}
                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
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
                </div>
            </div>
        </div>
    );
}

export default Product;
