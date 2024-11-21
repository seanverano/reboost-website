import bell from "../../assets/images/bell.png";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WellnessSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="flex flex-col lg:flex-row w-full min-h-[100vh] bg-[#E8F8EE]">
        <div
          className="w-[80%] mx-auto px-10 sm:px-0 lg:w-[50%] lg:mx-10 bg-gradient-to-r from-[#80D261] to-[#1CABE3] flex flex-col justify-center items-center rounded-[2rem] lg:rounded-[2rem]"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="flex my-10 lg:my-10 flex-col gap-10 md:gap-20 justify-center items-center w-full md:w-[80%] h-auto md:h-[85%] bg-white/10 border border-white/20 rounded-[2rem] lg:rounded-[2rem] cursor-pointer backdrop-blur-sm shadow-md p-6 lg:p-0">
            <img
              src={bell}
              alt="Bell Icon"
              className="w-[100px] h-[100px] sm:w-[256px] sm:h-[256px]"
            />
            <p className="text-center font-manrope text-[#ffffff] text-sm sm:text-base md:text-xl font-semibold mx-2 lg:mx-5">
              Get break reminders to recharge and stay productive.
            </p>
          </div>
        </div>

        <div
          className="font-manrope w-full lg:w-[50%] bg-[#E8F8EE] relative flex flex-col items-center justify-center px-4 lg:px-0"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="flex flex-col justify-center h-full">
            <p className="mt-6 lg:mt-0 font-manrope text-[#019963] text-2xl md:text-4xl lg:ml-12 font-semibold text-center lg:text-left">
              Wellness Reminder
            </p>
            <h1 className="font-playfair text-[#000000] text-3xl md:text-6xl lg:text-7xl font-semibold text-center lg:text-left lg:ml-12 leading-snug mt-4 lg:mt-12">
              Improve Wellness with a Break
            </h1>
            <ul className="mb-10 lg:mb-0 font-manrope text-[#000000] text-base md:text-lg lg:ml-12 font-normal space-y-4 md:space-y-6 mt-6 md:mt-8 text-center md:text-left">
              <li className="flex items-center text-left gap-4">
                <FaCircleCheck className="text-[#019963] w-5 h-5 flex-shrink-0" />
                <span className="flex-grow">
                  Create a custom reminder title (e.g., "Eye Break,"
                  "Hydration")
                </span>
              </li>
              <li className="flex items-center text-left gap-4">
                <FaCircleCheck className="text-[#019963] w-5 h-5 flex-shrink-0" />
                <span className="flex-grow">
                  Personalize with additional notes for your reminder
                </span>
              </li>
              <li className="flex items-center text-left gap-4">
                <FaCircleCheck className="text-[#019963] w-5 h-5 flex-shrink-0" />
                <span className="flex-grow">
                  Easily set your preferred reminder timer
                </span>
              </li>
              <li className="flex items-center text-left gap-4">
                <FaCircleCheck className="text-[#019963] w-5 h-5 flex-shrink-0" />
                <span className="flex-grow">
                  Track time left until your next notification
                </span>
              </li>
              <li className="flex items-center text-left gap-4">
                <FaCircleCheck className="text-[#019963] w-5 h-5 flex-shrink-0" />
                <span className="flex-grow">
                  Get notified even if the extension isn't open
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellnessSection;
