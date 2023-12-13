import React from 'react';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';

function ProductsList() {
    const products = useSelector((state) => state.products);

    console.log('ProductList products: ', products);
    const dispatch = useDispatch();

    // Check if the products object is empty
    if (Object.keys(products).length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div className="ProductsList row">
            {/*
             * Uses Object.keys(products) to extract an array of product IDs from the products object.
             * This is necessary because the products are stored as an object, and we need an array
             * to use the map function for iteration.
             *
             * Maps over the array of product IDs. For each product ID, the corresponding product details
             * are accessed from the products object. */}
            {Object.keys(products).map((productId) => {
                const product = products[productId];
                return <Product key={productId} product={product} />;
            })}
        </div>
    );
}

export default ProductsList;
