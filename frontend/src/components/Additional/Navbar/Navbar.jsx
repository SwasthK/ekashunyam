import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="transition-all">
        <nav class="fixed w-screen z-20 top-0 start-0 border-btext">
          {/* <nav class="fixed w-screen z-20 top-0 start-0 border-btext shadow-xl backdrop-blur-xl border-[0.8]"> */}
          <div class="flex flex-wrap items-center justify-between mx-auto xl:mx-0 p-4 text-white ">
            <div className="flex items-center space-x-3 rtl:space-x-reverse border ml-10 px-3 ">
              LOGO
            </div>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={() => navigate("/register")}
                type="button"
                className="bg-white w-full py-2 md:mr-8 md:px-8 text-xm  px-3 font-megatron rounded-md animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium  text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 "
              >
                Register
              </button>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
                onClick={() => {
                  setshowMenu(!showMenu);
                }}
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            <div
              class="bg-opacity-0 shadow-xl backdrop-blur-xl border-[0.8] border-opacity-20 flex-col cursor-pointer  hover:backdrop-blur-3xl transition-all duration-500 items-center justify-center hidden w-full md:flex md:w-96  border-white md:py-2 md:rounded-full "
              //   bg-opacity-0 shadow-xl backdrop-blur-3xl border-[0.8] border-opacity-20  flex items-center justify-evenly flex-col cursor-pointer  hover:backdrop-blur-md transition-all duration-500 ease-in-out
              id="navbar-sticky"
            >
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <Link
                    to={"/"}
                    class="block py-2  transition-all duration-1000 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    <p className="text-white font-megatron tracking-wider hover:text-yellow-500 transition-all duration-300">
                      Home
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to={"https://www.sdmcujire.in/"}
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <p className="text-white font-megatron tracking-wider hover:text-yellow-500  transition-all duration-300">
                      About
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <p className="text-white font-megatron tracking-wider hover:text-yellow-500 transition-all duration-300">
                      Contact
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {showMenu && (
            <div className="text-white px-16 mt-2 mb-4 flex gap-11 justify-between md:hidden">
              <Link className="hover:text-yellow-400 transition-all duration-300">
                <p className=" font-megatron -tracking-[-2px] ">HOME</p>
              </Link>
              <Link
                target="_blank"
                to={"https://www.sdmcujire.in/"}
                className="hover:text-yellow-400 transition-all duration-300"
              >
                <p className=" font-megatron -tracking-[-2px] ">About</p>
              </Link>
              <Link className="hover:text-yellow-400 transition-all duration-300">
                <p className=" font-megatron -tracking-[-2px] ">Contact</p>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
