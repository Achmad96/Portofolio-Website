import { PROJECTS_METADATA } from "@/constants/ProjectsMetadata";

import ProjectCard from "@/components/ProjectCard";

const Work = () => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-10 max-sm:flex-col max-sm:items-center max-sm:gap-5">
      {PROJECTS_METADATA.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
};
export default Work;
