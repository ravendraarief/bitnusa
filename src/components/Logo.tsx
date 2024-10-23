import Image from 'next/image';
import React from 'react';
import logo from '@/assets/Bitnusa_White_logo.png';
const Logo = () => {
  return (
    <div>
      <Image
        src={logo}
        width={150}
        height={52.79}
        alt="bitnusa-logo"
        className="w-[100px] md:w-auto "
      />
    </div>
  );
};

export default Logo;
