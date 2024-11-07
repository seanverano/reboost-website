import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/logo.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="fixed top-4 z-50 w-full font-manrope">
      <nav className="bg-[#ECEEEE] bg-opacity-50 backdrop-filter backdrop-blur-lg saturate-180 rounded-full shadow-lg mx-auto w-[90%] z-10">
        <div className="flex items-center justify-between px-9 py-2">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Reboost Logo" className="w-20 h-auto" />
            </Link>
          </div>

          <ul className="flex flex-row items-center list-none ml-auto">
            <li className="mx-2  transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <HashLink className="text-sm text-[#323232] cursor-pointer">
                Home
              </HashLink>
            </li>
            <li className="mx-2 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <HashLink className="text-sm text-[#323232] cursor-pointer">
                Features
              </HashLink>
            </li>
            <li className="mx-2 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <HashLink className="text-sm text-[#323232] cursor-pointer">
                Contact
              </HashLink>
            </li>
            <li className="mx-2 flex">
              <div className="text-sm font-bold text-center">
                <button
                  className="group relative inline-flex items-center px-3 py-2 rounded-lg text-[#F8F2F0] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300
                     hover:pr-9"
                >
                  <span>Get Started</span>
                  <FaArrowUpRightFromSquare
                    className="absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base
                       group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
