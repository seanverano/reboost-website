import hydration from "../assets/images/hydration.png";
import hydration_two from "../assets/images/hydration_two.png";

const WellnessSection = () => {
  return (
    <>
      <section className="flex w-full h-[150vh]">
        <div className="w-[50%] bg-[#ffffff] flex flex-col justify-center items-center">
          <img
            src={hydration}
            alt="Reboost Logo"
            className="w-[256px] h-[256px]"
          />
          <div className="border-t-8 border-solid border-[#EEF8FB] my-4 w-full"></div>
          <img
            src={hydration_two}
            alt="Reboost Logo"
            className="w-[256px] h-[256px]"
          />
        </div>

        <div className="font-manrope w-[50%] bg-[#EEF8FB] relative flex flex-col items-center">
          <div className="flex flex-col justify-center h-full">
            <p className="font-manrope text-[#000000] text-lg ml-12 px-5 font-normal">
              Wellness Reminder
            </p>
            <h1 className="font-playfair text-[#000000] text-7xl font-semibold ml-12 px-5 leading-snug mt-12">
              Improve Wellness with a Break
            </h1>
            <p className="font-manrope text-[#000000] text-lg ml-12 px-5 font-normal">
              Get break reminders to recharge and stay productive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellnessSection;
