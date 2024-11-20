import HeroSection from "../components/homepage_sections/HeroSection";
import HydrationSection from "../components/homepage_sections/HydrationSection";
import WellnessSection from "../components/homepage_sections/WellnessSection";
import IntersectionCircle from "../components/IntersectionCircle";
import ContactSection from "../components/homepage_sections/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col bg-[#EEF8FB]">
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
