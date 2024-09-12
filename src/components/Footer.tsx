import React from 'react';
import Logo from './Logo';
import linkendIcon from '@/assets/7.png';
import Image from 'next/image';
import githubIcon from '@/assets/33.png';
import emailIcon from '@/assets/19.png';
import mapsIcon from '@/assets/20.png';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10 font-semibold">
      <Logo />
      <div className="flex flex-col pt-10 gap-6 items-center">
        <p className="text-xl font-bold">Reach Us</p>
        <div className=" flex gap-4">
          <div className="w-10 h-10 bg-slate-400 rounded-lg cursor-pointer flex justify-center items-center">
            <Image src={linkendIcon} width={30} height={30} alt="" />
          </div>
          <div className="w-10 h-10 bg-slate-400 rounded-lg cursor-pointer flex justify-center items-center">
            <Image src={githubIcon} width={30} height={30} alt="" />
          </div>
          <div className="w-10 h-10 bg-slate-400 rounded-lg cursor-pointer flex justify-center items-center">
            <Image src={emailIcon} width={30} height={30} alt="" />
          </div>
          <div className="w-10 h-10 bg-slate-400 rounded-lg cursor-pointer flex justify-center items-center">
            {' '}
            <Image src={mapsIcon} width={20} height={20} alt="" />
          </div>
        </div>
        <div>
          <p className="font-normal">© 2024 Bitnusa. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
