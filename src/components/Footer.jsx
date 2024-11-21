import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const viewResources = () => navigate("/resources");
  const viewPrivacyPolicy = () => navigate("/privacy-policy");

  return (
    <div className="flex flex-col md:flex-row items-center bg-[#E8F8EE] py-8 px-4 md:px-0">
      <div className="hidden md:flex w-[50%] justify-start">
        <ul className="2xl:text-2xl flex flex-row items-center font-manrope ml-10">
          <li className="mx-6">
            <button
              onClick={viewPrivacyPolicy}
              className="font-normal group relative inline-flex items-center px-3 py-2 text-[#323232] bg-transparent leading-normal tracking-[0.015em] transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              PRIVACY POLICY
            </button>
          </li>
          <li className="mx-6">
            <button
              onClick={viewResources}
              className="font-normal group relative inline-flex items-center px-3 py-2 text-[#323232] bg-transparent leading-normal tracking-[0.015em] transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              RESOURCES
            </button>
          </li>
        </ul>
      </div>
      <div className="xl:mr-10 sm:mr-10 w-full md:w-[50%] flex flex-col md:flex-row justify-center md:justify-end items-center md:space-y-0 md:space-x-4">
        <div className="flex flex-col font-manrope text-center md:text-right font-normal text-sm md:text-base 2xl:text-xl leading-tight tracking-[+0.05em] text-[#000000] md:mb-0">
          Developed by Sean Dustin Verano{" "}
          <span>All Rights Reserved © 2024</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/sdverano"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 md:w-12 md:h-12 rounded-full bg-[transparent] text-[#1CABE3]"
          >
            <FaLinkedin size={24} className="md:size-24" />
          </a>
          <a
            href="https://github.com/seanverano"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 md:w-12 md:h-12 rounded-full bg-[transparent] text-[#019963]"
          >
            <FaGithub size={24} className="md:size-24" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
