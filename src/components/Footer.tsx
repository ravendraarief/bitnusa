import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10 font-semibold">
      <Logo />
      <div className="flex flex-col pt-10 gap-6 items-center">
        <p className="text-xl font-bold">Reach Us</p>
        <div className=" flex gap-4">
          <div className="w-10 h-10 bg-slate-400 rounded-lg cursor-pointer"></div>
          <div className="w-10 h-10 bg-slate-400 rounded-lg cursor-pointer"></div>
          <div className="w-10 h-10 bg-slate-400 rounded-lg cursor-pointer"></div>
          <div className="w-10 h-10 bg-slate-400 rounded-lg cursor-pointer"></div>
        </div>
        <div>
          <p className="font-normal">© 2024 Bitnusa. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;