import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div data-aos="zoom-in" className="w-10/12 mx-auto sm:w-8/12">
          <h1 className=" font-semibold text-[32px] text-white mb-3">
            Hi, I am Nhat Tan <span className=" text-[#C778DD]"> - </span>
            <span className=" text-[#C778DD]"> front-end developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            I Know That Strong Mind-Set Means Strong Successful
          </p>
          <NavLink to="/contact">
            <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
              Contact me!!
            </button>
          </NavLink>
        </div>
        <div data-aos="zoom-in" className="mx-auto">
          <div className="">
            <img
              className="w-full max-sm:w-[90%] mx-auto h-[400px] object-cover"
              src="./images/tantn.png"
              alt="avt"
            />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className=" w-4 h-4 bg-[#C778DD]"></div>
            <div className="">
              Contact work with me by <span className="text-white">Email</span>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-down" data-aos-delay="500" className="px-5 py-10 ">
        <img className="mx-auto" src="./images/quote.png" alt="" />
      </div>
    </>
  );
};

export default About;
