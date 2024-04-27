"use client";

import Link from "next/link";

export default function Package() {
  return (
    <section className="bg-white relative px-[8px] py-[50px]">
      <div>
        <h1 className="text-[1.5rem] text-center leading-7">
          Internet Rumah Bebas Kuota & Hiburan Terlengkap
        </h1>
        <p className="text-center py-[10px]">
          pilih paket internetan bebas FUP sesuai kebutuhanmu!
        </p>
      </div>

      <div className="flex flex-col gap-[30px]">
        {/* streaming */}
        <div className="rounded-[9px] overflow-hidden flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* header */}
          <div className="h-[200px] overflow-hidden relative">
            <img src="streaming.jpg" className="w-full" alt="" />
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
                <img src="stream-logo.webp" className="h-[24px]" alt="" />
                <p>internet & streaming</p>
              </div>
              <div className="flex gap-[5px] bottom-3 pt-[10px]">
                <img
                  src="/stream/catchplay.webp"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/cinemaworld.webp"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/firstmediax.webp"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/hbogo.webp"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
              </div>
            </div>

            <div className="flex gap-[5px] items-center">
              <img src="money.svg" className="w-[30px]" alt="" />
              <div>
                <p>mulai dari:</p>
                <p className="font-bold">Rp 230.000</p>
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
        <div className="rounded-[9px] overflow-hidden flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* header */}
          <div className="h-[200px] overflow-hidden relative">
            <img src="tv.jpg" className="w-full" alt="" />
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
                <img src="joy.webp" className="h-[24px]" alt="" />
                <p>internet & tv</p>
              </div>
              <div className="flex gap-[5px] bottom-3 pt-[10px] items-center">
                <img
                  src="/stream/firstmediax.webp"
                  alt=""
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
                <p>mulai dari:</p>
                <p className="font-bold">Rp 250.500</p>
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
        <div className="rounded-[9px] overflow-hidden flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* header */}
          <div className="h-[200px] overflow-hidden relative">
            <img src="super.jpg" className="w-full" alt="" />
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
                  src="/stream/catchplay.webp"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/cinemaworld.webp"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/firstmediax.webp"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/stream/hbogo.webp"
                  alt=""
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
                <p>mulai dari:</p>
                <p className="font-bold">Rp 805.500</p>
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
