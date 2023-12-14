import cartReducer from './cartReducer';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

describe('cartReducer', () => {
    it('should add an item to the cart and increment total quantity', () => {
        const initialState = { items: {}, totalQuantity: 0 };
        const action = {
            type: ADD_TO_CART,
            payload: {
                productId: '1',
                productDetails: { name: 'Test Product' },
                quantity: 1,
            },
        };
        const expectedState = {
            items: {
                1: { productDetails: { name: 'Test Product' }, quantity: 1 },
            },
            totalQuantity: 1,
        };
        expect(cartReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle removing an item from cart and decrement total quantity', () => {
        const initialState = {
            items: {
                1: { productDetails: { name: 'Test Product' }, quantity: 1 },
            },
            totalQuantity: 1,
        };
        const action = {
            type: REMOVE_FROM_CART,
            payload: {
                productId: '1',
            },
        };
        const expectedState = {
            items: {},
            totalQuantity: 0,
        };
        expect(cartReducer(initialState, action)).toEqual(expectedState);
    });

    it('should not alter state when removing an item that is not in the cart', () => {
        const initialState = {
            items: {
                2: { productDetails: { name: 'Another Product' }, quantity: 1 },
            },
            totalQuantity: 1,
        };
        const action = {
            type: REMOVE_FROM_CART,
            payload: { productId: '1' },
        };
        expect(cartReducer(initialState, action)).toEqual(initialState);
    });

    it('should decrement quantity of an item in the cart', () => {
        const initialState = {
            items: {
                1: { productDetails: { name: 'Test Product' }, quantity: 2 },
            },
            totalQuantity: 2,
        };
        const action = {
            type: REMOVE_FROM_CART,
            payload: { productId: '1' },
        };
        const expectedState = {
            items: {
                1: { productDetails: { name: 'Test Product' }, quantity: 1 },
            },
            totalQuantity: 1,
        };
        expect(cartReducer(initialState, action)).toEqual(expectedState);
    });
});
