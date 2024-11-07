import drink from "../assets/images/drink.png";
import { FaCircleCheck } from "react-icons/fa6";

const HydrationSection = () => {
  return (
    <>
      <section className="flex w-full h-[125vh] bg-[#EEF8FB]">
        <div className="font-manrope w-[50%] bg-[#EEF8FB] relative flex flex-col items-center">
          <div className="flex flex-col justify-center h-full">
            <p className="font-manrope text-[#1CABE3] text-4xl ml-12 px-5 font-semibold">
              Hydration Tracker
            </p>
            <h1 className="font-playfair text-[#000000] text-7xl font-semibold ml-12 px-5 leading-snug mt-12">
              Hydrate and Own the Day
            </h1>
            <ul className="font-manrope text-[#000000] text-lg ml-12 px-5 font-normal space-y-6 mt-8">
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Choose your drink and set your perfect volume
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Create custom beverages with personalized volumes
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Log every sip and watch your progress grow
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Adjust your daily hydration goal to match your needs
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Easily reset and review your daily hydration logs
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[50%] mx-10 bg-gradient-to-r from-[#1CABE3] to-[#80D261] flex flex-col justify-center items-center rounded-[2rem]">
          <div className="flex flex-col gap-20 justify-center items-center w-[80%] h-[85%] bg-white/10 border border-white/20 rounded-[2rem] cursor-pointer backdrop-blur-sm shadow-md">
            <img
              src={drink}
              alt="Reboost Logo"
              className="w-[256px] h-[256px]"
            />
            <p className="font-manrope text-[#ffffff] text-xl font-semibold mx-5">
              Track and log daily water intake to stay hydrated.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HydrationSection;
