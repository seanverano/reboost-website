import { AiOutlineChrome } from "react-icons/ai";
import logo from "../assets/images/logo.png";

const HeroSection = () => {
  return (
    <>
      <section className="flex w-full h-screen">
        <div className="font-manrope w-[40%] bg-[#EEF8FB] flex justify-center items-center">
          <div className="flex gap-4 flex-col justify-center items-center">
            <img
              src={logo}
              alt="Reboost Logo"
              className="w-[256px] h-[256px]"
            />
            <h1 className="text-center font-extrabold text-6xl bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
              Reboost
            </h1>
          </div>
        </div>
        <div className="w-[60%] bg-[#E8F8EE] flex flex-col gap-7 justify-center text-left">
          <h1 className="font-playfair text-[#000000] text-7xl font-semibold ml-12 px-5 leading-snug mt-12">
            Refresh and boost your well-being
          </h1>
          <p className="font-manrope text-[#000000] text-lg ml-12 px-5 font-normal">
            One healthy habit at a time to improve health and productivity.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center text-base font-bold text-center mt-5">
            <button className="px-8 py-5 rounded-full text-xl text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] hover:opacity-70 transition duration-300 ease-in-out">
              <span>Add to Chrome</span>
            </button>
            <div className="flex flex-row gap-1 items-center font-manrope text-[#000000] font-normal text-xs">
              <span>Get it now on the </span>
              <span>
                <AiOutlineChrome />
              </span>
              <span>Chrome Web Store!</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
