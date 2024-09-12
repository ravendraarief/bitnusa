import React from 'react';

const Menu = () => {
  return (
    <div className="bg-white  bg-opacity-60 backdrop-filter backdrop-blur-lg absolute z-50 min-h-screen w-full pt-10">
      <div className="flex flex-col items-center gap-6">
        <p className="text-3xl cursor-pointer">Home</p>
        <p className="text-3xl cursor-pointer">about us</p>
        <p className="text-3xl cursor-pointer">work with us</p>
      </div>
    </div>
  );
};

export default Menu;
