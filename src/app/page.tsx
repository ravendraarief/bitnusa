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
      {/* <Header /> */}
      <MobileNav />
      {/* <main className="relative min-h-screen bg-slate-100">
        <section className="pt-8 min-h-screen">
          <div className=" relative flex">
            <div className="absolute top-0 z-10">
              <Image src={grid} width={450} height={200} alt="grid" />
            </div>
            <div className="w-[400px] absolute top-20 left-16 z-20">
              <p className="text-3xl font-bold">
                Leading Digital Solutions for Your Business
              </p>
            </div>
            <div className="pt-8">
              <div className="absolute right-10">
                <Image src={phone} width={250} height={300} alt="" />
              </div>
              <div className="w-[300px] h-[170px] bg-white  bg-opacity-60 backdrop-filter backdrop-blur-lg absolute right-40 rounded-xl p-8 top-48 z-10">
                <div className="flex justify-between items-center">
                  <p className="font-bold uppercase w-[150px]">
                    Transforming Ideas Reality
                  </p>
                  <Image src={iconArrow} alt="" width={40} height={40} />
                </div>
                <p className="text-sm pt-2">
                  Where creativity meets strategy to transform your brand's
                  vision
                </p>
              </div>
            </div>
            <div className="">
              <div className="absolute top-[150px] left-[50px] z-40">
                <Image src={workPlace} width={450} height={450} alt="" />
              </div>
              <div className="w-[300px] h-[170px] bg-white  bg-opacity-60 backdrop-filter backdrop-blur-lg absolute left-[300px] rounded-xl p-8 top-[350px] z-40">
                <div className="flex justify-between items-center">
                  <p className="font-bold uppercase w-[150px]">
                    Transforming Ideas Reality
                  </p>
                  <Image src={iconArrow} alt="" width={40} height={40} />
                </div>
                <p className="text-sm pt-2">
                  Where creativity meets strategy to transform your brand's
                  vision
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative p-20">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-3 p-14">
              <p>E-commerce Specialist</p>
              <p className="font-bold text-xl">
                Comprehensive E-Commerce Development Services
              </p>
              <p className="pr-16">
                We create custom e-commerce platforms that provide a seamless,
                secure, and scalable shopping experience.
              </p>
            </div>
            <Image src={ecommerceProduct} width={500} height={300} alt="" />
          </div>
        </section>
      </main> */}

      <main className="">
        <div className="relative">
          <div className="flex justify-center items-center">
            <Image src={phone} width={250} height={300} alt="" />
          </div>
          <div className=" mx-auto w-[250px] h-[150px] bg-white  bg-opacity-60 backdrop-filter backdrop-blur-lg absolute top-10  items-center  rounded-xl p-8  z-40">
            <div className="flex justify-between items-center">
              <p className="font-bold uppercase w-[150px]">
                Transforming Ideas Reality
              </p>
              <Image src={iconArrow} alt="" width={40} height={40} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
