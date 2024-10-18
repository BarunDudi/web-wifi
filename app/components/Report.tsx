import React from "react";

export default function Report() {
  return (
    <section className="py-[100px] flex flex-col gap-[20px]">
      <p className="px-[100px] text-center">
        Untuk menyampaikan komplain atau keluhan kepada First Media, Anda dapat
        menghubungi: Call Center di nomor (021) 2559 6595 atau 1500 595, Email
        di customer.service@linknet.co.id, Twitter di @firstmediacares, Aplikasi
        My First Media, atau menghubungi sales waktu pemasangan Firstmedia.
      </p>
      <div>
        <p className="text-center">
          Untuk menghubungi customer service melalui aplikasi My First Media,
          Anda dapat:
        </p>
        <ul className="max-w-md space-y-1 text-gray-900 text-[.8rem] list-disc list-inside mx-auto">
          <li>Masuk ke halaman dashboard</li>
          <li>Pilih troubleshooting</li>
          <li>Pilih internet atau TV</li>
          <li>Pilih opsi untuk refresh</li>
          <li>Jika kendala masih ada, klik No</li>
          <li>Pilih salah satu kendala yang dihadapi</li>
          <li>
            Jika solusi yang diberikan tidak menyelesaikan kendala, akan dibuat
            tiket dan customer service akan menghubungi Anda
          </li>
        </ul>
      </div>
      <p className="text-center">
        First Media melayani pelanggan selama 24 jam sehari dan 7 hari seminggu,
        kecuali jika terjadi peristiwa di luar kendali First Media.
      </p>
    </section>
  );
}
