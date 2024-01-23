import { useState } from "react";
import { projectsDescriptions as projects } from "./projectsDescription";
import MainTitle from "@/components/MainTitle";
import CreationCard from "./CreationCard";

const GaleryProjects = () => {
  const [projectId, setProjectId] = useState(1);

  return (
    <section className=" hidden lg:flex justify-center items-center">
      <section className="flex justify-evenly">
        <div className="flex flex-col justify-center w-1/3">
          <MainTitle title="Créations" changeStyle="xlg:text-8xl" />
          {projects.map((project, index) => {
            return (
              <div key={index} className="mb-3">
                <a
                  className=" cursor-pointer"
                  onClick={() => {
                    setProjectId(Number(project.id));
                  }}
                >
                  <h1
                    className="relative text-3xl text- w-fit block
                    after:block after:content-[''] after:absolute after:h-[3px]
                    after:bg-accentColor after:w-full after:scale-x-0 after:hover:scale-x-100
                    after:transition after:duration-700 after:origin-center"
                  >
                    {project.title}
                  </h1>
                </a>
              </div>
            );
          })}
        </div>
        <div className="p-5 w-[50%]">
          <CreationCard project={projects[projectId - 1]} />
        </div>
      </section>
    </section>
  );
};

export default GaleryProjects;
