"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [ontop, setOntop] = useState(true);
  const [navbarShowed, setNavbarShowed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setOntop(false);
      } else {
        setOntop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center fixed top-0 w-full px-[12px] md:px-[30px] lg:px-[45px] z-50 ${
        ontop
          ? "text-white"
          : "bg-white text-black border-b-[1px] border-zinc-600"
      }`}
      ref={navbarRef}
    >
      <div className="flex gap-[5px]">
        <Link href={"/"}>
          <img
            src={`logo-${ontop ? "dark" : "light"}.png`}
            className="h-[70px]"
            alt=""
          />
        </Link>
      </div>

      <div className="hidden md:block">
        <div className="flex gap-[30px]">
          <Link href={"/"} className="font-figtree font-bold">
            Home
          </Link>
          <Link href={"/paket"} className="font-figtree font-bold">
            product
          </Link>
          <Link href={"#"} className="font-figtree font-bold">
            about
          </Link>
        </div>
      </div>

      <div className="md:hidden z-50">
        <img
          src={`hamburger-${ontop ? "white" : "black"}.svg`}
          className="w-[20px]"
          onClick={() => {
            setNavbarShowed(true);
          }}
        />
      </div>

      <div
        className={`h-screen fixed bottom-0 text-black bg-white shadow-lg py-[150px] px-[50px] w-[80%] text-center duration-300 transition right-0 ${
          navbarShowed ? "translate-x-0" : "translate-x-[150%]"
        }`}
      >
        <button>
          <img
            src="cross.svg"
            className={`fixed top-[50px] w-[20px] duration-300 transition ${
              navbarShowed ? "right-[30px]" : "-right-[100px]"
            }`}
            onClick={() => {
              setNavbarShowed(false);
            }}
          />
        </button>
        <div className="flex flex-col gap-[30px]">
          <Link
            href={"/"}
            onClick={() => setNavbarShowed(false)}
            className=" underline font-figtree font-bold"
          >
            Home
          </Link>
          <Link
            href={"/paket"}
            onClick={() => setNavbarShowed(false)}
            className=" underline font-figtree font-bold"
          >
            product
          </Link>
          <Link
            href={"#"}
            onClick={() => setNavbarShowed(false)}
            className=" underline font-figtree font-bold"
          >
            about
          </Link>
        </div>
      </div>
    </nav>
  );
}
