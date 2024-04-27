"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [ontop, setOntop] = useState(true);

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
      className={`flex justify-between items-center fixed top-0 w-full px-[12px] z-50 ${
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
        <Link href={"#"} className="font-figtree font-bold">
          product
        </Link>
      </div>

      <div className="md:hidden">
        <img
          src={`hamburger-${ontop ? "white" : "black"}.svg`}
          className="w-[20px]"
          alt=""
        />
      </div>
    </nav>
  );
}
