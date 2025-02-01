import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) return <div className="text-red-500 ">Error fetching product: {error.message}</div>;
  if (!product) return <div className="text-black">Loading...</div>;

  return (
    <div className="container md:flex h-full  mx-auto p-4 md:px-32 py-24">
      
      <img className="w-full h-72 object-cover" src={product.images[0]} alt={product.title} />
      
      <div className='flex h-full flex-col'>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="mt-4 line-clamp-2">{product.description}</p>
      <p className="font-bold text-xl">${product.price}</p>
      <button
        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        onClick={(e) => {
          e.stopPropagation(); // Prevent navigating to the product detail page
          dispatch(addToCart(product)); // Dispatch the addToCart action
        }}
      >
        Add to Cart
      </button>
      </div>
    </div>
  );
};

export default ProductDetail;
