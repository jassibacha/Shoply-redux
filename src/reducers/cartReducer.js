import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialCartState = {
    items: {},
    totalQuantity: 0,
};

function cartReducer(state = initialCartState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId, productDetails, quantity } = action.payload;

            // Initialize a variable for the new item quantity
            let newItemQuantity;

            // Check if the product is already in the cart
            if (state.items[productId]) {
                // If it exists, increment the existing quantity
                newItemQuantity = state.items[productId].quantity + quantity;
            } else {
                // If it's new, use the provided quantity
                newItemQuantity = quantity;
            }

            // Return the updated state
            return {
                ...state,
                items: {
                    ...state.items,
                    [productId]: { productDetails, quantity: newItemQuantity },
                },
                totalQuantity: state.totalQuantity + quantity,
            };
        case REMOVE_FROM_CART:
            //console.log('REMOVE_FROM_CART FIRING');
            const { productIdToRemove } = action.payload;

            // Check if the product exists in the cart
            if (state.items[productIdToRemove]) {
                const updatedQuantity =
                    state.items[productIdToRemove].quantity - 1;

                // Check if the updated quantity is greater than zero
                if (updatedQuantity > 0) {
                    // If yes, update the quantity of the product
                    return {
                        ...state,
                        items: {
                            ...state.items,
                            [productIdToRemove]: {
                                ...state.items[productIdToRemove],
                                quantity: updatedQuantity,
                            },
                        },
                        totalQuantity: state.totalQuantity - 1,
                    };
                } else {
                    // If quantity falls to zero, remove the product from the cart
                    const { [productIdToRemove]: _, ...remainingItems } =
                        state.items;
                    return {
                        ...state,
                        items: remainingItems,
                        totalQuantity: state.totalQuantity - 1,
                    };
                }
            }

            // If product is not in the cart, just return the current state
            return state;

        default:
            return state;
    }
}

export default cartReducer;
