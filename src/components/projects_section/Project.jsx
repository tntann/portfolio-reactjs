import React from "react";
import "./project.css";
import ProjectCard from "../project_card/ProjectCard";

const Project = () => {
  //date
  const projects = [
    {
      id: 1,
      img: "./images/Project/wedding.png",
      langs: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
      title: "Studio Wedding",
      desc: "Minecraft servers hosting",
      link: "https://tntann.github.io/studio_wedding/",
    },
    {
      id: 2,
      img: "./images/Project/shopee.png",
      langs: ["HTML", "CSS", "Reponsive"],
      title: "Shopee Clone",
      desc: "Discord anti-crash bot",
      link: "https://tntann.github.io/shopee_clone/",
    },
    {
      id: 3,
      img: "./images/Project/music-app.png",
      langs: ["HTML", "CSS", "JAVASCRIPT"],
      title: "Music Player",
      desc: "Get answers to your kahoot quiz",
      link: "https://tntann.github.io/music_player/",
    },
  ];

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
            <a href="">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* card */}
          {projects.map((item) => {
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
