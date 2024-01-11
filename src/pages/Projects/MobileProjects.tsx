import { projectsDescriptions as projects } from "./projectsDescription";
import ArrowRight from "@/components/ArrowRight";
import MainTitle from "@/components/MainTitle";


const MobileProjects = () => {
  return (
    <>
      <section
        id="mobileProjects"
        className="dark:text-offwhite lg:hidden"
      >
        <MainTitle title="What I Did" />
        <div className="my-10 flex flex-col">
          {projects.map((project, index) => {
            return (
              <div key={index} className="pb-10" id={`mobileProjects${index}`}>
                <div className="flex mb-4 items-center">
                  <h1 className="text-xl  me-1"> {project.title}</h1>
                  {project.live ? (
                    <a href={project.live} target="_blank">
                      <ArrowRight />
                    </a>
                  ) : (
                    <div className="translate-y-[2px]">
                      <span className="ms-1 text-zinc-400 ">In Progress</span>
                    </div>
                  )}
                </div>
                <img src={project.mobileImages[0]} alt={`HomePage Image from ${project.title}'s project`} />
                <p className="mt-4 text-sm">{project.description}</p>
                <div className="mt-6">
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {project.tools.map((tool, index) => {
                      return (
                        <p
                          key={index}
                          className=" rounded bg-accentColor/60 p-1 text-offwhite text-center text-sm dark:bg-darkAccentColor dark:text-accentColor"
                        >
                          {tool}
                          {}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div id="finalSession"></div>
    </>
  );
}

export default MobileProjects