import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <Link to='/' className="text-white text-lg font-bold">Home</Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to='/product' className="text-white">Products</Link>
          <Link to='/cart' className="text-white">Cart</Link>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
