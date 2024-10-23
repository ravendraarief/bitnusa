import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import grid from '@/assets/Grid.png';
import phone from '@/assets/iPhone15Plus.png';
import iconArrow from '@/assets/icon-arrow.png';
import workPlace from '@/assets/workplaceimage.png';
import ecommerceProduct from '@/assets/imageProduct.png';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Header />
      <MobileNav />
      <main className="lg:min-h-screen">
        <section className="px-4 pt-8 lg:px-16 lg:py-8">
          <h1 className=" lg:text-[80px] xl:text-[100px] 2xl:text-[120px] text-white uppercase tracking-tight leading-none">
            Leading <br /> Digital Solutions <br />
            for Your Business
          </h1>
          <div className="grid lg:grid-cols-3 grid-rows-1 gap-9 lg:pt-20 ">
            <div className="pt-10 lg:pt-0 ">
              <svg
                width="178"
                height="178"
                viewBox="0 0 178 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="89"
                  height="89"
                  fill="#4E9FF2"
                  fill-opacity="0.57"
                />
                <rect
                  x="89"
                  y="89"
                  width="89"
                  height="89"
                  fill="#4E9FF2"
                  fill-opacity="0.35"
                />
              </svg>
            </div>
            <div className="col-span-2 lg:pl-16">
              <div className="flex text-white  pb-20 text-[20px] cursor-pointer ">
                <Link href="#introduction" className="border-b-2">
                  Find out more
                </Link>
                <span className="pl-4 animate-bounce">
                  <svg
                    width="16"
                    height="30"
                    viewBox="0 0 16 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.29289 34.7071C7.68342 35.0976 8.31658 35.0976 8.70711 34.7071L15.0711 28.3431C15.4616 27.9526 15.4616 27.3195 15.0711 26.9289C14.6805 26.5384 14.0474 26.5384 13.6569 26.9289L8 32.5858L2.34315 26.9289C1.95262 26.5384 1.31946 26.5384 0.928933 26.9289C0.538409 27.3195 0.538409 27.9526 0.928933 28.3431L7.29289 34.7071ZM7 4.37114e-08L7 34L9 34L9 -4.37114e-08L7 4.37114e-08Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div id="introduction" className="pt-28 pb-28">
                <p className="text-white text-[32px]   pb-4 leading-9">
                  Your website isn’t just a tool; it’s your connection to <br />
                  the world.{' '}
                </p>
                <p className="text-white text-[24px]  ">
                  With a blend of creativity and user-first design, powered by
                  cutting-edge technology, we help businesses turn ideas into
                  reality. From e-commerce platforms to corporate sites and
                  product pages, we deliver seamless, high-performing
                  experiences that drive real results.{' '}
                </p>
              </div>
              <div className="grid grid-rows-2 gap-24 ">
                <div className="grid grid-cols-2 lg:grid-cols-3 border-b-2 pb-8">
                  <div>
                    <p className="text-white text-[24px] font-worksans uppercase">
                      Agile and <br /> Efficient
                    </p>
                  </div>
                  <div className="flex justify-center text-center center ">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_236_12"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="35"
                        height="35"
                      >
                        <rect width="34.4542" height="34.4542" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_236_12)">
                        <path
                          d="M17.227 23.6872C19.0215 23.6872 20.5468 23.0591 21.8029 21.803C23.0591 20.5469 23.6872 19.0216 23.6872 17.2271C23.6872 15.4326 23.0591 13.9073 21.8029 12.6511C20.5468 11.395 19.0215 10.7669 17.227 10.7669C15.4325 10.7669 13.9072 11.395 12.6511 12.6511C11.3949 13.9073 10.7668 15.4326 10.7668 17.2271C10.7668 19.0216 11.3949 20.5469 12.6511 21.803C13.9072 23.0591 15.4325 23.6872 17.227 23.6872ZM17.227 18.6627C16.8203 18.6627 16.4793 18.5251 16.2041 18.2499C15.929 17.9748 15.7914 17.6338 15.7914 17.2271C15.7914 16.8203 15.929 16.4794 16.2041 16.2042C16.4793 15.929 16.8203 15.7915 17.227 15.7915C17.6338 15.7915 17.9747 15.929 18.2499 16.2042C18.525 16.4794 18.6626 16.8203 18.6626 17.2271C18.6626 17.6338 18.525 17.9748 18.2499 18.2499C17.9747 18.5251 17.6338 18.6627 17.227 18.6627ZM17.227 31.583C15.2411 31.583 13.3748 31.2061 11.6282 30.4524C9.88156 29.6988 8.36223 28.6759 7.0702 27.3839C5.77816 26.0918 4.75531 24.5725 4.00162 22.8259C3.24794 21.0792 2.87109 19.213 2.87109 17.2271C2.87109 15.2412 3.24794 13.3749 4.00162 11.6283C4.75531 9.88162 5.77816 8.36229 7.0702 7.07026C8.36223 5.77823 9.88156 4.75537 11.6282 4.00168C13.3748 3.248 15.2411 2.87115 17.227 2.87115C19.2129 2.87115 21.0792 3.248 22.8258 4.00168C24.5724 4.75537 26.0918 5.77823 27.3838 7.07026C28.6758 8.36229 29.6987 9.88162 30.4524 11.6283C31.2061 13.3749 31.5829 15.2412 31.5829 17.2271C31.5829 19.213 31.2061 21.0792 30.4524 22.8259C29.6987 24.5725 28.6758 26.0918 27.3838 27.3839C26.0918 28.6759 24.5724 29.6988 22.8258 30.4524C21.0792 31.2061 19.2129 31.583 17.227 31.583ZM17.227 28.7118C20.4332 28.7118 23.1488 27.5992 25.374 25.374C27.5991 23.1489 28.7117 20.4332 28.7117 17.2271C28.7117 14.0209 27.5991 11.3053 25.374 9.08009C23.1488 6.85492 20.4332 5.74234 17.227 5.74234C14.0208 5.74234 11.3052 6.85492 9.08002 9.08009C6.85486 11.3053 5.74228 14.0209 5.74228 17.2271C5.74228 20.4332 6.85486 23.1489 9.08002 25.374C11.3052 27.5992 14.0208 28.7118 17.227 28.7118Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <p className="text-white text-[20px] text-opacity-75">
                      In a fast-paced world, you need a team that moves just as
                      quickly. Our agile methodology keeps projects on track,
                      with a focus on collaboration and rapid iteration to
                      deliver results faster.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 border-b-2">
                  <div>
                    <p className="text-white text-[24px] font-worksans uppercase">
                      Innovation at <br /> the Core
                    </p>
                  </div>
                  <div className="flex justify-center text-center center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_236_19"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <rect
                          y="0.18396"
                          width="29.0696"
                          height="29.0696"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_236_19)">
                        <path
                          d="M7.75188 21.9863L6.05615 20.2906L17.684 8.66276L7.26738 8.66276L7.26738 6.2403L21.8022 6.24029L21.8022 20.7751L19.3797 20.7751L19.3797 10.3585L7.75188 21.9863Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <p className="text-white text-[20px] text-opacity-75">
                      As a new agency, we’re driven by fresh ideas and new
                      perspectives. We stay on the pulse of the latest
                      technology and design trends, so your website is always a
                      step ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ourservices" className="bg-[#131313] h-[450px] flex">
          <div className="flex flex-col justify-center w-full  justify-items-center space-y-10">
            <p className="text-white text-2xl w-full text-center text-[38px] ">
              Our Services
            </p>
            <div className="flex space-x-32 justify-center">
              <div className="flex flex-col space-y-4">
                <p className="text-white font-worksans uppercase">
                  Custom Website Development
                </p>
                <p className="text-white font-worksans uppercase">
                  E-Commerce Solutions
                </p>
                <p className="text-white font-worksans uppercase">
                  Mobile-Friendly & Responsive Design
                </p>
                <p className="text-white font-worksans uppercase">
                  Website Maintenance & Support
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-white font-worksans uppercase">
                  Web Hosting & Domain Management
                </p>
                <p className="text-white font-worksans uppercase">
                  Website Redesign & Revamp
                </p>
                <p className="text-white font-worksans uppercase">
                  Third-Party Integrations
                </p>
                <p className="text-white font-worksans uppercase">
                  Performance Optimization
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
