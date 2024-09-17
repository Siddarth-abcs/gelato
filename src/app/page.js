import Image from "next/image";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";

export default function Home() {
  return (
    <div>
      <div class="bg-black text-white text-center py-2 md:py-4 text-sm md:text-base lg:text-lg">
        FREE SHIPPING for orders over $300. Order today
      </div>
      <Navbar />
      <Herosection />
    </div>
  );
}
