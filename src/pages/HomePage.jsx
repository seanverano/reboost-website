import HeroSection from "../components/homepage_sections/HeroSection";
import HydrationSection from "../components/homepage_sections/HydrationSection";
import WellnessSection from "../components/homepage_sections/WellnessSection";
import IntersectionCircle from "../components/IntersectionCircle";
import ContactSection from "../components/homepage_sections/ContactSection";
import Footer from "../components/Footer";
import PreviewSection from "../components/homepage_sections/PreviewSection";

const HomePage = () => {
  return (
    <>
      <div
        className="flex flex-col bg-[#EEF8FB] w-full min-w-full overflow-x-hidden"
        style={{
          position: "relative",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <HeroSection />
        <HydrationSection />
        <IntersectionCircle />
        <WellnessSection />
        <PreviewSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
