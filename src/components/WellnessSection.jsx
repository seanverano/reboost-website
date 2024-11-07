import hydration from "../assets/images/hydration.png";
import { FaCircleCheck } from "react-icons/fa6";

const WellnessSection = () => {
  return (
    <>
      <section className="flex w-full h-[125vh] bg-[#E8F8EE]">
        <div className="w-[50%] mx-10 bg-gradient-to-r from-[#80D261] to-[#1CABE3] flex flex-col justify-center items-center rounded-[2rem]">
          <div className="flex justify-center w-[80%] h-[85%] bg-white/10 border border-white/20 rounded-[2rem] cursor-pointer backdrop-blur-sm shadow-md">
            <img
              src={hydration}
              alt="Reboost Logo"
              className="w-[256px] h-[256px]"
            />
          </div>
        </div>

        <div className="font-manrope w-[50%] bg-[#E8F8EE] relative flex flex-col items-center">
          <div className="flex flex-col justify-center h-full">
            <p className="font-manrope text-[#019963] text-4xl ml-12 px-5 font-semibold">
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
                <FaCircleCheck className="text-[#019963] mr-4" />
                Create a custom reminder title (e.g., “Eye Break,” “Hydration”)
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#019963] mr-4" />
                Personalize with additional notes for your reminder
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#019963] mr-4" />
                Easily set your preferred reminder timer
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#019963] mr-4" />
                Track time left until your next notification
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="text-[#019963] mr-4" />
                Get notified even if the extension isn’t open
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellnessSection;
