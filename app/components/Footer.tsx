import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#13181E] text-white py-[30px] px-[15px] relative">
      <div className="grid grid-cols-2 gap-[15px]">
        <div className="flex gap-[7px] items-center">
          <img src="home-wifi.svg" className="w-[23px]" alt="" />
          <p className="!font-normal !text-[.6rem]">wireless home network</p>
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

      {/* contact */}
      <Link
        href={"https://api.whatsapp.com/send?phone=6285222341337"}
        className={`fixed bottom-[10px] right-[10px]`}
      >
        <img src="wa.svg" className="w-[50px]" alt="" />
      </Link>
    </div>
  );
}
