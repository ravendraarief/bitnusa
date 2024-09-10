import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import grid from '@/assets/Grid.png';
import phone from '@/assets/iPhone15Plus.png';
import iconArrow from '@/assets/icon-arrow.png';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen bg-slate-100">
        <section className="pt-16">
          <div className="flex">
            <div className="absolute top-20 z-10">
              <Image src={grid} width={500} height={200} alt="grid" />
            </div>
            <div className="w-[400px] absolute top-40 left-24 z-20">
              <p className="text-3xl font-bold">
                Leading Digital Solutions for Your Business
              </p>
            </div>
            <div className="">
              <div className="absolute right-10">
                <Image src={phone} width={300} height={500} alt="" />
              </div>
              <div className="w-[300px] h-[200px] bg-white  bg-opacity-60 backdrop-filter backdrop-blur-lg absolute right-40 rounded-xl p-8 top-72 z-30">
                <div className="flex justify-between items-center">
                  <p className="font-bold uppercase w-[150px]">
                    Transforming Ideas Reality
                  </p>
                  <Image src={iconArrow} alt="" width={48} height={48} />
                </div>
                <p className="text-sm pt-2">
                  Where creativity meets strategy to transform your brand's
                  vision
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
