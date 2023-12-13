import { LOAD_PRODUCTS } from './actionTypes';

// Action creator for loading products
export const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    payload: products,
});
