import { FaWpforms } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="pt-12 sm:pt-12 flex flex-col justify-center w-full md:h-[80vh] lg:h-[90vh] xl:h-[160vh] 2xl:h-[120vh] bg-[#E8F8EE] gap-10 md:gap-20 px-4 md:px-0"
      >
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-8xl text-[#000000] font-semibold leading-snug text-center mx-4 md:mx-20">
          Stay{" "}
          <span className="bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
            healthy{" "}
          </span>
          and{" "}
          <span className="bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
            hydrated
          </span>
          <div className="text-3xl md:text-6xl lg:text-9xl mt-4 text-center">
            Get in Touch!
          </div>
        </h1>
        <div className="flex justify-center items-center flex-col mx-4 md:mx-20 lg:mx-20 xl:mx-60 rounded-[2rem] bg-gradient-to-r from-[#1CABE3] to-[#80D261]">
          <div className="w-[80%] mx-auto my-9 sm:my-9 sm:px-0 flex justify-center flex-col md:w-[85%] md:py-20 bg-white/10 border border-white/20 rounded-[2rem] backdrop-blur-sm shadow-md">
            <p className="px-4 text-center font-manrope text-white text-sm sm:text-base md:text-xl 2xl:text-3xl font-semibold mt-6 md:mt-10 mb-5 md:mb-20 mx-4 md:mx-10">
              Email me your thoughts or share feedback and report bugs through
              Google Forms.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 font-manrope font-bold mb-10">
              <a href="mailto:verano.seandustin@gmail.com" className="w-auto">
                <button className="px-6 md:px-8 py-3 md:py-5 rounded-full text-base md:text-xl text-[#ffffff] bg-[#000000] leading-normal tracking-[0.015em] hover:bg-[#ffffff] hover:text-[#000000] transition duration-300 ease-in-out">
                  <span className="flex items-center gap-2">
                    <MdOutlineMailOutline />
                    Email
                  </span>
                </button>
              </a>

              <a
                href="https://forms.gle/WoaTgzZk2sNFwk136"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto"
              >
                <button className="px-6 md:px-8 py-3 md:py-5 rounded-full text-base md:text-xl text-[#ffffff] bg-[#000000] leading-normal tracking-[0.015em] hover:bg-[#ffffff] hover:text-[#000000] transition duration-300 ease-in-out">
                  <span className="flex items-center gap-2">
                    <FaWpforms />
                    Forms
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
