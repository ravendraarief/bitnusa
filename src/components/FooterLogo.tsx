import Image from 'next/image';
import React from 'react';
import logo from '@/assets/monogram.png';
import Link from 'next/link';

const FooterLogo = () => {
  return (
    <div className="w-36">
      <Link href="/">
        <Image
          src={logo}
          width={98}
          height={118}
          alt="bitnusa-logo"
          className="w-[100px] md:w-auto "
        />
      </Link>
    </div>
  );
};

export default FooterLogo;
