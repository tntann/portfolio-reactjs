import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div
        data-aos="zoom-in"
        className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0"
      >
        {/* img */}
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="w-full object-cover transition duration-300 ease-in-out hover:scale-125 cursor-zoom-in"
            src={props.img}
            alt=""
          />
        </div>
        {/* skill */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {props.langs.map((item, index) => {
            return (
              <span className="text-[#ABB2BF]" key={index}>
                {item}
              </span>
            );
          })}
        </div>
        {/* desc */}
        <div className=" p-4">
          <h2 className=" text-[#FFFFFF] text-2xl font-medium">
            {props.title}
          </h2>
          <p className=" py-4 text-[#ABB2BF]">{props.desc}</p>
          {/* btns */}
          <div className="">
            <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-200">
              <a href={props.link}>
                Live {"<"}~{">"}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
