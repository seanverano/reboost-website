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
    <section className="pt-10 sm:pt-10 flex flex-col justify-center w-full bg-[#E8F8EE] gap-5 md:gap-10 px-4 md:px-0">
      <div
        className="flex flex-col items-center bg-[#E8F8EE] font-playfair text-4xl md:text-6xl xl:text-8xl text-[#000000] font-semibold leading-snug text-center"
        data-aos="fade-up"
      >
        <h2 className="py-5">Learn More</h2>
        <div className="w-full max-w-4xl">
          <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/g8RL_s4DbIY"
              title="YouTube video preview"
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
