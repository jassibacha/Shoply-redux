import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

const mockStore = configureMockStore();
const store = mockStore({
    products: {
        '47314fa1-ae56-4eae-80be-af6691145951': {
            name: 'tv',
            price: 219.99,
            description:
                "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
            image_url:
                'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue',
        },
    },
    cart: {
        items: {
            '47314fa1-ae56-4eae-80be-af6691145951': {
                productDetails: {
                    name: 'tv',
                    price: 219.99,
                    description:
                        "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
                    image_url:
                        'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue',
                },
                quantity: 1,
            },
        },
        totalQuantity: 1,
    },
});

describe('App Component', () => {
    it('renders without crashing and displays Shoply text', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        // Check if "Shoply" is present on the screen
        const shoplyText = screen.getByText(/Shoply/i);
        expect(shoplyText).toBeInTheDocument();
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('displays a message when there are no products', () => {
        const emptyStore = mockStore({
            products: {},
            cart: { items: {}, totalQuantity: 0 },
        });

        render(
            <Provider store={emptyStore}>
                <App />
            </Provider>
        );

        const noProductsMessage = screen.getByText(/No products available/i);
        expect(noProductsMessage).toBeInTheDocument();
    });

    it('renders products when available in the store', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const product = screen.getAllByText(/tv/i);
        expect(product.length).toBeGreaterThan(0);
    });

    // ... other tests ...
});
