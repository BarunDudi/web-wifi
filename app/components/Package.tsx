"use client";

import Link from "next/link";
import Image from "next/image";

export default function Package() {
  return (
    <section className="bg-white relative px-[8px] py-[50px]">
      <div>
        <h2 className="text-[1.5rem] text-center leading-7 lg:leading-10">
          Internet Rumah Bebas Kuota & Hiburan Terlengkap
        </h2>
        <p className="text-center py-[10px] lg:py-[20px]">
          pilih paket internetan bebas FUP sesuai kebutuhanmu!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-[30px] md:flex-wrap justify-center lg:py-[100px]">
        {/* streaming */}
        <div className="md:w-[45%] lg:w-[30%] rounded-[9px] overflow-hidden flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* header */}
          <div className="h-[200px] overflow-hidden relative">
            <img
              src="streaming.webp"
              className="w-full"
              alt="paket streaming"
            />
            <div className="bg-white rounded-[5px] px-[14px] py-[3px] absolute top-[10px] left-[10px] flex items-center gap-[5px]">
              <div className="w-[7px] h-[7px] rounded-full bg-black"></div>
              <p className="text-[.8rem] font-bold text-gray-800">
                up to <span className="underline">300 mbps</span>
              </p>
            </div>
          </div>

          {/* body */}
          <div className="px-[10px] pt-[20px] pb-[60px] flex justify-between items-start relative">
            <div className="flex flex-col">
              <div>
                <img src="stream.webp" className="h-[24px]" alt="stream logo" />
                <p>internet & streaming</p>
              </div>
              <div className="flex gap-[5px] bottom-3 pt-[10px]">
                <img
                  src="/stream/catchplay.jpg"
                  alt="catchplay"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/cinemaworld.jpg"
                  alt="cinemaworld"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/firstmediax.jpg"
                  alt="firstmediax"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/hbogo.jpg"
                  alt="hbo go"
                  className="w-[20px] h-[20px]"
                />
              </div>
            </div>

            <div className="flex gap-[5px] items-center">
              <img src="money.svg" className="w-[30px]" alt="money" />
              <div>
                <p>mulai dari :</p>
                <p className="font-bold">Rp 245.000</p>
              </div>
            </div>

            <Link
              href="/paket?v=stream"
              className="absolute bottom-[10px] bg-blue-500 text-white font-figtree font-bold rounded-[5px] px-[20px] py-[8px] right-[10px]"
            >
              lihat paket
            </Link>
          </div>
        </div>

        {/* tv */}
        <div className="md:w-[45%] lg:w-[30%] rounded-[9px] overflow-hidden flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* header */}
          <div className="h-[200px] overflow-hidden relative">
            <img src="tv.webp" className="w-full" alt="paket tv" />
            <div className="bg-white rounded-[5px] px-[14px] py-[3px] absolute top-[10px] left-[10px] flex items-center gap-[5px]">
              <div className="w-[7px] h-[7px] rounded-full bg-black"></div>
              <p className="text-[.8rem] font-bold text-gray-800">
                up to <span className="underline">200 mbps</span>
              </p>
            </div>
          </div>

          {/* body */}
          <div className="px-[10px] pt-[20px] pb-[60px] flex justify-between items-start relative">
            <div className="flex flex-col">
              <div>
                <img src="joy.webp" className="h-[24px]" alt="joy" />
                <p>internet & tv</p>
              </div>
              <div className="flex gap-[5px] bottom-3 pt-[10px] items-center">
                <img
                  src="/stream/firstmediax.jpg"
                  alt="firstmediax"
                  className="w-[20px] h-[20px]"
                />
                <div className="border-[1px] border-slate-900 rounded-full px-[15px] py-[5px]">
                  <p className="!text-[.6rem]">+ 115 TV channel</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[5px] items-center">
              <img src="money.svg" className="w-[30px]" alt="" />
              <div>
                <p>mulai dari :</p>
                <p className="font-bold">Rp 295.000</p>
              </div>
            </div>

            <Link
              href="/paket?v=joy"
              className="absolute bottom-[10px] bg-blue-500 text-white font-figtree font-bold rounded-[5px] px-[20px] py-[8px] right-[10px]"
            >
              lihat paket
            </Link>
          </div>
        </div>

        {/* star */}
        <div className="md:w-[45%] lg:w-[30%] rounded-[9px] overflow-hidden flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* header */}
          <div className="h-[200px] overflow-hidden relative">
            <img src="super.webp" className="w-full" alt="" />
            <div className="bg-white rounded-[5px] px-[14px] py-[3px] absolute top-[10px] left-[10px] flex items-center gap-[5px]">
              <div className="w-[7px] h-[7px] rounded-full bg-black"></div>
              <p className="text-[.8rem] font-bold text-gray-800">
                up to <span className="underline">800 mbps</span>
              </p>
            </div>
          </div>

          {/* body */}
          <div className="px-[10px] pt-[20px] pb-[60px] flex justify-between items-start relative">
            <div className="flex flex-col">
              <div>
                <img src="star.webp" className="h-[24px]" alt="" />
                <p>internet, TV & streaming</p>
              </div>
              <div className="flex gap-[5px] bottom-3 pt-[10px] items-center flex-wrap">
                <img
                  src="/stream/catchplay.jpg"
                  alt="catchplay"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/cinemaworld.jpg"
                  alt="cinemaworld"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/firstmediax.jpg"
                  alt="firstmediax"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/hbogo.jpg"
                  alt="hbo go"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div className="border-[1px] border-slate-900 rounded-full px-[15px] py-[5px] w-fit mt-[10px]">
                <p className="!text-[.6rem] w-fit">+ 115 TV channel</p>
              </div>
            </div>

            <div className="flex gap-[5px] items-center">
              <img src="money.svg" className="w-[30px]" alt="" />
              <div>
                <p>mulai dari :</p>
                <p className="font-bold">Rp 975.000</p>
              </div>
            </div>

            <Link
              href="/paket?v=star"
              className="absolute bottom-[10px] bg-blue-500 text-white font-figtree font-bold rounded-[5px] px-[20px] py-[8px] right-[10px]"
            >
              lihat paket
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
