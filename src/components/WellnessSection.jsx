import hydration from "../assets/images/hydration.png";
import hydration_two from "../assets/images/hydration_two.png";
import { FaCircleCheck } from "react-icons/fa6";

const WellnessSection = () => {
  return (
    <>
      <section className="flex w-full h-[125vh]">
        <div className="w-[50%] bg-[#ffffff] flex flex-col justify-center items-center">
          <img
            src={hydration}
            alt="Reboost Logo"
            className="w-[256px] h-[256px]"
          />
          <div className="border-t-2 border-solid border-[#1CABE3] my-4 w-full"></div>
          <img
            src={hydration_two}
            alt="Reboost Logo"
            className="w-[256px] h-[256px]"
          />
        </div>

        <div className="font-manrope w-[50%] bg-[#EEF8FB] relative flex flex-col items-center border-t-2 border-l-2 border-[#1CABE3] border-solid">
          <div className="flex flex-col justify-center h-full">
            <p className="font-manrope text-[#1CABE3] text-transparent bg-clip-text text-4xl ml-12 px-5 font-semibold">
              Wellness Reminder
            </p>
            <h1 className="font-playfair text-[#000000] text-7xl font-semibold ml-12 px-5 leading-snug mt-12">
              Improve Wellness with a Break
            </h1>
            <p className="font-manrope text-[#000000] text-xl ml-12 px-5 font-normal mt-8 mb-4">
              Get break reminders to recharge and stay productive.
            </p>
            <ul className="font-manrope text-[#000000] text-lg ml-12 px-5 font-normal space-y-6 mt-8">
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Input reminder title (e.g., Eye Break, Hydration)
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Add custom details or notes
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Set a timer for your reminder
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Track time remaining until your next reminder notification
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#1CABE3] mr-4" />
                Receive a notification when the timer ends, even when the
                extension is closed
              </li>
            </ul>
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-0 h-0 border-t-8 border-l-2 border-b-2 border-[#E8F8EE] border-r-[#E8F8EE]"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-l-2 border-r-2 border-[#E8F8EE] border-b-[#E8F8EE]"></div>
        </div>
      </section>
    </>
  );
};

export default WellnessSection;
