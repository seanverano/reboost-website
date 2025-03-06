import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars } from "react-icons/fa6";
import { FiGithub, FiChrome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const viewResources = () => navigate("/resources");
  const viewPrivacyPolicy = () => navigate("/privacy-policy");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <li className="mx-6 transform hover:scale-105 transition-transform duration-300 ease-linear">
              <HashLink
                to="#home"
                smooth
                className=" font-normal text-lg leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer"
              >
                HOME
              </HashLink>
            </li>
            <li className="mx-6 transform hover:scale-105 transition-transform duration-300 ease-linear">
              <HashLink
                to="#features"
                smooth
                className="font-normal text-lg leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer"
              >
                FEATURES
              </HashLink>
            </li>
            <li className=" mx-6 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-linear">
              <HashLink
                to="#contact"
                smooth
                className="font-normal text-lg leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer"
              >
                CONTACT
              </HashLink>
            </li>
            <li className="mx-4 flex">
              <div className="flex flex-row gap-2 font-semibold">
                <a
                  href="https://chromewebstore.google.com/detail/reboost/bdlffpdkioakgjjpmgpboogfiaegbpgp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="lg:text-xl group relative inline-flex items-center px-6 py-3 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-10">
                    <span>Add to Chrome</span>
                    <FiChrome className="items-center text-xl absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                </a>

                <a
                  href="https://github.com/seanverano/reboost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="lg:text-xl group relative inline-flex items-center px-6 py-3 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-10">
                    <span>Star on Github</span>
                    <FiGithub className="items-center text-xl absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                </a>
              </div>
            </li>
          </ul>
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-[#EEF8FB] z-40 top-0 left-0 w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
              }}
            >
              <button
                onClick={closeMenu}
                className="absolute top-5 right-4 text-[#323232] focus:outline-none"
              >
                <FaTimes size={24} />
              </button>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <HashLink
                  to="#home"
                  smooth
                  onClick={closeMenu}
                  className="text-lg font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  HOME
                </HashLink>
                <HashLink
                  to="#features"
                  smooth
                  onClick={closeMenu}
                  className="text-lg font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  FEATURES
                </HashLink>
                <HashLink
                  to="#contact"
                  smooth
                  onClick={closeMenu}
                  className="text-lg font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  CONTACT
                </HashLink>
                <button
                  onClick={() => {
                    viewResources();
                    closeMenu();
                  }}
                  className="text-lg font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  RESOURCES
                </button>
                <button
                  onClick={() => {
                    viewPrivacyPolicy();
                    closeMenu();
                  }}
                  className="text-lg font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  PRIVACY POLICY
                </button>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://chromewebstore.google.com/detail/reboost/bdlffpdkioakgjjpmgpboogfiaegbpgp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="font-semibold text-lg lg:text-xl group relative inline-flex items-center px-6 py-3 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-10">
                      <span>Add to Chrome</span>
                      <FiChrome className="items-center text-xl absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </button>
                  </a>

                  <a
                    href="https://github.com/seanverano/reboost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="font-semibold text-lg lg:text-xl group relative inline-flex items-center px-6 py-3 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-10">
                      <span>Star on Github</span>
                      <FiGithub className="items-center text-xl absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
