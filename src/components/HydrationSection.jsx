import hydration from "../assets/images/hydration.png";
import hydration_two from "../assets/images/hydration_two.png";
import { FaCircleCheck } from "react-icons/fa6";

const HydrationSection = () => {
  return (
    <>
      <section className="flex w-full h-[125vh]">
        <div className="font-manrope w-[50%] bg-[#E8F8EE] relative flex flex-col items-center border-r-2 border-b-2 border-[#019963] border-solid">
          <div className="flex flex-col justify-center h-full">
            <p className="font-manrope text-[#019963] text-4xl ml-12 px-5 font-semibold">
              Hydration Tracker
            </p>
            <h1 className="font-playfair text-[#000000] text-7xl font-semibold ml-12 px-5 leading-snug mt-12">
              Hydrate and Own the Day
            </h1>
            <p className="font-manrope text-[#000000] text-xl ml-12 px-5 font-normal mt-8 mb-4">
              Track and log daily water intake for better health.
            </p>
            <ul className="font-manrope text-[#000000] text-lg ml-12 px-5 font-normal space-y-6 mt-8">
              <li className="flex items-center">
                <FaCircleCheck className="text-[#019963] mr-4" />
                Select your beverage type and set the volume amount
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#019963] mr-4" />
                Create your own custom beverage and volume
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#019963] mr-4" />
                Log your drink intake and track your progress
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#019963] mr-4" />
                Adjust your daily volume goal anytime
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#019963] mr-4" />
                Reset and check your daily hydration logs
              </li>
            </ul>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-0 h-0 border-t-8 border-r-8 border-b-8 border-[#EEF8FB] border-l-[#EEF8FB]"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-b-8 border-r-8 border-[#EEF8FB] border-t-[#EEF8FB]"></div>
        </div>

        <div className="w-[50%] bg-[#ffffff] flex flex-col justify-center items-center">
          <img
            src={hydration}
            alt="Reboost Logo"
            className="w-[256px] h-[256px]"
          />
          <div className="border-t-2 border-solid border-[#019963] my-4 w-full"></div>
          <img
            src={hydration_two}
            alt="Reboost Logo"
            className="w-[256px] h-[256px]"
          />
        </div>
      </section>
    </>
  );
};

export default HydrationSection;
