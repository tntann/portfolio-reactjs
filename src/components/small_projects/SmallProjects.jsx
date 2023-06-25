import React, { Fragment } from "react";
import { SmallProjectsData } from "../../SmallData";

const SmallProjects = () => {
  return (
    <div className="pt-[80px] px-5 max-w-[1560px] mx-auto">
      {/* title */}
      <div className="">
        <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px]">
          <span className="text-[#C778DD]">#</span>
          <span>small-projects</span>
        </div>
      </div>
      {/* body cards */}
      <div className="cards flex justify-center flex-wrap gap-4">
        {SmallProjectsData.map((item) => {
          return (
            <Fragment key={item.id}>
              {/* card */}
              <div className="card max-w-[331px] w-full border border-[#ABB2BF]">
                {/* skills */}
                <div className=" border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
                  {item.languages.map((e, index) => {
                    return <span key={index}>{e} </span>;
                  })}
                </div>
                {/* desc */}
                <div className="desc p-4">
                  <h2 className="text-white font-medium text-2xl">
                    {item.title}
                  </h2>
                  <p className="text-[#ABB2BF] py-4">{item.body}</p>

                  <button className="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-200">
                    <a href="https://github.com/tntann">
                      Github {"<"}~{">"}
                    </a>
                  </button>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SmallProjects;
