import { AiOutlineChrome } from "react-icons/ai";
import logo from "../assets/images/logo.png";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <section className="flex w-full h-screen">
        <Navbar />
        <div className="font-manrope w-[40%] bg-[#E8F8EE] flex justify-center items-center">
          <div className="flex gap-4 flex-col justify-center items-center">
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
        <div className="w-[60%] bg-[#E8F8EE] flex flex-col gap-7 justify-center text-left">
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
          <div className="flex flex-col gap-5 justify-center items-center text-base font-bold text-center mt-5">
            <button className="px-8 py-5 rounded-full text-xl text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] hover:opacity-70 transition duration-300 ease-in-out">
              <span className="flex items-center gap-2">
                <AiOutlineChrome />
                Chrome Web Store
              </span>
            </button>
            <div className="flex flex-row gap-1 items-center font-manrope text-[#000000] font-normal text-xs">
              Get it now on the Chrome Web Store!
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
