import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars } from "react-icons/fa6";
import chrome_web_store from "../../assets/images/chrome_web_store.png";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
                className="2xl:text-2xl font-normal text-base leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer"
              >
                HOME
              </HashLink>
            </li>
            <li className="mx-6 transform hover:scale-105 transition-transform duration-300 ease-linear">
              <HashLink
                to="#features"
                smooth
                className="2xl:text-2xl font-normal text-base leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer"
              >
                FEATURES
              </HashLink>
            </li>
            <li className="2xl:text-2xl mx-6 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-linear">
              <HashLink
                to="#contact"
                smooth
                className="2xl:text-2xl font-normal text-base leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer"
              >
                CONTACT
              </HashLink>
            </li>
            <li className="mx-4 flex">
              <div className="text-base 2xl:text-xl font-bold text-center">
                <a
                  className="hover:bg-[#ffffff] border-2 border-transparent rounded-xl inline-block transition-all duration-300"
                  href="https://chromewebstore.google.com/detail/reboost/bdlffpdkioakgjjpmgpboogfiaegbpgp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={chrome_web_store}
                    width="250"
                    alt="Check it on Chrome Web Store"
                    class="d-inline-block rounded img-fluid"
                  />
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
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <HashLink
                  to="#home"
                  smooth
                  onClick={closeMenu}
                  className="text-2xl font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  HOME
                </HashLink>
                <HashLink
                  to="#features"
                  smooth
                  onClick={closeMenu}
                  className="text-2xl font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  FEATURES
                </HashLink>
                <HashLink
                  to="#contact"
                  smooth
                  onClick={closeMenu}
                  className="text-2xl font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  CONTACT
                </HashLink>
                <button
                  onClick={() => {
                    viewResources();
                    closeMenu();
                  }}
                  className="text-2xl font-normal leading-tight tracking-[+0.05em] text-[#323232]"
                >
                  RESOURCES
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
                <a
                  className="hover:bg-[#ffffff] border-2 border-transparent rounded-xl inline-block transition-all duration-300"
                  href="https://chromewebstore.google.com/detail/reboost/bdlffpdkioakgjjpmgpboogfiaegbpgp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={chrome_web_store}
                    width="250"
                    alt="Check it on Chrome Web Store"
                    class="d-inline-block rounded img-fluid"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
