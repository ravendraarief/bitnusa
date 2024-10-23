import React from 'react';
import Logo from './Logo';
import linkendIcon from '@/assets/7.png';
import Image from 'next/image';
import githubIcon from '@/assets/33.png';
import emailIcon from '@/assets/19.png';
import mapsIcon from '@/assets/20.png';
import FooterLogo from './FooterLogo';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="flex px-32 py-14 justify-between items-center">
        <div className="flex items-center ">
          <FooterLogo />
          <div>
            <p className="text-white pb-8">Connect with us</p>
            <p className="text-white flex items-center pb-2 font-worksansbook text-[16px]">
              {' '}
              <span className="pr-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_221_37)">
                    <path
                      d="M16.6666 3.33337H3.33329C2.41246 3.33337 1.67496 4.07921 1.67496 5.00004L1.66663 15C1.66663 15.9209 2.41246 16.6667 3.33329 16.6667H16.6666C17.5875 16.6667 18.3333 15.9209 18.3333 15V5.00004C18.3333 4.07921 17.5875 3.33337 16.6666 3.33337ZM16.6666 6.66671L9.99996 10.8334L3.33329 6.66671V5.00004L9.99996 9.16671L16.6666 5.00004V6.66671Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_221_37">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              hello@bitnusa.com
            </p>
            <p className="text-white flex items-center font-worksansbook text-[16px]">
              <span className="pr-4">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_221_33)">
                    <path
                      d="M14.5722 10.6L11.2909 9.19374C11.1507 9.134 10.995 9.12141 10.847 9.15787C10.6991 9.19433 10.567 9.27786 10.4706 9.39589L9.01744 11.1713C6.73686 10.096 4.90151 8.26069 3.82624 5.98011L5.60166 4.52696C5.71993 4.43077 5.80363 4.29867 5.84011 4.15065C5.87659 4.00263 5.86384 3.84676 5.80381 3.70663L4.39754 0.425328C4.33165 0.274273 4.21512 0.150942 4.06804 0.0766005C3.92097 0.00225935 3.75256 -0.0184321 3.59186 0.018094L0.544931 0.721231C0.389998 0.757009 0.251766 0.844245 0.152796 0.968701C0.0538267 1.09316 -3.56904e-05 1.24749 1.77431e-08 1.4065C1.77431e-08 8.92128 6.09093 15.0005 13.594 15.0005C13.753 15.0006 13.9074 14.9468 14.032 14.8478C14.1565 14.7488 14.2438 14.6105 14.2795 14.4556L14.9827 11.4086C15.019 11.2471 14.9978 11.0781 14.9229 10.9305C14.848 10.7829 14.724 10.666 14.5722 10.6Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_221_33">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              +61 420 266 478
            </p>
          </div>
        </div>
        <div>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2302 18V9.9H13.826L14.25 6.3H11.2302V4.54658C11.2302 3.61958 11.2552 2.7 12.6226 2.7H14.0075V0.126123C14.0075 0.087423 12.8179 0 11.6144 0C9.10099 0 7.52723 1.49148 7.52723 4.23018V6.3H4.75V9.9H7.52723V18H11.2302Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex float-right px-10 pb-6 ">
        <p className="text-white font-worksansbook pr-8">
          <Link href="#">Privacy Policy</Link> |{' '}
          <Link href="#">Terms of Use</Link>
        </p>
        <p className="text-white font-worksansbook">©2024 Bitnusa 2024</p>
      </div>
    </>
  );
};

export default Footer;
