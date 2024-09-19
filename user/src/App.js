import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ProductListing from './components/ProductListing';
import Navbar from './Navbar'; 

const App = () => {
    return (
        <Router>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<ProductListing />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
