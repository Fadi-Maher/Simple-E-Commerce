import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
     <Router>
    <div>
      <Header />
      <div>
        <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
};

export default App;
