import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const viewResources = () => navigate("/resources");
  const viewPrivacyPolicy = () => navigate("/privacy-policy");

  return (
    <div className="flex flex-col md:flex-row items-center bg-[#E8F8EE] py-8 pt-20 px-4 md:px-0">
      <div className="hidden md:flex w-[50%] justify-start">
        <ul className="text-lg flex flex-row items-center font-manrope ml-10">
          <li className="mx-6">
            <button
              onClick={viewPrivacyPolicy}
              className="font-normal group relative inline-flex items-center px-3 py-2 text-[#323232] bg-transparent leading-normal tracking-[0.015em] transform hover:scale-105 transition-transform duration-300 ease-linear"
            >
              PRIVACY POLICY
            </button>
          </li>
          <li className="mx-6">
            <button
              onClick={viewResources}
              className="font-normal group relative inline-flex items-center px-3 py-2 text-[#323232] bg-transparent leading-normal tracking-[0.015em] transform hover:scale-105 transition-transform duration-300 ease-linear"
            >
              RESOURCES
            </button>
          </li>
        </ul>
      </div>
      <div className="xl:mr-10 sm:mr-10 w-full md:w-[50%] flex flex-col md:flex-row justify-center md:justify-end items-center md:space-y-0 md:space-x-4">
        <div className="flex flex-col font-manrope text-center md:text-right font-normal text-sm md:text-base 2xl:text-xl leading-normal tracking-[0.015em] text-[#000000] md:mb-0">
          <div className="flex flex-row">
            Built with 🥛 by{" "}
            <a
              href="https://seanverano.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text font-semibold ml-1 mr-1 hover:text-black"
            >
              SDV
            </a>
          </div>{" "}
          <span> © 2024-2025</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/sdverano"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 rounded-full bg-[transparent] text-[#000000] transform hover:scale-110 transition-transform duration-300 ease-linear"
          >
            <FaLinkedin size={24} className="md:size-20" />
          </a>
          <a
            href="https://github.com/seanverano"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 rounded-full bg-[transparent]  text-[#000000] transform hover:scale-110 transition-transform duration-300 ease-linear"
          >
            <FaGithub size={24} className="md:size-20" />
          </a>
          <a
            href="https://x.com/_seanverano"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 rounded-full bg-[transparent]  text-[#000000] transform hover:scale-110 transition-transform duration-300 ease-linear"
          >
            <FaSquareXTwitter size={24} className="md:size-20" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
