import React from "react";

export default function Logo() {
  return (
    <div className="flex gap-[10px] items-center justify-center">
      <img
        src="logo-dark.png"
        className="h-[30px] md:h-[50px] mx-auto "
        alt=""
      />
      <div translate="no" className="flex flex-col items-center justify-center">
        <p className="font-donjose text-[.5rem] text-center">
          FIRST MEDIA RESELLER
        </p>
        <p className="text-[.5rem] text-center py-[5px]">
          unofficial firstmedia website
        </p>
      </div>
    </div>
  );
}
