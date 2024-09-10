import React from 'react';
import logo from '../assets/finallogo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <Image src={logo} width={170} height={52.79} alt="bitnusa-logo" />
      </div>
      <div className="flex gap-4">
        <p className="cursor-pointer hover:font-semibold">Home</p>
        <p className="cursor-pointer hover:font-semibold">About Us</p>
        <p className="cursor-pointer hover:font-semibold">Works With Us</p>
      </div>
      <div></div>
    </nav>
  );
};

export default Header;
