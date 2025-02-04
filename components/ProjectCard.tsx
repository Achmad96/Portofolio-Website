import { ICON_COMPONENTS } from "constants/IconComponents";
import { ProjectType } from "@/constants/ProjectsMetadata";
import Link from "next/link";

interface IProjectCard {
  project: ProjectType;
}

const ProjectCard = (props: IProjectCard) => {
  const { project } = props;
  return (
    <Link
      href={project.url}
      className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer max-sm:w-80"
    >
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
          <div className="badge badge-primary">{project.type}</div>
        </h2>
        <p>{project.description}</p>
        <div className="card-actions justify-start">
          <div className="mt-1 flex items-center gap-3">
            {project.icons.map((icon, index) => {
              const IconComponent = ICON_COMPONENTS[icon];
              return (
                <span key={index}>
                  <IconComponent size={25} />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
