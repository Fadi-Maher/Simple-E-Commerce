import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './components/cartContext';

const container = document.getElementById('root');
const root = createRoot(container);  
root.render(
   <CartProvider>
    <App />
   </CartProvider>
    
  
);
