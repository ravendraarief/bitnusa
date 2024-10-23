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
      <main className="lg:min-h-screen">
        <section className="px-4 pt-8 lg:px-16 lg:py-8">
          <h1 className=" lg:text-[80px] xl:text-[100px] 2xl:text-[120px] text-white uppercase tracking-tight leading-none">
            Leading <br /> Digital Solutions <br />
            for Your Business
          </h1>
        </section>
      </main>

      <Footer />
    </>
  );
}
