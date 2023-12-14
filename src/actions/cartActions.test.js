import { addToCart } from './cartActions';
import { ADD_TO_CART } from './actionTypes';

describe('cartActions', () => {
    it('should create an action to add a product to the cart', () => {
        const product = { id: '1', name: 'Test Product' };
        const expectedAction = {
            type: ADD_TO_CART,
            payload: {
                productId: '1',
                productDetails: product,
                quantity: 1,
            },
        };
        expect(addToCart(product)).toEqual(expectedAction);
    });
});
