import React from 'react';

function Product({ product }) {
    const { name, price, description, image_url } = product;
    return (
        <div className="card product my-3" style={{ width: '18rem' }}>
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
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;
