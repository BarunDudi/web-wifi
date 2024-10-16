import React from "react";
import Banefit from "./Banefit";
import { paketData } from "../paket";
import Sduaratus from "./Sduaratus";
import Link from "next/link";

export default function Card({ data, idx }) {
  let waLink = "https://wa.me/6285222341337?text=";
  const message = `halo, saya tertarik dengan paket ${data.group} ${data.rank.name}`;
  const messageWithPercent20 = message.replace(/ /g, "%20");
  waLink = waLink + messageWithPercent20;

  const hargaNormalPerTahun = Number(data.harga.replace(/\./g, "")) * 12;

  return (
    <div
      className={`px-[15px] pt-[15px] pb-[70px] leading-[15px] rounded-[5px] bg-slate-100 shadow-lg border-[2px] border-opacity-50 shrink-0 relative max-w-[98%]`}
      style={{ borderColor: `#${data.rank.warna}` }}
      key={idx + 1}
    >
      {/* additional */}
      <div
        className={`bg-white py-[5px] px-[10px] rounded-[5px] border-[1.5px] w-fit flex items-center gap-[10px] absolute top-[-10px]`}
        style={{ borderColor: `#${data.rank.warna}` }}
      >
        <div
          className={`p-[8px] rounded-full block w-[1px] h-[1px]`}
          style={{ background: `#${data.rank.warna}` }}
        ></div>
        <p>{data.rank.name}</p>
      </div>

      {/* head */}
      <div className="flex justify-between gap-[50px]">
        <div className="flex flex-col gap-[20px]">
          <div className="py-[8px]">
            <img src={`${data.group}.webp`} className="h-[30px]" />
          </div>
          <div className="flex gap-[5px] items-center">
            <img src="money.svg" className="w-[30px]" alt="" />
            <div>
              <p>harga perbulan</p>
              <p className="font-bold">Rp {data.harga}</p>
            </div>
          </div>
        </div>

        <div className="w-[93px] h-[87px] relative rounded-full text-black">
          <img src="speed/internet-speed.svg" alt="" />
          <img
            src={`/speed/${data.group}/internet-${
              data.speed <= 100 ? "50" : data.speed <= 200 ? "200" : "300"
            }.svg`}
            className="absolute bottom-0 "
            color="red"
            style={{ fill: "red" }}
            alt=""
          />

          <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p>up to</p>
            <div>
              <h2 className="text-center text-[1.5rem] pt-[5px]">
                {data.speed}
              </h2>
              <p>Mbps</p>
            </div>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="py-[25px]">
        <ul className="flex flex-col gap-[10px]">
          {data.hargaPerTahun && (
            <li className="flex items-center gap-[5px]">
              <img src="saving-light.svg" className="w-[20px]" alt="" />
              <p>harga berlangganan setahun: </p>
              <p>
                <span className="flex flex-col">
                  <span className="text-green-600 font-bold">
                    {data.hargaPerTahun}
                  </span>
                  <s className="text-[.7rem] ml-[5px]">
                    {hargaNormalPerTahun.toLocaleString("id-ID")}
                  </s>
                </span>
              </p>
            </li>
          )}
          <li className="flex items-center gap-[5px]">
            <img src="device.svg" className="w-[20px]" alt="" />
            <p>ideal untuk {data.perangkat} perangkat</p>
          </li>

          <li className="flex flex-col gap-[8px]">
            <div className="flex items-center gap-[5px]">
              <img src="play.svg" className="w-[20px]" alt="" />
              <p>{data.streamtainments.length} streamtainments</p>
            </div>
            <div className="flex gap-[8px] pl-[25px]">
              {data.streamtainments.map((i, idx) => {
                return (
                  <img
                    src={`stream/${i}`}
                    key={idx}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                );
              })}
            </div>
          </li>

          {data.cashbackPerMount && (
            <li className="flex items-center gap-[5px]">
              <img src="saving-light.svg" className="w-[20px]" alt="" />
              <p>cashback Rp {data.cashbackPerMount}/bulan</p>
            </li>
          )}

          {data.bonus && (
            <li className="flex items-center gap-[5px]">
              <img src="saving-light.svg" className="w-[20px]" alt="" />
              <p>{data.bonus}</p>
            </li>
          )}

          {data.doubleCashbackPerMount && (
            <li className="flex items-center gap-[5px]">
              <img src="saving-light.svg" className="w-[20px]" alt="" />
              <p>
                total double cashback Rp {data.doubleCashbackPerMount}/bulan
              </p>
            </li>
          )}

          {data.extraCashback && (
            <li className="flex items-center gap-[5px]">
              <img src="saving-light.svg" className="w-[20px]" alt="" />
              <p>extra cashback Rp {data.extraCashback}</p>
            </li>
          )}

          {data.channel && (
            <li className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[5px]">
                <img src="hd-light.svg" className="w-[20px]" alt="" />
                <p>{data.channel.total} TV channel</p>
              </div>
              <div className="flex gap-[8px] pl-[25px]">
                <div>
                  <p className="bg-blue-500 text-white rounded-sm py-[5px] px-[10px]">
                    {data.channel.sd} SD
                  </p>
                </div>
                <div>
                  <p className="bg-blue-500 text-white rounded-sm py-[5px] px-[10px]">
                    {data.channel.hd} HD
                  </p>
                </div>
                <div>
                  <p className="bg-blue-500 text-white rounded-sm py-[5px] px-[10px]">
                    {data.channel.fork} 4K
                  </p>
                </div>
              </div>
            </li>
          )}

          {data.sudahTermasuk && (
            <li className="flex items-center gap-[5px]">
              <img src="hd-light.svg" className="w-[20px]" alt="" />
              <p>sudah termasuk {data.sudahTermasuk}</p>
            </li>
          )}
        </ul>

        <Link
          href={waLink}
          className="absolute bottom-[15px] right-[15px] font-figtree font-bold text-white bg-blue-400 hover:bg-blue-800 rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          pesan
        </Link>
      </div>
    </div>
  );
}
