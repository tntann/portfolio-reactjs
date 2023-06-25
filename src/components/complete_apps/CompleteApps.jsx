import React from "react";
import { NavLink } from "react-router-dom";
import { ProjectsData } from "../../ProjectsData";
import ProjectCard from "../project_card/ProjectCard";

const CompleteApps = () => {
  return (
    <>
      <div className="pt-[114px] px-5 max-w-[1560px] mx-auto">
        {/* top title */}
        <div className="">
          {/* projects */}
          <div className="text-white font-bold text-[32px]">
            <NavLink to="/">
              <span className="text-[#C778DD] hover:text-[#C778DD99]">
                {" "}
                {"<"}~~{" "}
              </span>
            </NavLink>
            <span>projects</span>
          </div>
          {/* list projects */}
          <div className="text-white mt-[14px]">List of my projects</div>
          {/* completed task */}
          <div className="div">
            {/* title */}
            <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px]">
              <span className="text-[#C778DD]">#</span>
              <span>complete-apps</span>
            </div>
            {/* projects */}
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
        </div>
      </div>
    </>
  );
};

export default CompleteApps;
