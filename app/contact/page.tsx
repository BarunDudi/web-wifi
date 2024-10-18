"use client";
import React, { useState } from "react";

export default function Page() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const phone = "6285222341337"; // Nomor WhatsApp tujuan
    const message = `Halo, saya ${nama} berlokasi di ${alamat} tertarik untuk berlangganan First Media.`;
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;

    // Redirect ke URL WhatsApp
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen">
      <div className="h-[550px] bg-[#FFC55A] text-white py-[100px] lg:py-[300px] px-[10px] md:px-[50px] lg:px-[100px] relative overflow-hidden md:flex items-center">
        <div className="w-2/3">
          <h1 className="text-[2rem] leading-8 pb-[5px] uppercase !font-donjose w-full">
            Contact kami
          </h1>
          <p>hubungi sales kami dan beralih ke first media hari ini</p>
        </div>

        <img
          src="paket.png"
          className="z-30 absolute md:static right-[-20px] w-[100%] md:w-[50%] lg:w-[45%] bottom-[0px]"
          alt=""
        />
      </div>

      <section className="my-[100px] mx-[20px]">
        <h2 className="text-center text-[1.5rem]">
          Hubungi sales kami dan beralih ke First Media hari ini!
        </h2>
        <div className="flex gap-[10px] items-center justify-center">
          <img src="telephone.svg" className="w-10" alt="" />
          <p className="text-[2rem] font-bold">6285222341337</p>
        </div>
        <div>
          <p className="text-center font-bold">
            alamat : Jl. Veteran No.10, Kb. Pisang, Kec. Sumur Bandung, Kota
            Bandung, Jawa Barat 40112
          </p>
        </div>
      </section>
    </div>
  );
}
