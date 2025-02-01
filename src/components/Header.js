import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="fixed w-full md:px-32 px-4 ">
      <div className="container mt-0 rounded-xl bg-blue-600 shadow-md z-10 p-4 text-white mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ShoppyGlobe</h1>
        <nav className="flex items-center space-x-4">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/cart">
            Cart ({cartItems.length})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
