import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';


const Header = () => {
   const navigate = useNavigate();
  return (
    <header className="bg-blue-500 text-white p-5 flex justify-between">
      <h2 className="text-2xl font-bold"> E-Commerce Store</h2>
       <button
        onClick={() => navigate('/cart')}
        className="font-bold shadow-md p-2 text-white text-xl flex">
           <ShoppingCartIcon className="h-6 w-6 mr-2 " />
        
          Your Shopping Cart
     </button>
    </header>
  );
};

export default Header;
