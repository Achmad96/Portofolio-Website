import { Projects } from "@/constants/ProjectsMetadata";

import ProjectCard from "@/components/ProjectCard";

export default function Work() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-10 max-sm:flex-col max-sm:items-center max-sm:gap-5">
      {Projects.map((project, i) => (
        <ProjectCard key={i} project={project} index={i} />
      ))}
    </div>
  );
}
