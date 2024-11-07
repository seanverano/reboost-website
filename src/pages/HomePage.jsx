import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HeroSectionTwo from "../components/HeroSectionTwo";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <HeroSection />
        <HeroSectionTwo />
      </div>
    </>
  );
};

export default HomePage;
