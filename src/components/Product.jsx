import React from 'react';
import { useCart } from './cartContext';
import { useState } from 'react';

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
 const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-lg font-bold mb-2 h-11">{product.title}</h2>
      <p className="text-gray-600 mb-2 p-1 font-bold">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      <p className="text-sm mb-2 ">{product.description.slice(0, 100)}...</p>
    <button 
        onClick={handleAddToCart} 
        disabled={isAdded}
        className={`mt-2 p-2 ${isAdded ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold rounded`}
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;
