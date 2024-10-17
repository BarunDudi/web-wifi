import React from "react";

export default function ListOfService() {
  return (
    <div className="py-[100px]">
      <div className="w-[90%] py-[30px] px-[10px] mx-auto rounded-md bg-slate-900">
        <h2 className="text-[2rem] text-white leading-7 lg:leading-10 text-center py-[20px]">
          Penawaran !
        </h2>

        <ul className="text-white list-disc px-[30px]">
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
    </div>
  );
}
