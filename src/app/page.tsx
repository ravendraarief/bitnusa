import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import grid from '@/assets/Grid.png';
import phone from '@/assets/iPhone15Plus.png';
import iconArrow from '@/assets/icon-arrow.png';
import workPlace from '@/assets/workplaceimage.png';
import ecommerceProduct from '@/assets/imageProduct.png';
import MobileNav from '@/components/MobileNav';
export default function Home() {
  return (
    <>
      <Header />
      <MobileNav />
      <main className="">
        <section className="relative lg:min-h-screen">
          <div className="relative">
            <div className=" hidden lg:flex  lg:absolute lg:top-0 lg:z-10">
              <Image src={grid} width={450} height={200} alt="grid" />
            </div>
            <div className="z-20 flex flex-col  justify-center  mb-20 mt-10 lg:w-[400px] lg:absolute lg:top-20 lg:left-16">
              <p className="text-center mb-4 lg:hidden">Bitnusa</p>
              <p className=" text-xl text-center font-bold lg:text-left lg:text-3xl px-12">
                Leading Digital Solutions for Your Business
              </p>
            </div>
          </div>
          <div className="relative lg:min-h-screen">
            <div className="flex justify-center items-center lg:absolute right-10">
              <Image src={phone} width={250} height={300} alt="" />
            </div>
            <div className="w-[250px] h-[150px] bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg absolute top-10 items-center  rounded-xl p-8 z-40 lg:top-[200px] lg:right-[200px]  ">
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold uppercase w-[150px]">
                  Transforming Ideas Reality
                </p>
                <Image src={iconArrow} alt="" width={40} height={40} />
              </div>
              <p className="text-xs pt-2">
                Where creativity meets strategy to transform your brand's vision
              </p>
            </div>
            <div className="lg:hidden w-[250px] h-[150px] bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg absolute top-60 right-10 items-center  rounded-xl p-8 z-40 lg:top-[200px] lg:left-[200px]  ">
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold uppercase w-[150px]">
                  Transforming Ideas Reality
                </p>
                <Image src={iconArrow} alt="" width={40} height={40} />
              </div>
              <p className="text-xs pt-2">
                Where creativity meets strategy to transform your brand's vision
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:flex lg:absolute lg:top-[250px] lg:left-[50px] lg:z-40">
                <Image src={workPlace} width={450} height={450} alt="" />
              </div>
              <div className="hidden w-[250px] h-[150px] bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg absolute top-60 right-10 items-center  rounded-xl p-8 z-40 lg:block lg:top-[450px] lg:left-[350px]  ">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold uppercase w-[150px]">
                    Transforming Ideas Reality
                  </p>
                  <Image src={iconArrow} alt="" width={40} height={40} />
                </div>
                <p className="text-xs pt-2">
                  Where creativity meets strategy to transform your brand's
                  vision
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative p-12 lg:p-20">
          <div className="flex flex-col gap-4 lg:flex-row justify-center items-center">
            <div className="flex flex-col gap-3 lg:p-14">
              <p className="text-center lg:text-left">E-commerce Specialist</p>
              <p className="font-bold text-xl">
                Comprehensive E-Commerce Development Services
              </p>
              <p className="lg:pr-16">
                We create custom e-commerce platforms that provide a seamless,
                secure, and scalable shopping experience.
              </p>
            </div>
            <Image src={ecommerceProduct} width={500} height={300} alt="" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
