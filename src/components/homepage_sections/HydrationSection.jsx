import drink from "../../assets/images/drink.png";
import { FaCircleCheck } from "react-icons/fa6";

const HydrationSection = () => {
  return (
    <>
      <section
        id="features"
        className="flex flex-col md:flex-row w-full min-h-[100vh] bg-[#EEF8FB]"
      >
        <div className="font-manrope w-full md:w-[50%] bg-[#EEF8FB] relative flex flex-col items-center justify-center px-4 md:px-0">
          <div className="flex flex-col justify-center h-full">
            <p className="font-manrope text-[#1CABE3] text-2xl md:text-4xl md:ml-12 font-semibold text-center md:text-left">
              Hydration Tracker
            </p>
            <h1 className="font-playfair text-[#000000] text-3xl md:text-7xl font-semibold text-center md:text-left md:ml-12 leading-snug mt-6 md:mt-12">
              Hydrate and Own the Day
            </h1>
            <ul className="font-manrope text-[#000000] text-base md:text-lg md:ml-12 font-normal space-y-4 md:space-y-6 mt-6 md:mt-8 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Choose your drink and set your perfect volume
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Create custom beverages with personalized volumes
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Log every sip and watch your progress grow
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Adjust your daily hydration goal to match your needs
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Easily reset and review your daily hydration logs
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[50%] mt-10 md:mt-0 md:mx-10 bg-gradient-to-r from-[#1CABE3] to-[#80D261] flex flex-col justify-center items-center rounded-none md:rounded-[2rem]">
          <div className="flex flex-col gap-10 md:gap-20 justify-center items-center w-full md:w-[80%] md:h-[85%] bg-white/10 border border-white/20 md:rounded-[2rem] cursor-pointer backdrop-blur-sm shadow-md p-6 md:p-0">
            <img
              src={drink}
              alt="Water Bottle Icon"
              className="w-[150px] h-[150px] md:w-[256px] md:h-[256px]"
            />
            <p className="font-manrope text-[#ffffff] text-base md:text-xl font-semibold text-center mx-2 md:mx-5">
              Track and log daily water intake to stay hydrated.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HydrationSection;
