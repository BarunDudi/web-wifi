import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#13181E] text-white pt-[30px] relative">
      <div className="px-[10px] py-[30px]">
        <div className="flex gap-[40px] justify-center px-[10px] md:px-[50px]">
          {/* logo */}
          <Logo />

          {/* grid */}
          <div className="grid grid-cols-2 gap-[5px]">
            <div className="flex gap-[7px] items-center">
              <img src="home-wifi.svg" className="w-[23px]" alt="" />
              <p className="!font-normal !text-[.6rem]">
                wireless home network
              </p>
            </div>
            <div className="flex gap-[7px] items-center">
              <img src="speed.svg" className="w-[23px]" alt="" />
              <p className="!font-normal !text-[.6rem]">
                stable internet connection
              </p>
            </div>
            <div className="flex gap-[7px] items-center">
              <img src="saving.svg" className="w-[23px]" alt="" />
              <p className="!font-normal !text-[.6rem]">combo value savings</p>
            </div>
            <div className="flex gap-[7px] items-center">
              <img src="hd.svg" className="w-[23px]" alt="" />
              <p className="!font-normal !text-[.6rem]">
                high definition TV channel
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[5px] bg-slate-200 text-slate-900">
        <p className="text-center">Copyright © 2024 Firstmedia-bandung.id</p>
      </div>

      {/* contact */}
      <Link
        href={"https://api.whatsapp.com/send?phone=6285222341337"}
        className={`fixed bottom-[10px] right-[10px]`}
      >
        <img src="wa.svg" className="w-[50px]" alt="" />
      </Link>
    </footer>
  );
}
