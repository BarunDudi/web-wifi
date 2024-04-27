import React from "react";

export default function Banefit() {
  return (
    <div className="py-[25px]">
      <ul className="flex flex-col gap-[10px]">
        <li className="flex items-center gap-[5px]">
          <img src="device.svg" className="w-[20px]" alt="" />{" "}
          <p>ideal untuk 1 - 4 perangkat</p>
        </li>
        <li className="flex items-center gap-[5px]">
          <img src="device.svg" className="w-[20px]" alt="" />{" "}
          <p>ideal untuk 1 - 4 perangkat</p>
        </li>
      </ul>
    </div>
  );
}
