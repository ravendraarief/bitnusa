'use client';
import React, { useState } from 'react';
import Logo from './Logo';
import Hamburger from 'hamburger-react';
import Menu from './Menu';

const MobileNav = () => {
  const [visible, setVisble] = useState(false);

  return (
    <div className="sticky top-0 z-50 md:hidden ">
      <div className="p-6 flex justify-between bg-white  bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <div>
          <Logo />
        </div>
        <Hamburger toggled={visible} toggle={setVisble} />
      </div>
      {visible ? <Menu /> : ''}
    </div>
  );
};

export default MobileNav;
