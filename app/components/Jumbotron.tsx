import Link from "next/link";
import React from "react";

export default function Jumbotron() {
  return (
    <div className="h-[550px] md:h-[450px] lg:h-[550px] bg-[#14263f] text-white py-[100px] px-[10px] lg:px-[150px] relative overflow-hidden">
      <div className="md:flex md:gap-[15px] md:px-[20px] items-center md:justify-between md:pt-[50px]">
        <div>
          <h1 className="text-[2rem] lg:leading-10 lg:text-[3rem] leading-8 pb-[5px]">
            internetan tanpa batas
          </h1>
          <p>Rasakan kebebasan online tanpa kuota terbatas.</p>
          <Link
            href={"/paket?v=semua"}
            className="py-[8px] px-[20px] bg-blue-500 text-white rounded-lg font-figtree font-normal text-[.8rem] my-[10px] flex gap-[5px] w-fit z-50"
          >
            lihat product <img src="view.svg" className="w-[20px]" alt="" />
          </Link>
        </div>
        <img
          src="jumbotron.webp"
          className="z-30 absolute md:static right-0 md:right-[20px] w-[95%] md:w-[45%] bottom-[80px]"
          alt=""
        />
      </div>
      <img
        src="/tl.webp"
        className="absolute bottom-[-40px] lg:bottom-[-100px] left-[-60px] w-[80%] md:w-[30%] transform scale-x-[-1] z-10"
        alt=""
      />
    </div>
  );
}
