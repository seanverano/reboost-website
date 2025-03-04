import logo from "../../assets/images/logo.png";
import fazier_badge from "../../assets/images/fazier_badge.svg";
import chrome_featured from "../../assets/images/chrome_featured.png";
import Navbar from "../navbars/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative flex flex-col md:flex-row w-full min-h-screen"
      >
        <Navbar />
        <div className="mt-10 font-manrope w-full md:w-[40%] bg-[#EEF8FB] flex justify-center items-center pt-10 pb-5 md:py-0">
          <div
            className="flex gap-4 flex-col justify-center items-center z-10"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src={logo}
              alt="Reboost Logo"
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
            />
            <h1 className="text-center font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
              Reboost
            </h1>
            <a
              href="https://chromewebstore.google.com/detail/reboost-hydration-tracker/bdlffpdkioakgjjpmgpboogfiaegbpgp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-col justify-center"
            >
              <img
                src={chrome_featured}
                width="250"
                alt="Example Image"
                class=" rounded img-fluid w-full max-w-[160px] lg:max-w-[250px]"
              />
              <p className="text-xs md:text-sm flex justify-center font-semibold text-[#1A65D7] mb-2">
                on the Chrome Web Store
              </p>
            </a>
            <a
              href="https://fazier.com/launches/reboost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fazier_badge}
                width="250"
                alt="Example Image"
                class="rounded img-fluid w-full max-w-[160px] lg:max-w-[250px]"
              />
            </a>
          </div>
        </div>
        <div
          className="w-full md:w-[60%] bg-[#EEF8FB] flex flex-col gap-4 md:gap-7 justify-center text-center md:text-left px-4 md:px-0 pb-10 md:pb-0"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="font-playfair text-[#000000] text-3xl md:text-7xl font-semibold md:ml-12 leading-snug mt-6 md:mt-12">
            Refresh and Boost your well-being
          </h1>
          <p className="font-manrope text-[#000000] text-base md:text-lg md:ml-12 font-normal flex flex-col px-4 md:px-0">
            Chrome extension for hydration tracking and custom reminders.{" "}
            <span>
              Helping you improve your health and productivity, one habit at a
              time.
            </span>
          </p>
          <div className="font-manrope flex flex-col md:flex-row gap-4 md:gap-5 items-center text-base font-bold text-center mt-5 md:ml-12 px-4 md:px-0">
            <div className="flex flex-row gap-1 items-center font-manrope text-[#000000] font-normal text-sm">
              Get it for free on the Chrome Web Store now!
            </div>
            <a
              href="https://chromewebstore.google.com/detail/reboost/bdlffpdkioakgjjpmgpboogfiaegbpgp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="lg:text-xl group relative inline-flex items-center px-6 py-3 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-10">
                <span>Add to Chrome</span>
                <FaArrowUpRightFromSquare className="items-center text-xl absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
