import bell from "../../assets/images/bell.png";
import { FaCircleCheck } from "react-icons/fa6";

const WellnessSection = () => {
  return (
    <>
      <section className="flex w-full h-[100vh] bg-[#E8F8EE]">
        <div className="w-[50%] mx-10 bg-gradient-to-r from-[#80D261] to-[#1CABE3] flex flex-col justify-center items-center rounded-[2rem]">
          <div className="flex flex-col gap-20 justify-center items-center w-[80%] h-[85%] bg-white/10 border border-white/20 rounded-[2rem] cursor-pointer backdrop-blur-sm shadow-md">
            <img src={bell} alt="Bell Icon" className="w-[256px] h-[256px]" />
            <p className="text-center font-manrope text-[#ffffff] text-xl font-semibold mx-5">
              Get break reminders to recharge and stay productive.
            </p>
          </div>
        </div>

        <div className="font-manrope w-[50%] bg-[#E8F8EE] relative flex flex-col items-center">
          <div className="flex flex-col justify-center h-full">
            <p className="font-manrope text-[#019963] text-4xl ml-2 px-5 font-semibold mt-10">
              Wellness Reminder
            </p>
            <h1 className="font-playfair text-[#000000] text-7xl font-semibold ml-2 px-5 leading-snug mt-12">
              Improve Wellness with a Break
            </h1>

            <ul className="font-manrope text-[#000000] text-lg ml-2 px-5 font-normal space-y-6 mt-8">
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
