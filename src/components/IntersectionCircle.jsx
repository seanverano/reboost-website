import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IntersectionCircle = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="hidden lg:flex w-full h-0 justify-center items-center z-50">
      <div
        className="w-32 h-32 md:w-40 md:h-40 bg-[#000000] rounded-full shadow-md flex justify-center items-center"
        data-aos="zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
      >
        <p className="text-[#ffffff] text-xl md:text-2xl font-manrope font-bold text-center tracking-[0.05em]">
          Features
        </p>
      </div>
    </div>
  );
};

export default IntersectionCircle;
