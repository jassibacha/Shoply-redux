import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialCartState = {};

function cartReducer(state = initialCartState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId, productDetails, quantity } = action.payload;
            // Check if the product is already in the cart
            if (state[productId]) {
                // If so, increment the quantity
                return {
                    ...state,
                    [productId]: {
                        ...state[productId],
                        quantity: state[productId].quantity + quantity,
                    },
                };
            }
            // If the product is not in the cart, add it with the initial quantity
            return {
                ...state,
                [productId]: {
                    productDetails: productDetails,
                    quantity: quantity,
                },
            };
        default:
            return state;
    }
}

export default cartReducer;
