import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartItem = ({ item, onRemove }) => {
    const navigate = useNavigate()
  return (
    <div className="flex bg-white shadow-md rounded-lg mb-4 mt-20" onClick={()=>{navigate(`/product/${item.id}`)}}>
      <img className="w-fit h-24 object-cover" src={item.images[0]} alt={item.title} />  
      <div className='flex flex-col w-full p-4'>
      <h3 className="text-lg font-bold">{item.title}</h3>
      <div className='flex mt-auto'>
      <p>Quantity: {item.quantity}</p>
      <button className="mt-auto ml-auto text-red-500 px-4 py-2 rounded" onClick={(e)=>{e.stopPropagation(); onRemove()}}>
        Remove
      </button>
      </div>
      </div>
    </div>
  );
};

export default CartItem;
