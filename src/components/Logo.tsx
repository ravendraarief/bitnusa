import Image from 'next/image';
import React from 'react';
import logo from '@/assets/finallogo.png';
const Logo = () => {
  return (
    <div>
      <Image src={logo} width={100} height={52.79} alt="bitnusa-logo" />
    </div>
  );
};

export default Logo;
