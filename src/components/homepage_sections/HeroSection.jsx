import logo from "../../assets/images/logo.png";
import Navbar from "../navbars/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative flex flex-col md:flex-row w-full min-h-screen"
      >
        <Navbar />
        <div className="mt-10 font-manrope w-full md:w-[40%] bg-[#EEF8FB] flex justify-center items-center pt-10 pb-5 md:py-0">
          <div
            className="flex gap-4 flex-col justify-center items-center z-10"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src={logo}
              alt="Reboost Logo"
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
            />
            <h1 className="text-center font-extrabold text-4xl md:text-7xl bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
              Reboost
            </h1>
          </div>
        </div>
        <div
          className="w-full md:w-[60%] bg-[#EEF8FB] flex flex-col gap-4 md:gap-7 justify-center text-center md:text-left px-4 md:px-0 pb-10 md:pb-0"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="font-playfair text-[#000000] text-3xl md:text-7xl font-semibold md:ml-12 leading-snug mt-6 md:mt-12">
            Refresh and Boost your well-being
          </h1>
          <p className="font-manrope text-[#000000] text-base md:text-lg md:ml-12 font-normal flex flex-col px-4 md:px-0">
            Chrome extension for hydration tracking and wellness reminders,
            <span>
              Helping you improve your health and productivity, one habit at a
              time.
            </span>
          </p>
          <div className="font-manrope flex flex-col md:flex-row gap-4 md:gap-5 items-center text-base font-bold text-center mt-5 md:ml-12 px-4 md:px-0">
            <div className="flex flex-row gap-1 items-center font-manrope text-[#000000] font-normal text-sm">
              Get it for free on the Chrome Web Store now!
            </div>
            <button className="font-manrope px-6 md:px-8 py-3 md:py-5 rounded-full text-base md:text-xl text-[#ffffff] bg-[#000000] leading-normal tracking-[0.015em] hover:bg-[#1CABE3] hover:text-[#ffffff] transition duration-300 ease-in-out">
              <span className="flex items-center gap-2">Get Started</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
