import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex items-center bg-[#EEF8FB] py-8">
        <div className="w-[50%] flex justify-center text-base font-bold text-center">
          <ul className="flex flex-row items-center list-none font-manrope">
            <li className="mx-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <button className="group relative inline-flex items-center px-3 py-2 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-9">
                <span>PRIVACY POLICY</span>
                <FaArrowUpRightFromSquare className="absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </li>
            <li className="mx-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <button className="group relative inline-flex items-center px-3 py-2 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-9">
                <span>RESOURCES</span>
                <FaArrowUpRightFromSquare className="absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </li>
          </ul>
        </div>
        <div className="w-[50%] flex justify-center font-manrope">
          <ul className="flex flex-row items-center space-x-6">
            {" "}
            <li className="font-normal text-base leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer">
              Developed by SEAN DUSTIN VERANO
            </li>
            <li className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <a
                href="https://github.com/seanverano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#323232] text-white"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <a
                href="https://www.linkedin.com/in/sdverano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0077B5] text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
