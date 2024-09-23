import Image from "next/image";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import StatsSection from "./Components/StatsSection";
import ChooseGelato from "./Components/chosegelate";
import GelatoConnect from "./Components/GelatoConnect";
import Metiamario from "./Components/Metiamario";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <div class="bg-black text-white text-center py-2 underline md:py-2 text-sm md:text-base lg:text-md">
        FREE SHIPPING for orders over $300. Order today
      </div>
      <Navbar />
      <Herosection />
      <StatsSection />
      <ChooseGelato />
      <GelatoConnect />
      <Metiamario />
      <Footer />
    </div>
  );
}
