import drink from "../../assets/images/drink.png";
import { FaCircleCheck } from "react-icons/fa6";

const HydrationSection = () => {
  return (
    <>
      <section
        id="features"
        className="flex flex-col md:flex-row w-full min-h-[100vh] bg-[#EEF8FB]"
      >
        <div className="flex flex-col md:flex-row">
          <div className="font-manrope w-full md:w-[50%] bg-[#EEF8FB] relative flex flex-col items-center justify-center px-4 md:px-0 order-2 md:order-1">
            <div className="flex flex-col justify-center h-full">
              <p className="mt-6 sm:mt-0 font-manrope text-[#1CABE3] text-2xl md:text-4xl md:ml-12 font-semibold text-center md:text-left">
                Hydration Tracker
              </p>
              <h1 className="font-playfair text-[#000000] text-3xl md:text-7xl font-semibold text-center md:text-left md:ml-12 leading-snug mt-4 md:mt-12">
                Hydrate and Own the Day
              </h1>
              <ul className="mb-10 sm:mb-0 font-manrope text-[#000000] text-base md:text-lg md:ml-12 font-normal space-y-4 md:space-y-6 mt-6 md:mt-8 text-center md:text-left">
                <li className="flex items-center text-left gap-4">
                  <FaCircleCheck className="text-[#1CABE3] w-5 h-5 flex-shrink-0" />
                  <span className="flex-grow">
                    Choose your drink and set your perfect volume
                  </span>
                </li>
                <li className="flex items-center text-left gap-4">
                  <FaCircleCheck className="text-[#1CABE3] w-5 h-5 flex-shrink-0" />
                  <span className="flex-grow">
                    Create custom beverages with personalized volumes
                  </span>
                </li>
                <li className="flex items-center text-left gap-4">
                  <FaCircleCheck className="text-[#1CABE3] w-5 h-5 flex-shrink-0" />
                  <span className="flex-grow">
                    Log every sip and watch your progress grow
                  </span>
                </li>
                <li className="flex items-center text-left gap-4">
                  <FaCircleCheck className="text-[#1CABE3] w-5 h-5 flex-shrink-0" />
                  <span className="flex-grow">
                    Adjust your daily hydration goal to match your needs
                  </span>
                </li>
                <li className="flex items-center text-left gap-4">
                  <FaCircleCheck className="text-[#1CABE3] w-5 h-5 flex-shrink-0" />
                  <span className="flex-grow">
                    Easily reset and review your daily hydration logs
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[80%] mx-auto px-10 sm:px-0 md:w-[50%] mt-10 md:mt-0 md:mx-10 bg-gradient-to-r from-[#1CABE3] to-[#80D261] flex flex-col justify-center items-center rounded-[2rem] md:rounded-[2rem] order-1 md:order-2">
            <div className="my-10 mx-10 sm:my-10 flex flex-col gap-10 md:gap-20 justify-center items-center w-full md:w-[80%] md:h-[85%] bg-white/10 border border-white/20 rounded-[2rem] md:rounded-[2rem] cursor-pointer backdrop-blur-sm shadow-md p-6 md:p-0">
              <img
                src={drink}
                alt="Water Bottle Icon"
                className="w-[100px] h-[100px] sm:w-[256px] sm:h-[256px]"
              />
              <p className="font-manrope text-[#ffffff] text-sm sm:text-base md:text-xl font-semibold text-center mx-2 md:mx-5">
                Track and log daily water intake to stay hydrated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HydrationSection;
