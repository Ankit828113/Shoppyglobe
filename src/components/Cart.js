import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mt-16">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-xl font-bold text-center text-red-600">Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={() => dispatch(removeFromCart(item))} />
        ))
      )}
    </div>
  );
};

export default Cart;
