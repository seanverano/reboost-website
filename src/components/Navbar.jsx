import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="fixed z-50 w-full font-manrope">
      <nav className="relative w-full z-10 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="w-full bg-[transparent]" />
        </div>

        <div className="relative flex items-center justify-between px-11 mt-5 w-full">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-center font-extrabold text-2xl bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
                Reboost
              </h1>
            </Link>
          </div>

          <ul className="flex flex-row items-center list-none ml-auto">
            <li className="mx-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <HashLink className="font-normal text-base leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer">
                HOME
              </HashLink>
            </li>
            <li className="mx-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <HashLink className="font-normal text-base leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer">
                FEATURES
              </HashLink>
            </li>
            <li className="mx-6 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <HashLink className="font-normal text-base leading-tight tracking-[+0.05em] text-[#323232] cursor-pointer">
                CONTACT
              </HashLink>
            </li>
            <li className="mx-4 flex">
              <div className="text-base font-bold text-center">
                <button className="group relative inline-flex items-center px-3 py-2 rounded-lg text-[#ffffff] bg-gradient-to-r from-[#1CABE3] to-[#80D261] leading-normal tracking-[0.015em] transition-all duration-300 hover:pr-9">
                  <span>Add to Chrome</span>
                  <FaArrowUpRightFromSquare className="absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base group-hover:translate-x-0 group-hover:opacity-100" />
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
