import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './components/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Header />
            <div className="container mt-4">
                <Routes />
            </div>
        </Router>
    );
}

export default App;
