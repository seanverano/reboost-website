import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HydrationSection from "../components/HydrationSection";
import WellnessSection from "../components/WellnessSection";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <HeroSection />
        <HydrationSection />
        <WellnessSection />
      </div>
    </>
  );
};

export default HomePage;
