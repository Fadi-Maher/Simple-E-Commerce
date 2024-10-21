import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "./cartContext";
import { FcRating } from "react-icons/fc";
 import { ToastContainer , toast } from "react-toastify";


const ProductDetails = () => {
  const [product, setProduct] = useState(null|| []);  
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    async function getProduct(id) {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);  
      } catch (e) {
        console.error(e);
      }
    }
    
    getProduct(id);  
  }, [id]); 
   

  const handleAddToCart = () => {
    addToCart(product);  
    toast.success(`${product.title} added to cart!)`, {
      position: "top-right",  
      autoClose: 3000,  
      hideProgressBar: true,  
    });
  };
   
  return (
    <div className="shadow-lg w-3/4 m-auto border-4  ">
      <h1 className="text-3xl font-bold text-center m-5 italic">Product Details</h1>
      <div key={product.id}>
        <img src={product.image} alt="single product" className="w-60 m-auto mt-5 mb-5" />
        <p className='font-bold w-3/4 m-auto mt-10 mb-5 italic' >{product.description}</p>
            <div className="flex justify-center items-center gap-2 text-2xl m-5 font-bold">
                {product.rating?.rate}
                <FcRating />
            </div>
            <p className="font-bold text-2xl  mt-5  mb-5 rounded text-center text-white bg-black p-2 w-3/4 m-auto" >Price {product.price} $ </p>

            <button
                className="bg-blue-500 text-white p-2 mt-10 text-2xl font-bold rounded block m-auto"
                onClick={handleAddToCart}  
                > Add to Cart
           </button>

        </div>

        <div className="w-10">
            <ToastContainer />
        </div>
    
    </div>
    
  );
};
  
  export default ProductDetails;