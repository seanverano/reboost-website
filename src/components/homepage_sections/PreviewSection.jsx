import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PreviewSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="md:pt-10 flex flex-col justify-center w-full bg-[#E8F8EE] gap-5 md:gap-10 px-4 md:px-0">
      <div
        className="flex flex-col items-center bg-[#E8F8EE] font-playfair text-4xl md:text-6xl xl:text-8xl text-[#000000] font-semibold leading-snug text-center"
        data-aos="fade-up"
      >
        <h2 className="py-5 text-3xl md:text-6xl lg:text-7xl md:pb-20">
          Learn More
        </h2>
        <div className="w-full max-w-4xl">
          <div className="relative w-full h-64 md:h-96 lg:h-[32rem] overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/g8RL_s4DbIY"
              title="Reboost Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
