"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Banefit from "./components/Banefit";
import { paketData } from "./paket";
import Card from "./components/Card";
import ListOfService from "./components/ListOfService";
import Link from "next/link";

export default function page({ searchParams }) {
  const router = useRouter();
  const [filter, setFilter] = useState(searchParams.v || "semua");
  const [dataCards, setDataCards] = useState([]);

  useEffect(() => {
    if (filter === "stream") {
      setDataCards(paketData.stream);
    } else if (filter === "joy") {
      setDataCards(paketData.joy);
    } else if (filter === "star") {
      setDataCards(paketData.star);
    } else {
      setDataCards([...paketData.stream, ...paketData.joy, ...paketData.star]);
    }
  }, [filter]);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* jumbotron */}
      <div className="h-[550px] bg-[#FFC55A] text-white py-[100px] lg:py-[300px] px-[10px] md:px-[50px] lg:px-[100px] relative overflow-hidden md:flex items-center">
        <div>
          <h1 className="text-[2rem] leading-8 pb-[5px] uppercase !font-donjose">
            Langganan wi-fi rumah dan TV kabel terbaik
          </h1>
          <p>makin nyaman dirumah dengan unlimited internet</p>
        </div>

        <img
          src="paket.png"
          className="z-30 absolute md:static right-[-20px] w-[100%] md:w-[50%] lg:w-[45%] bottom-[0px]"
          alt=""
        />
      </div>
      {/* container paket */}
      <div className="py-[50px]">
        {/* header */}
        <div className="py-[20px]">
          <h2 className="text-[1.5rem] text-center">
            Temukan paket yang cocok untuk kebutuhan
          </h2>

          {/* filter */}
          <div className="pt-[50px] pb-[10px] flex gap-[10px] flex-nowrap overflow-x-scroll w-full px-[10px]">
            <a
              className={`filter-button text-black ${
                filter === "semua" ? "filter-active" : "filter-not-active"
              }`}
              href="/paket?v=semua"
            >
              Semua
            </a>
            <a
              className={`filter-button text-black ${
                filter === "stream" ? "filter-active" : "filter-not-active"
              }`}
              href="/paket?v=stream"
            >
              Internet & Streaming
            </a>
            <a
              className={`filter-button text-black ${
                filter === "joy" ? "filter-active" : "filter-not-active"
              }`}
              href="/paket?v=joy"
            >
              Internet & TV
            </a>
            <a
              className={`filter-button text-black ${
                filter === "star" ? "filter-active" : "filter-not-active"
              }`}
              href="/paket?v=star"
            >
              Internet , TV & Streaming
            </a>
          </div>
        </div>

        {/* body */}
        <div className="flex gap-[20px] flex-nowrap overflow-x-scroll py-[50px] px-[20px]">
          {dataCards &&
            dataCards.map((data, idx) => {
              return <Card data={data} idx={idx} key={idx} />;
            })}
        </div>

        <ListOfService />
      </div>
    </div>
  );
}
