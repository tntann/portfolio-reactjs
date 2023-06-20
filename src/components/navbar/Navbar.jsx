import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#282C33]">
        <div className="max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
          <div className="left flex gap-2 items-center font-bold text-white text-base">
            {/* logo */}
            <div className="img">
              <img src="./images/Logo.png" alt="" />
            </div>
            Tntan
          </div>
          <div className="right flex items-center">
            <div className="menu flex">
              <a href="#">
                <li className="text-[#ABB2BF] list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>home
                </li>
              </a>
              <a href="#">
                <li className="text-[#ABB2BF] list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>work
                </li>
              </a>
              <a href="#">
                <li className="text-[#ABB2BF] list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>about-me
                </li>
              </a>
              <a href="#">
                <li className="text-[#ABB2BF] list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>contacts
                </li>
              </a>
            </div>
            {/* CLOSE&OPEN btn */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
