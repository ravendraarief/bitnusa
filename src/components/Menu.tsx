import React from 'react';
import iconHouse from '@/assets/house.png';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';

const Menu = () => {
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  });
  return (
    <div className="bg-white  bg-opacity-60 backdrop-filter backdrop-blur-lg absolute z-50 h-[600px] w-full pt- ">
      <div className="flex flex-col gap-3 ">
        <animated.div
          style={{ ...springs }}
          className="flex justify-between items-center px-5 py-6 rounded-lg mx-6 border-2 bg-slate-100 shadow-xl "
        >
          <p className="text-xl cursor-pointer">Home</p>
          <div>
            <Image src={iconHouse} width={30} height={30} alt="" />
          </div>
        </animated.div>
        <animated.div
          style={{ ...springs }}
          className="flex justify-between items-center px-5 py-6 rounded-lg mx-6 border-2 bg-slate-100 shadow-xl "
        >
          <p className="text-xl cursor-pointer">Our Services</p>
          <div>
            <Image src={iconHouse} width={30} height={30} alt="" />
          </div>
        </animated.div>
        <animated.div
          style={{ ...springs }}
          className="flex justify-between items-center px-5 py-6 rounded-lg mx-6 border-2 bg-slate-100 shadow-xl "
        >
          <p className="text-xl cursor-pointer">Reach Us</p>
          <div>
            <Image src={iconHouse} width={30} height={30} alt="" />
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Menu;
