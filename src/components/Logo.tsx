import Image from 'next/image';
import React from 'react';
import logo from '@/assets/Bitnusa_White_logo.png';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="w-36">
      <Link href="/">
        <Image
          src={logo}
          width={150}
          height={52.79}
          alt="bitnusa-logo"
          className="w-[100px] md:w-auto "
        />
      </Link>
    </div>
  );
};

export default Logo;
