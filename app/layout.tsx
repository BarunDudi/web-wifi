import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "firstmedia - bandung",
  description:
    "First Media memiliki layanan paket internet rumah yang cepat, murah, dan unlimited serta pilihan TV kabel berlangganan berkualitas HD terbaik di Indonesia.",
  other: {
    "http-equiv": "Content-Security-Policy",
    content: "default-src 'self'; script-src 'self'; object-src 'none';",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
