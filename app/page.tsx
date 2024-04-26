import Image from "next/image";
import Jumbotron from "./components/Jumbotron";
import Package from "./components/Package";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Jumbotron />
      <Package />
    </main>
  );
}
