import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <nav className=" hidden lg:flex justify-between items-center sticky top-0 bg-[#161616] px-5 z-50">
      <Logo />
      <div className="flex space-x-4 items-center">
        <p className="text-white font-light font-neuemont">Our Services</p>
        <button className="bg-white text-black p-2 font-neuemont">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Header;
