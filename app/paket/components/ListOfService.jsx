import React from "react";

export default function ListOfService() {
  return (
    <div className="py-[100px]">
      <ul className="bg-[#14263f] text-white w-[90%] py-[30px] px-[10px] mx-auto rounded-md list-disc">
        <li>
          <p>free biaya pemasangan sebesar 750rb</p>
        </li>
        <li>
          <p>free biaya registrasi</p>
        </li>
        <li>
          <p>free biaya survey</p>
        </li>
        <li>
          <p>
            {" "}
            pesan sekarang, pasang sekarang, bayar 7 hari setelah pemasangan
          </p>
        </li>
      </ul>
    </div>
  );
}
