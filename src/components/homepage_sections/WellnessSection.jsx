import bell from "../../assets/images/bell.png";
import { FaCircleCheck } from "react-icons/fa6";

const WellnessSection = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row w-full min-h-[100vh] bg-[#E8F8EE]">
        <div className="w-full md:w-[50%] mt-10 md:mt-0 md:mx-10 bg-gradient-to-r from-[#80D261] to-[#1CABE3] flex flex-col justify-center items-center rounded-none md:rounded-[2rem]">
          <div className="flex flex-col gap-10 md:gap-20 justify-center items-center w-full md:w-[80%] md:h-[85%] bg-white/10 border border-white/20 md:rounded-[2rem] cursor-pointer backdrop-blur-sm shadow-md p-6 md:p-0">
            <img
              src={bell}
              alt="Bell Icon"
              className="w-[150px] h-[150px] md:w-[256px] md:h-[256px]"
            />
            <p className="text-center font-manrope text-[#ffffff] text-base md:text-xl font-semibold mx-2 md:mx-5">
              Get break reminders to recharge and stay productive.
            </p>
          </div>
        </div>

        <div className="font-manrope w-full md:w-[50%] bg-[#E8F8EE] relative flex flex-col items-center px-4 md:px-0">
          <div className="flex flex-col justify-center h-full">
            <p className="font-manrope text-[#019963] text-2xl md:text-4xl md:ml-2 font-semibold text-center md:text-left mt-6 md:mt-10">
              Wellness Reminder
            </p>
            <h1 className="font-playfair text-[#000000] text-3xl md:text-7xl font-semibold text-center md:text-left md:ml-2 leading-snug mt-6 md:mt-12">
              Improve Wellness with a Break
            </h1>

            <ul className="font-manrope text-[#000000] text-base md:text-lg md:ml-2 font-normal space-y-4 md:space-y-6 mt-6 md:mt-8 text-center md:text-left">
              {[
                'Create a custom reminder title (e.g., "Eye Break," "Hydration")',
                "Personalize with additional notes for your reminder",
                "Easily set your preferred reminder timer",
                "Track time left until your next notification",
                "Get notified even if the extension isn't open",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start"
                >
                  <FaCircleCheck className="text-[#019963] mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellnessSection;
