import React, { useState, useEffect } from 'react';
import Product from './Product';
import { fetchProducts } from './FetchProducts';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
   


  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching products');
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  
  const handleAddToCartToast = (productName) => {
      toast.success(`${productName} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
    });
  };

  if (loading) return <div className="text-center text-2xl mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link key={product.id} to={`/productList/${product.id}`}>
          <div className="hover:bg-gray-400 hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 rounded-lg">
             <Product product={product} onAddToCart={handleAddToCartToast} />
          </div>
        </Link>
      ))}

       <ToastContainer />
    </div>
  );
};

export default ProductList;
