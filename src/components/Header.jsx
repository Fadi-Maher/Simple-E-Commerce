import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import { AiOutlineHome } from 'react-icons/ai';  
import { Link } from 'react-router-dom';

const Header = () => {
   const navigate = useNavigate();
  return (
    <header className="bg-blue-500 text-white p-5 flex justify-between">

       <div className='flex justify-center items-center gap-2'>
          <Link to="/" className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold  p-2 rounded transition duration-300">
              <AiOutlineHome className=" text-2xl" />  
          </Link>

          <h2 className="text-2xl font-bold"> E-Commerce Store</h2>
       </div>

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
