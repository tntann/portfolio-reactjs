import React from "react";
import { BiSolidPhoneCall, BiLogoGmail, BiLogoGithub } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className="">
          {/* header */}
          <div className="mb-10">
            <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>contacts
              </div>
              <div className="line w-1/3 h-px bg-[#C778DD]"></div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="flex items-start flex-wrap justify-between gap-10">
          {/* left */}
          <div className="left w-full md:w-1/2">
            <p className="text-[#ABB2BF]">
              I{"'"}m interested in freelance opportunities. However, if you
              have other request or question, don{"'"}t hesitate to contact me
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
      </div>
    </>
  );
};

export default Contact;
