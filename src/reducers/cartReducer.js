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
        case REMOVE_FROM_CART:
            //console.log('REMOVE_FROM_CART FIRING');
            const { productIdToRemove } = action.payload;

            // Check if the product is in the cart
            if (state[productIdToRemove]) {
                // Decrement the quantity
                const updatedQuantity = state[productIdToRemove].quantity - 1;

                if (updatedQuantity > 0) {
                    return {
                        ...state,
                        [productIdToRemove]: {
                            ...state[productIdToRemove],
                            quantity: updatedQuantity,
                        },
                    };
                } else {
                    // If the quantity reaches 0, remove the product from the cart
                    const { [productIdToRemove]: _, ...remainingItems } = state;
                    return remainingItems;
                }
            }
            return state; // If product not in cart, return current state

        default:
            return state;
    }
}

export default cartReducer;
