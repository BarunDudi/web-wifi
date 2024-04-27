"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Banefit from "./components/Banefit";
import { paketData } from "./paket";
import Card from "./components/Card";

export default function page({ searchParams }) {
  const router = useRouter();
  const [filter, setFilter] = useState(searchParams.v || "semua");

  useEffect(() => {}, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* jumbotron */}
      <div className="h-[550px] bg-[#FFC55A] text-white py-[100px] px-[10px] relative overflow-hidden">
        <h1 className="text-[2rem] leading-8 pb-[5px]">
          Langganan wi-fi rumah dan TV kabel terbaik
        </h1>
        <p>makin nyaman dirumah dengan unlimited internet</p>

        <img
          src="paket.png"
          className="z-30 absolute right-[-20px] w-[100%] bottom-[0px]"
          alt=""
        />
      </div>
      {/* container paket */}
      <div className="py-[50px]">
        {/* header */}
        <div className="py-[20px]">
          <h1 className="text-[1.5rem] text-center">
            Temukan paket yang cocok untuk kebutuhan
          </h1>

          {/* filter */}
          <div className="pt-[50px] pb-[10px] flex gap-[10px] flex-nowrap overflow-x-scroll w-full px-[10px]">
            <button
              className={`filter-button text-black ${
                filter === "semua" ? "filter-active" : "filter-not-active"
              }`}
              onClick={() => {
                router.push("/paket?v=semua");
                setFilter("semua");
              }}
            >
              semua
            </button>
            <button
              className={`filter-button text-black ${
                filter === "stream" ? "filter-active" : "filter-not-active"
              }`}
            >
              internet & streaming
            </button>
            <button
              className={`filter-button text-black ${
                filter === "joy" ? "filter-active" : "filter-not-active"
              }`}
            >
              internet & TV
            </button>
            <p
              className={`filter-button text-black ${
                filter === "star" ? "filter-active" : "filter-not-active"
              }`}
            >
              internet , TV & streaming
            </p>
          </div>
        </div>

        {/* body */}
        <div className="flex gap-[20px] flex-nowrap overflow-x-scroll py-[50px] px-[20px]">
          {paketData.stream.map((i, idx) => {
            return <Card data={i} idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}
