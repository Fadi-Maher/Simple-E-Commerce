import React from 'react';
import { useCart } from './cartContext';
 


const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="mt-8 ">
      <h2 className="text-6xl font-bold p-5"> Your Shopping Cart</h2>
      <div className='flex flex-wrap gap-5 h-auto'>
        {cart.map(item => (
          <div key={item.id} className="   border mb-4 p-4 ">
            <img src={item.image} alt={item.name} className="w-20 h-20  " />
            <p className="font-bold p-1 ">{item.title}</p>
            <p className="text-gray-600 p-1 mb-2 font-bold">${item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700 mr-52 "
            >
              
                <div className='flex justify-center items-center gap-2'>
                 <i className="  fa-solid fa-trash"></i>
                 Delete
              </div>
            </button>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;