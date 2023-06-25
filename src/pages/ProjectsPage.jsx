import React from "react";
import CompleteApps from "../components/complete_apps/CompleteApps";
import SmallProjects from "../components/small_projects/SmallProjects";

const ProjectsPage = () => {
  return (
    <div>
      <CompleteApps />
      <SmallProjects />
    </div>
  );
};

export default ProjectsPage;
