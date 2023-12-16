import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsList from './products/ProductsList';
import ProductDetails from './products/ProductDetails';
import Cart from './cart/Cart';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
};

export default AppRoutes;
