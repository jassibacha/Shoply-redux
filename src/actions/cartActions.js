import { ADD_TO_CART } from './actionTypes';

// Action creator for cart interactions
export const addToCart = (product, quantity = 1) => ({
    type: ADD_TO_CART,
    payload: { 
        productId: product.id,
        productDetails: product, // Entire product object
        quantity 
    },
});
