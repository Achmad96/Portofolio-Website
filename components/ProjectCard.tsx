"use client";
import Image from "next/image";

import { iconComponents } from "constants/IconComponents";
import { ProjectType } from "@/constants/ProjectsMetadata";
import { useEffect, useState } from "react";

interface IProjectCard {
  project: ProjectType;
  index: number;
}

const ProjectCard = (props: IProjectCard) => {
  const { project } = props;
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch(`/api/capture?url=${encodeURIComponent(project.url)}`).then(
      async (res) => {
        const blob = await res.blob();
        setImage(URL.createObjectURL(blob));
      },
    );
  }, []);
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer max-sm:w-80">
      {/* <figure className="relative h-52 w-full">
        {image && (
          <Image
            className="h-48 w-full"
            src={image}
            alt={project.title}
            fill={true}
            sizes="(max-width: 1024px) 100vw"
          />
        )}
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
          <div className="badge badge-primary">{project.type}</div>
        </h2>
        <p>{project.description}</p>
        <div className="card-actions justify-start">
          <div className="mt-1 flex items-center gap-3">
            {project.icons.map((icon, index) => {
              const IconComponent = iconComponents[icon];
              return (
                <span key={index}>
                  <IconComponent size={25} />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
