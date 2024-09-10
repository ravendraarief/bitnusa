import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col gap-4 p-8">
        <h1 className="font-bold text-[#c2a500] p-4">We'll be back soon!</h1>
        <p className="w-[400px] text-[#c2a500] p-4">
          Our website is currently down for maintenance. We apologize for the
          inconvenience and appreciate your patience.
        </p>
        <p className="text-[#c2a500] p-4">Thank you for understanding.</p>
      </div>
    </div>
  );
}
