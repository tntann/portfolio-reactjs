import React from "react";
import "./project.css";
import ProjectCard from "../project_card/ProjectCard";
import { NavLink } from "react-router-dom";
import { ProjectsData } from "../../ProjectsData";

const Project = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <NavLink to="./projects">
              <span className="hover:text-[#C778DD]">View all ~~&gt;</span>
            </NavLink>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* card */}
          {ProjectsData.map((item) => {
            return (
              <ProjectCard
                key={item.id}
                img={item.img}
                langs={item.langs}
                title={item.title}
                desc={item.desc}
                link={item.link}
              ></ProjectCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
