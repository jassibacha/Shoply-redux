import productsData from '../data.json'; 

const initialProductsState = {
    products: productsData.products // Imported from data.json
};

function productsReducer(state = initialProductsState, action) {
    switch (action.type) {
        // Handle actions related to products
        default:
            return state;
    }
}

export default productsReducer;
