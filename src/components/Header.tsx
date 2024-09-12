import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <nav className=" hidden lg:flex justify-between items-center sticky top-0 bg-white p-5 bg-opacity-60 backdrop-filter backdrop-blur-lg z-50">
      <Logo />
      <div className="flex gap-4">
        <p className="cursor-pointer hover:font-semibold">Home</p>
        <p className="cursor-pointer hover:font-semibold">About Us</p>
        <p className="cursor-pointer hover:font-semibold">Works With Us</p>
      </div>
      <div>
        <button>Reach Us</button>
      </div>
    </nav>
  );
};

export default Header;
