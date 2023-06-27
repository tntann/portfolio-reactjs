import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#282C33] z-10">
        <div className="px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
          <div className="left flex gap-2 items-center font-bold text-white text-base">
            {/* logo */}
            <div className="img">
              <NavLink
                to="/"
                className="flex flex-wrap justify-between items-center gap-2"
              >
                <img src="./images/Logo.png" alt="" />
                Tntan
              </NavLink>
            </div>
          </div>
          <div className="right flex items-center">
            <div
              className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${
                !toggle
                  ? ` right-[-100%] top-0 bottom-0`
                  : ` right-0 top-0 bottom-0`
              } bg-[#282C33] md:static`}
            >
              <NavLink to="/">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 hover:text-white">
                  <span className="text-[#C778DD] font-medium">#</span>home
                </li>
              </NavLink>
              <NavLink to="/projects">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 hover:text-white">
                  <span className="text-[#C778DD] font-medium">#</span>projects
                </li>
              </NavLink>
              <NavLink to="/about">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 hover:text-white">
                  <span className="text-[#C778DD] font-medium">#</span>about-me
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 hover:text-white">
                  <span className="text-[#C778DD] font-medium">#</span>contacts
                </li>
              </NavLink>
              <div
                onClick={() => setToggle(false)}
                className="close absolute block md:hidden right-3 top-3"
              >
                <FaXmark className=" w-10 h-10 text-[#ABB2BF] hover:text-[#C778DD]" />
              </div>
            </div>
            {/* CLOSE&OPEN btn */}
            <div onClick={() => setToggle(true)} className="">
              <div className="open block md:hidden w-8">
                <IoMenuSharp className="w-8 h-8 text-[#D9D9D9] hover:text-[#C778DD]"></IoMenuSharp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
