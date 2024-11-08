import logo from "../assets/images/logo.png";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex w-full h-screen">
        <Navbar />
        <div className="font-manrope w-[40%] bg-[#EEF8FB] flex justify-center items-center">
          <div className="flex gap-4 flex-col justify-center items-center z-10">
            <img
              src={logo}
              alt="Reboost Logo"
              className="w-[300px] h-[300px]"
            />
            <h1 className="text-center font-extrabold text-7xl bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
              Reboost
            </h1>
          </div>
        </div>
        <div className="w-[60%] bg-[#EEF8FB] flex flex-col gap-7 justify-center text-left">
          <h1 className="font-playfair text-[#000000] text-7xl font-semibold ml-12 px-5 leading-snug mt-12">
            Refresh and Boost your well-being
          </h1>
          <p className="font-manrope text-[#000000] text-lg ml-12 px-5 font-normal flex flex-col">
            Chrome extension for hydration tracking and wellness reminders,
            <span>
              Helping you improve your health and productivity, one habit at a
              time.
            </span>
          </p>
          <div className="flex flex-row gap-5 items-center text-base font-bold text-center mt-5 ml-12 px-5">
            <div className="flex flex-row gap-1 items-center font-manrope text-[#000000] font-normal text-sm">
              Get it now on the Chrome Web Store!
            </div>
            <button className="px-8 py-5 rounded-full text-xl text-[#ffffff] bg-[#000000] leading-normal tracking-[0.015em] hover:bg-[#1CABE3] hover:text-[#ffffff] transition duration-300 ease-in-out">
              <span className="flex items-center gap-2">Get Started</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
