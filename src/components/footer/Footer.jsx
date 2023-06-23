import React from "react";
import {
  BiLogoFacebookSquare,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#C778DD] mt-20 mb-8"></div>
      {/* footer */}
      <div className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto">
            <div className=" flex items-center gap-8 mb-3 flex-wrap">
              {/* logo */}
              <div className="">
                <a
                  href="#"
                  className="flex gap-2 items-center text-2xl text-white font-bold"
                >
                  <img src="./images/Logo.png" alt="logo" />
                  <span className="hover:text-[#C778DD]">Tntan</span>
                </a>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">nhattan8421@gmail.com</span>
            </div>
            {/* desc */}
            <div className="">
              <p className="text-white">
                Hi, I am Nhat Tan - front-end developer
              </p>
            </div>
          </div>
          {/* right */}
          <div className="mx-auto">
            {/* titlle */}
            <h2 className="text-white text-2xl font-medium mb-3 text-center">
              Media
            </h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/Tnhattan/">
                <BiLogoFacebookSquare className=" w-6 h-6 text-[#ABB2BF] hover:text-[#C778DD]" />
              </a>
              <a href="https://github.com/tntann">
                <BiLogoGithub className=" w-6 h-6 text-[#ABB2BF] hover:text-[#C778DD]" />
              </a>
              <a href="https://mail.google.com/">
                <BiLogoGmail className=" w-6 h-6 text-[#ABB2BF] hover:text-[#C778DD]" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2023. Made by tntan
        </div>
      </div>
    </>
  );
};

export default Footer;
