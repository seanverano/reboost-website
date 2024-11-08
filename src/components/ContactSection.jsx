import { FaWpforms } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactSection = () => {
  return (
    <>
      <section className="flex flex-col justify-center w-full h-[140vh] bg-[#E8F8EE] gap-20">
        <h1 className="font-playfair text-[#000000] text-8xl font-semibold px-5 leading-snug text-center mx-20">
          Stay{" "}
          <span className="bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
            healthy{" "}
          </span>
          and{" "}
          <span className="bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
            hydrated
          </span>
          <div className="flex flex-col items-center mt-4 text-9xl">
            Get in Touch!
          </div>
        </h1>
        <div className="flex justify-center items-center flex-col mx-60 rounded-[2rem] bg-gradient-to-r from-[#1CABE3] to-[#80D261]">
          <div className="flex justify-center flex-col w-[85%] h-[75%] py-20 bg-white/10 border border-white/20 rounded-[2rem] backdrop-blur-sm shadow-md">
            <p className="text-center font-manrope text-[#ffffff] text-xl font-semibold mt-10 mb-20 mx-10">
              Email me your thoughts or share feedback and report bugs through
              Google Forms.
            </p>
            <div className="flex flex-row justify-center gap-5 font-manrope font-bold mb-10">
              <a href="mailto:verano.seandustin@gmail.com">
                <button className="flex flex-row items-center border border-transparent justify-center w-[250px] py-5 rounded-full text-3xl text-[#ffffff] bg-[#000000] leading-normal tracking-[0.015em] hover:text-[#000000] hover:bg-[transparent] hover:border hover:border-black/50 transition duration-300 ease-in-out">
                  <span className="flex items-center gap-2">
                    <MdOutlineMailOutline />
                    Email
                  </span>
                </button>
              </a>

              <button className="flex flex-row items-center justify-center border border-transparent w-[250px] py-5 rounded-full text-3xl text-[#000000] bg-[#ffffff] leading-normal tracking-[0.015em] hover:text-[#ffffff] hover:bg-[transparent] hover:border hover:border-white/50 transition duration-300 ease-in-out">
                <span className="flex items-center gap-2">
                  <FaWpforms />
                  Forms
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
