import Link from "next/link";
import React from "react";

export default function Jumbotron() {
  return (
    <div className="h-[550px] bg-[#14263f] text-white py-[100px] px-[10px] relative">
      <h1 className="text-[2rem] leading-8 pb-[5px]">internetan tanpa batas</h1>
      <p>Rasakan kebebasan online tanpa kuota terbatas.</p>
      <Link
        href={"/paket?v=semua"}
        className="py-[8px] px-[20px] bg-blue-500 text-white rounded-lg font-figtree font-normal text-[.8rem] my-[10px] flex gap-[5px] w-fit"
      >
        lihat product <img src="view.svg" className="w-[20px]" alt="" />
      </Link>
      <img
        src="jumbotron.webp"
        className="z-30 absolute right-0 w-[95%] bottom-[80px]"
        alt=""
      />
      <img
        src="/tl.webp"
        className="absolute bottom-[-40px] left-[-60px] w-[80%] transform scale-x-[-1]"
        alt=""
      />
    </div>
  );
}
