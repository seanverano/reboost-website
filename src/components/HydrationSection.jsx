import hydration from "../assets/images/hydration.png";
import hydration_two from "../assets/images/hydration_two.png";

const HydrationSection = () => {
  return (
    <>
      <section className="flex w-full h-screen">
        <div className="font-manrope w-[50%] bg-[#E8F8EE] relative flex flex-col items-center">
          <div className="flex flex-col justify-center h-full">
            <p className="font-manrope text-[#000000] text-lg ml-12 px-5 font-normal">
              One healthy habit at a time to improve health and productivity.
            </p>
            <h1 className="font-playfair text-[#000000] text-7xl font-semibold ml-12 px-5 leading-snug mt-12">
              Refresh and boost your well-being
            </h1>
            <p className="font-manrope text-[#000000] text-lg ml-12 px-5 font-normal">
              One healthy habit at a time to improve health and productivity.
            </p>
          </div>
        </div>

        <div className="w-[50%] bg-[#ffffff] flex flex-col justify-center items-center">
          <img
            src={hydration}
            alt="Reboost Logo"
            className="w-[256px] h-[256px]"
          />
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
