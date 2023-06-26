import React from "react";
import {
  BiLogoFacebookSquare,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoInstagram,
  BiSolidPhoneCall,
} from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ContactPageSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10">
        <div className="mb-12">
          <div className=" text-white w-2/3 font-semibold text-[32px] mt-12">
            <div className="">
              <NavLink to="/">
                <span className="text-[#C778DD] hover:text-[#C778DD99]">
                  {" "}
                  {"<"}~~{" "}
                </span>
              </NavLink>
              <span>Contacts</span>
              {/* h2 title */}
              <div className=" text-[#C778DD] mt-[45px] mb-[46px] text-xl">
                DON'T BE SHY !
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="flex items-start flex-wrap justify-between gap-10">
          {/* left */}
          <div className="left w-full md:w-1/2">
            <p className="text-[#ABB2BF]">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>
          {/* right */}
          <div className="mx-auto">
            {/* box */}
            <div className="border border-[#ABB2BF] p-4">
              <h2 className="mb-4 text-white font-semibold">Message me here</h2>
              {/* get in touch */}
              <div className="">
                {/* link */}
                <div className="flex gap-2 items-center">
                  <FaLocationDot className=" w-5 h-5 text-[#ABB2BF] hover:text-[#C778DD] cursor-pointer" />
                  <span className="text-[#ABB2BF]">Da Nang, Viet Nam</span>
                </div>
                <div className="flex gap-2 items-center">
                  <BiSolidPhoneCall className=" w-5 h-5 text-[#ABB2BF] hover:text-[#C778DD] cursor-pointer" />
                  <span className="text-[#ABB2BF]">0963300334</span>
                </div>
                <div className="flex gap-2 items-center">
                  <a href="https://github.com/tntann">
                    <BiLogoGithub className=" w-5 h-5 text-[#ABB2BF] hover:text-[#C778DD]" />
                  </a>
                  <span className="text-[#ABB2BF]">tntann</span>
                </div>
                <div className="flex gap-2 items-center">
                  <a href="https://mail.google.com/">
                    <BiLogoGmail className=" w-5 h-5 text-[#ABB2BF] hover:text-[#C778DD]" />
                  </a>
                  <span className="text-[#ABB2BF]">nhattan8421@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* all media */}
        <div className="mt-6 mb-5">
          {/* title */}
          <div className="text-[32px] font-medium text-white">
            <span className="text-[#C778DD]">#</span>all-media
          </div>
          {/* media */}
          <div className="flex gap-6 mt-6 mb-5">
            <div className=" text-[#ABB2BF] flex items-center gap-1">
              <a href="https://www.facebook.com/Tnhattan">
                <BiLogoFacebookSquare className="w-6 h-6 text-[#ABB2BF] hover:text-[#C778DD]" />
              </a>
              <span>Tnhattan</span>
            </div>
            <div className=" text-[#ABB2BF] flex items-center gap-1">
              <a href="https://www.instagram.com/naht.taan_/">
                <BiLogoInstagram className="w-6 h-6 text-[#ABB2BF] hover:text-[#C778DD]" />
              </a>
              <span>naht.taan</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageSec;
