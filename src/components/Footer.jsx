import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex items-center bg-[#E8F8EE] py-8">
        <div className="w-[50%] flex justify-start text-base font-bold text-center ml-5">
          <ul className="flex flex-row items-center list-none font-manrope">
            <li className="mx-6">
              <button className="group relative inline-flex items-center px-3 py-2 text-[#019963] bg-transparent leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-9">
                <span>PRIVACY POLICY</span>
                <FaArrowUpRightFromSquare className="absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </li>
            <li className="mx-6">
              <button className="group relative inline-flex items-center px-3 py-2  text-[#019963] bg-transparent leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-9">
                <span>RESOURCES</span>
                <FaArrowUpRightFromSquare className="absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </li>
          </ul>
        </div>
        <div className="w-[50%] flex justify-end text-base font-bold text-center font-manrope mr-10">
          <ul className="flex flex-row items-center gap-4">
            {" "}
            <li className="font-normal text-base leading-tight tracking-[+0.05em] text-[#000000]">
              Developed by Sean Dustin Verano © 2024. All rights reserved.
            </li>
            <li className="transition duration-300 ease-in-out">
              <a
                href="https://github.com/seanverano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#019963] text-[#ffffff] hover:text-[#019963] hover:bg-[transparent]"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li className="transition duration-300 ease-in-out">
              <a
                href="https://www.linkedin.com/in/sdverano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#019963] text-[#ffffff] hover:text-[#019963] hover:bg-[transparent]"
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
