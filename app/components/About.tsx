import React from "react";

export default function About() {
  return (
    <section
      className="md:py-[100px] md:px-[100px] py-[80px] bg-slate-800"
      id="about"
    >
      <div className="bg-gray-200 text-slate-800 py-[50px] md:px-[50px] px-[20px] mx-auto relative w-[90%]">
        <div className="flex flex-col md:flex-row gap-[50px] justify-between items-center">
          <div className="text-left w-full md:w-1/2">
            <h2 className="text-[2rem] absolute top-[-20px] left-[40px] border-[2px] border-slate-800 bg-white px-[15px] skew-y-3 py-[10px] leading-7 lg:leading-10">
              Tentang Kami
            </h2>
            <p className="text-[1rem]">
              kami adalah reseller produk First Media di Bandung! Kami
              berkomitmen untuk menghadirkan solusi terbaik dalam layanan
              internet dan hiburan digital bagi pelanggan kami. Dengan
              pengalaman yang mumpuni dan dukungan dari First Media, kami
              menyediakan berbagai paket layanan yang dirancang untuk memenuhi
              kebutuhan Anda, baik untuk rumah maupun bisnis. Kami percaya bahwa
              setiap pelanggan layak mendapatkan layanan berkualitas tinggi dan
              dukungan yang responsif. Kontak kami untuk berlangganan firstmedia
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="about.webp" className="w-full rounded-md" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
