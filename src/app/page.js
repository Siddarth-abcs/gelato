import Image from "next/image";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import StatsSection from "./Components/StatsSection";

export default function Home() {
  return (
    <div>
      <div class="bg-black text-white text-center py-2 underline md:py-2 text-sm md:text-base lg:text-md">
        FREE SHIPPING for orders over $300. Order today
      </div>
      <Navbar />
      <Herosection />
      <StatsSection />
    </div>
  );
}
