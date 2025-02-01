import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div className="bg-white shadow-inner hover:shadow-2xl flex flex-col rounded-xl " onClick={()=>{navigate(`/product/${product.id}`)}}>
      
      <img className="w-full h-48 object-cover" src={product.images[0]} alt={product.title} />
      <div className='flex h-full flex-col p-4'>
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="mt-2 line-clamp-2">{product.description}</p>
        <p className="font-bold my-2">${product.price}</p>
        <button
            className="mt-auto bg-gray-300 shadow-inner hover:bg-blue-100 hover:shadow-2xl text-black px-4 py-2 rounded-xl"
            onClick={(e) => {
                e.stopPropagation(); 
                dispatch(addToCart(product)); 
              }}
        >
            Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
