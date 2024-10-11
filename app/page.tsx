import Image from "next/image";
import Jumbotron from "./components/Jumbotron";
import Package from "./components/Package";
import ListOfService from "./paket/components/ListOfService";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Jumbotron />
        <Package />
        <ListOfService />
      </main>
    </>
  );
}
