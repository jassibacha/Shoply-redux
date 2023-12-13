import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

// Action creator for cart interactions
export const addToCart = (product, quantity = 1) => ({
    type: ADD_TO_CART,
    payload: {
        productId: product.id,
        productDetails: product, // Entire product object
        quantity,
    },
});

export const removeFromCart = (productIdToRemove) => ({
    type: REMOVE_FROM_CART,
    payload: { productIdToRemove },
});
