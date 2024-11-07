import HeroSection from "../components/HeroSection";
import HydrationSection from "../components/HydrationSection";
import WellnessSection from "../components/WellnessSection";
import IntersectionCircle from "../components/IntersectionCircle";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <HeroSection />
        <HydrationSection />
        <IntersectionCircle />
        <WellnessSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
