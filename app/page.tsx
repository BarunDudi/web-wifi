import Image from "next/image";
import Jumbotron from "./components/Jumbotron";
import Package from "./components/Package";
import ListOfService from "./paket/components/ListOfService";
import About from "./components/About";
import Report from "./components/Report";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Jumbotron />
        <Package />
        <About />
        <Report />
        <ListOfService />
      </main>
    </>
  );
}
