import React from "react";
import { NavLink } from "react-router-dom";

const AboutPageSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
        {/* title */}
        <div data-aos="fade-right" className="mb-12">
          <div className=" text-white w-2/3 font-semibold text-[32px] mt-12">
            <div className="">
              <NavLink to="/">
                <span className="text-[#C778DD] hover:text-[#C778DD99]">
                  {" "}
                  {"<"}~~{" "}
                </span>
              </NavLink>
              <span>about-me</span>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between items-center gap-10">
          {/* left */}
          <div data-aos="fade-right" className=" md:w-[48%] w-full">
            {/* desc */}
            <p className="text-[#ABB2BF] w-10/12 mx-auto">
              Hi, I{"'"}m Tran Nhat Tan.
              <br />
              <br />I{"'"}m a 4rd year IT student at the University of
              Information Technology and Communication Vietnam-Korea.
              <br />
              <br />
              Hi, i am Tan as a 4rd year IT student at the University of
              Information Technology and Communication Vietnam-Korea.
              <br />
              <br />
              Hi, i am Tan as a 4rd year IT student at the University of
              Information Technology and Communication Vietnam-Korea.
              <br />
              <br />
            </p>
          </div>
          {/* right */}
          <div data-aos="zoom-in" className="mx-auto">
            <img
              className="w-full max-sm:w-[90%] mx-auto h-[400px] rounded object-cover shadow-md"
              src="./images/me.jpg"
              alt="about-me"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPageSec;
