import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUpRightFromSquare, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const NavbarTwo = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const viewHome = () => navigate("/");
  const viewPrivacyPolicy = () => navigate("/privacy-policy");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed z-50 w-full font-manrope">
      <nav className="relative w-full z-10 rounded-lg overflow-hidden">
        <div className="relative flex items-center justify-between px-4 md:px-11 mt-5 w-full">
          <div className="flex items-center">
            <h1 className="2xl:text-4xl text-center font-extrabold text-2xl bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
              Reboost
            </h1>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#323232] focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <ul className="hidden md:flex flex-row items-center list-none ml-auto">
            <li className="mx-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <button
                onClick={viewHome}
                className="2xl:text-2xl font-normal text-base leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer"
              >
                HOME
              </button>
            </li>
            <li className="mx-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <button
                onClick={viewPrivacyPolicy}
                className="2xl:text-2xl font-normal text-base leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer"
              >
                PRIVACY POLICY
              </button>
            </li>
            <li className="mx-4 flex">
              <div className="text-base 2xl:text-xl font-bold text-center">
                <a
                  href="https://chromewebstore.google.com/detail/reboost/bdlffpdkioakgjjpmgpboogfiaegbpgp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="group relative inline-flex items-center px-3 py-2 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-9">
                    <span>Chrome Web Store</span>
                    <FaArrowUpRightFromSquare className="absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                </a>
              </div>
            </li>
          </ul>

          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-[#E8F8EE] z-40 top-0 left-0 w-full h-full">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <button
                  onClick={() => {
                    viewHome();
                    closeMenu();
                  }}
                  className="text-2xl font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  HOME
                </button>
                <button
                  onClick={() => {
                    viewPrivacyPolicy();
                    closeMenu();
                  }}
                  className="text-2xl font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  PRIVACY POLICY
                </button>
                <button className="font-bold group relative inline-flex items-center px-6 py-3 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-12">
                  <span>Chrome Web Store</span>
                  <FaArrowUpRightFromSquare className="absolute left-[calc(100%-40px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base group-hover:translate-x-0 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavbarTwo;
