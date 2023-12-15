import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function ProductDetails() {
    const { id } = useParams();
    const product = useSelector((state) => state.products[id]);

    const allProducts = useSelector((state) => state.products);
    // Creates an array of products, excluding the current one, with each product including its ID.
    const otherProducts = Object.keys(allProducts)
        .filter((productId) => productId !== id)
        .map((productId) => {
            return { ...allProducts[productId], id: productId };
        })
        .slice(0, 3);

    const dispatch = useDispatch();

    // Function to handle the click event
    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, id })); // We need to manually pass id in here
    };

    // Function to handle the remove click event
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Product Image */}
                <div className="col-md-6">
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="img-fluid"
                    />
                </div>

                {/* Product Info */}
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>${product.price.toFixed(2)}</h3>
                    {/* Add to Cart Button */}
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
            <div className="row">
                {/* Other Products */}
                <h2 className="mt-5">Other Products</h2>
                <div className="row">
                    {otherProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
