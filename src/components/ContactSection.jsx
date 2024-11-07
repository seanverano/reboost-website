import { FaWpforms } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactSection = () => {
  return (
    <>
      <section className="flex flex-col justify-center w-full h-[150vh] bg-[#EEF8FB] gap-20">
        <h1 className="font-playfair text-[#000000] text-8xl font-semibold px-5 leading-snug text-center">
          Stay{" "}
          <span className="bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
            Healthy{" "}
          </span>
          and{" "}
          <span className="bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
            Hydrated
          </span>
          <div className="flex flex-col items-center mt-4 text-9xl">
            Get in Touch!
          </div>
        </h1>
        <p className="text-center font-manrope text-[#000000] text-2xl font-normal mt-20">
          Email me your thoughts or share feedback and report bugs through
          Google Forms.
        </p>
        <div className="flex flex-row justify-center gap-5 font-manrope font-bold">
          <button className="flex flex-row items-center justify-center w-[300px] py-10 rounded-full text-2xl text-[#ffffff] bg-[#1CABE3] leading-normal tracking-[0.015em] hover:text-[#1CABE3] hover:bg-[transparent]">
            <span className="flex items-center gap-2">
              <MdOutlineMailOutline />
              Email
            </span>
          </button>
          <button className="flex flex-row items-center justify-center w-[300px] py-10 rounded-full text-2xl text-[#ffffff] bg-[#019963] leading-normal tracking-[0.015em] hover:text-[#019963] hover:bg-[transparent]">
            <span className="flex items-center gap-2">
              <FaWpforms />
              Google Forms
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
