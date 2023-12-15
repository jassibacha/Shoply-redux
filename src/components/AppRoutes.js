import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsList from './products/ProductsList';
import ProductDetails from './products/ProductDetails';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
    );
};

export default AppRoutes;
