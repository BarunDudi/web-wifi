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
      {/* logo */}
      <div className="flex gap-[5px]">
        <Link
          href={"/"}
          aria-label="homepage"
          className="py-[10px] flex gap-[10px]"
        >
          <img
            src={`logo-${ontop ? "dark" : "light"}.png`}
            className="h-[50px]"
            alt=""
          />
          <div
            translate="no"
            className="flex flex-col items-center justify-center"
          >
            <p className="font-donjose">FIRST MEDIA RESELLER</p>
            <p className="text-[.5rem] text-center py-[5px]">
              unofficial firstmedia website
            </p>
          </div>
        </Link>
      </div>

      {/* navbar desktop */}
      <div className="hidden md:block">
        <div className="flex gap-[30px]">
          <Link href={"/"} className="font-figtree font-bold">
            Home
          </Link>
          <Link href={"/paket"} className="font-figtree font-bold">
            product
          </Link>
          <Link href={"#about"} className="font-figtree font-bold">
            about
          </Link>
          <Link href={"/contact"} className="font-figtree font-bold">
            contact
          </Link>
          <Link href={"/legal-disclaimer"} className="font-figtree font-bold">
            legal disclaimer
          </Link>
        </div>
      </div>

      {/* hamburger */}
      <div className="md:hidden z-50">
        <img
          src={`hamburger-${ontop ? "white" : "black"}.svg`}
          className="w-[20px]"
          onClick={() => {
            setNavbarShowed(true);
          }}
        />
      </div>

      {/* navbar mobile */}
      <div
        className={`h-screen fixed bottom-0 text-black bg-white shadow-lg py-[150px] px-[50px] w-[80%] text-center duration-300 transition right-0 ${
          navbarShowed ? "translate-x-0" : "translate-x-[150%]"
        }`}
      >
        {navbarShowed && (
          <button
            className={`fixed top-[50px] w-[20px] duration-300 transition ${
              navbarShowed ? "right-[30px]" : "-right-[100px]"
            }`}
            onClick={() => {
              setNavbarShowed(false);
            }}
          >
            <img src="cross.svg" />
          </button>
        )}
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
            href={"#about"}
            onClick={() => setNavbarShowed(false)}
            className=" underline font-figtree font-bold"
          >
            about
          </Link>
          <Link
            href={"/contact"}
            onClick={() => setNavbarShowed(false)}
            className=" underline font-figtree font-bold"
          >
            contact
          </Link>
          <Link
            href={"/legal-disclaimer"}
            onClick={() => setNavbarShowed(false)}
            className=" underline font-figtree font-bold"
          >
            legal disclaimer
          </Link>
        </div>
      </div>
    </nav>
  );
}
