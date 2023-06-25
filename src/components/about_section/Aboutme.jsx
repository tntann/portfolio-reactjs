import React from "react";
import { NavLink } from "react-router-dom";

const Aboutme = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className="flex flex-wrap justify-between items-center gap-10">
          {/* left */}
          <div className=" md:w-[48%] w-full">
            {/* title */}
            <div className="mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
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
            {/* button */}
            <div className="mt-7 w-10/12 mx-auto">
              <NavLink
                to="/about"
                className="hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white"
              >
                <button>Read more -&gt;</button>
              </NavLink>
            </div>
          </div>
          {/* right */}
          <div className="mx-auto">
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

export default Aboutme;
