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

      <section className="my-[80px] mx-[20px]">
        <form
          className="max-w-sm mx-auto bg-slate-800 py-[20px] px-[10px] rounded-md"
          onSubmit={handleSubmit}
        >
          <h3 className="text-white font-donjose text-center text-[1.5rem]">
            hubungi kami
          </h3>
          <div className="mb-5">
            <label
              htmlFor="alamat"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              alamat
            </label>
            <input
              type="text"
              id="alamat"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="cigending gg lorem no 27"
              required
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="nama"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              nama
            </label>
            <input
              type="text"
              id="nama"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="jajang"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
